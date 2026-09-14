const bcrypt = require("bcryptjs");
const User = require("../models/User");

async function enforceSingleAdminFromEnv() {
  const adminPhone = String(process.env.ADMIN_PHONE || "").trim();
  const adminPassword = String(process.env.ADMIN_PASSWORD || "");
  const adminName = String(process.env.ADMIN_NAME || "Super Admin").trim();
  const adminProfileName = String(process.env.ADMIN_PROFILE_NAME || adminName || "").trim();

  if (!adminPhone || !adminPassword) {
    console.warn("Admin bootstrap skipped: ADMIN_PHONE yoki ADMIN_PASSWORD topilmadi.");
    return;
  }

  if (adminPassword.length < 6) {
    console.warn("Admin bootstrap skipped: ADMIN_PASSWORD kamida 6 belgidan iborat bo'lsin.");
    return;
  }

  const passwordHash = await bcrypt.hash(adminPassword, 10);

  const existingByPhone = await User.findOne({ phone: adminPhone });
  if (existingByPhone) {
    existingByPhone.fullName = adminProfileName || adminName || existingByPhone.fullName;
    existingByPhone.role = "admin";
    existingByPhone.passwordHash = passwordHash;
    await existingByPhone.save();
  } else {
    await User.create({
      fullName: adminProfileName || adminName,
      phone: adminPhone,
      passwordHash,
      role: "admin",
      isVerified: true
    });
  }

  await User.updateMany(
    { role: "admin", phone: { $ne: adminPhone } },
    { $set: { role: "customer" } }
  );

  console.log("Admin bootstrap complete: only one admin account is active.");
}

module.exports = { enforceSingleAdminFromEnv };
