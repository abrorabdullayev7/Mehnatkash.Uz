const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const ProviderProfile = require("../models/ProviderProfile");

function signToken(userId) {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
}

function toPublicUser(user) {
  if (!user) return null;
  const obj = typeof user.toObject === "function" ? user.toObject() : { ...user };
  delete obj.passwordHash;
  delete obj.__v;
  if (obj.avatarUrl && !obj.avatar) obj.avatar = obj.avatarUrl;
  return obj;
}

function normalizeIdentityName(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/\s+/g, "")
    .trim();
}

exports.register = async (req, res) => {
  try {
    const { fullName, phone, email, password, role, city, district } = req.body;

    if (!fullName || !phone || !password) {
      return res.status(400).json({ message: "fullName, phone va password majburiy" });
    }

    const exists = await User.findOne({ phone });
    if (exists) {
      return res.status(409).json({ message: "Bu telefon raqami allaqachon ro'yxatdan o'tgan" });
    }

    const requestedRole = String(role || "").trim().toLowerCase();
    if (requestedRole === "admin") {
      return res.status(403).json({ message: "Admin rolini ro'yxatdan o'tish orqali olib bo'lmaydi" });
    }

    const safeRole = requestedRole === "provider" ? "provider" : "customer";

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({
      fullName,
      phone,
      email,
      passwordHash,
      role: safeRole,
      city,
      district
    });

    const token = signToken(user._id);
    let profileComplete = true;
    if ((user.role || "") === "provider") {
      const profile = await ProviderProfile.findOne({ userId: user._id });
      profileComplete = !!profile;
    }
    return res.status(201).json({ token, user: toPublicUser(user), profileComplete });
  } catch (error) {
    return res.status(500).json({ message: "Server xatosi", error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { phone, password } = req.body;
    const user = await User.findOne({ phone });

    if (!user) {
      return res.status(401).json({ message: "Noto'g'ri login yoki parol" });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ message: "Noto'g'ri login yoki parol" });
    }

    const envAdminPhone = String(process.env.ADMIN_PHONE || "").trim();
    const envAdminProfileName = String(process.env.ADMIN_PROFILE_NAME || process.env.ADMIN_NAME || "").trim();
    if ((user.role || "") === "admin") {
      const samePhone = !envAdminPhone || String(user.phone || "").trim() === envAdminPhone;
      const sameProfile =
        !envAdminProfileName ||
        normalizeIdentityName(user.fullName) === normalizeIdentityName(envAdminProfileName);
      if (!samePhone || !sameProfile) {
        return res.status(403).json({ message: "Admin kirishi bloklangan" });
      }
    }

    const token = signToken(user._id);
    let profileComplete = true;
    if ((user.role || "") === "provider") {
      const profile = await ProviderProfile.findOne({ userId: user._id });
      profileComplete = !!profile;
    }
    return res.json({ token, user: toPublicUser(user), profileComplete });
  } catch (error) {
    return res.status(500).json({ message: "Server xatosi", error: error.message });
  }
};

exports.me = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: "Foydalanuvchi topilmadi" });
    }
    return res.json({ user: toPublicUser(user) });
  } catch (error) {
    return res.status(500).json({ message: "Server xatosi", error: error.message });
  }
};
