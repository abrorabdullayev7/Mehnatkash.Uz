const LOCAL_USERS_STORE_KEY = "ustatop_local_users";
const PROFILE_STORE_KEY = "ustatop_profile";
const TOKEN_STORE_KEY = "ustatop_token";

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const loginAlert = document.getElementById("loginAlert");
const registerAlert = document.getElementById("registerAlert");
const sessionCard = document.getElementById("sessionCard");
const sessionMeta = document.getElementById("sessionMeta");
const logoutBtn = document.getElementById("logoutBtn");

const tabs = {
  login: document.getElementById("tabLogin"),
  register: document.getElementById("tabRegister")
};

const inputs = {
  loginPhone: document.getElementById("loginPhone"),
  loginPassword: document.getElementById("loginPassword"),
  regFirstName: document.getElementById("regFirstName"),
  regLastName: document.getElementById("regLastName"),
  regPhone: document.getElementById("regPhone"),
  regRole: document.getElementById("regRole"),
  regRegion: document.getElementById("regRegion"),
  regPassword: document.getElementById("regPassword"),
  regPassword2: document.getElementById("regPassword2")
};

function normalizePhoneKey(raw) {
  return String(raw || "").replace(/\D/g, "").replace(/^998/, "").slice(-9);
}

function formatPhoneFromKey(phoneKey) {
  const d = String(phoneKey || "").replace(/\D/g, "").slice(-9);
  if (d.length !== 9) return "+998";
  return `+998 ${d.slice(0, 2)} ${d.slice(2, 5)} ${d.slice(5, 7)} ${d.slice(7, 9)}`;
}

function formatPhone(raw) {
  let digits = String(raw || "").replace(/\D/g, "");
  if (digits.startsWith("998")) digits = digits.slice(3);
  digits = digits.slice(0, 9);
  let out = "+998";
  if (digits.length > 0) out += ` ${digits.slice(0, 2)}`;
  if (digits.length > 2) out += ` ${digits.slice(2, 5)}`;
  if (digits.length > 5) out += ` ${digits.slice(5, 7)}`;
  if (digits.length > 7) out += ` ${digits.slice(7, 9)}`;
  return out;
}

function readLocalUsers() {
  try {
    const users = JSON.parse(localStorage.getItem(LOCAL_USERS_STORE_KEY) || "[]");
    return Array.isArray(users) ? users : [];
  } catch (_) {
    return [];
  }
}

function writeLocalUsers(users) {
  localStorage.setItem(LOCAL_USERS_STORE_KEY, JSON.stringify(Array.isArray(users) ? users : []));
}

function toPublicUser(user) {
  return {
    id: user.id,
    fullName: user.fullName,
    phone: user.phone,
    role: user.role,
    region: user.region || "",
    avatar: user.avatar || ""
  };
}

function localRegister({ fullName, phone, password, role, region }) {
  const cleanName = String(fullName || "").trim().replace(/\s+/g, " ");
  const phoneKey = normalizePhoneKey(phone);
  const pass = String(password || "");
  const normalizedRole = String(role || "client").toLowerCase() === "provider" ? "provider" : "client";
  if (!cleanName || !phoneKey || !pass || !region) throw new Error("Barcha maydonlarni to'ldiring.");
  if (phoneKey.length !== 9) throw new Error("Telefon raqam noto'g'ri.");

  const users = readLocalUsers();
  if (users.some((u) => u.phoneKey === phoneKey)) {
    throw new Error("Bu telefon raqam bilan hisob allaqachon mavjud.");
  }

  const user = {
    id: `local-${Date.now()}`,
    fullName: cleanName,
    phone: formatPhoneFromKey(phoneKey),
    phoneKey,
    password: pass,
    role: normalizedRole,
    region,
    avatar: "",
    createdAt: new Date().toISOString()
  };
  users.unshift(user);
  writeLocalUsers(users);
  return { user: toPublicUser(user), token: `local-token-${user.id}`, profileComplete: true };
}

function localLogin({ phone, password }) {
  const phoneKey = normalizePhoneKey(phone);
  const pass = String(password || "");
  if (!phoneKey || !pass) throw new Error("Telefon va parolni kiriting.");

  const user = readLocalUsers().find((u) => u.phoneKey === phoneKey);
  if (!user || user.password !== pass) {
    throw new Error("Telefon yoki parol noto'g'ri.");
  }
  return { user: toPublicUser(user), token: `local-token-${user.id}`, profileComplete: true };
}

function isNetworkFetchError(error) {
  const msg = String(error?.message || "").toLowerCase();
  return error?.name === "TypeError" || msg.includes("failed to fetch") || msg.includes("network");
}

function apiBase() {
  const stored = localStorage.getItem("ustatop_api_base");
  const fallback = location.port === "5000" ? "/api" : "http://127.0.0.1:5000/api";
  return String(stored || fallback).replace(/\/+$/, "");
}

async function apiRequest(path, options = {}) {
  const token = localStorage.getItem(TOKEN_STORE_KEY);
  const res = await fetch(`${apiBase()}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    ...options
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = data?.message || data?.error || "Xatolik yuz berdi.";
    throw new Error(message);
  }
  return data;
}

async function authRequestWithFallback(mode, payload, localPayload = {}) {
  const path = mode === "register" ? "/auth/register" : "/auth/login";
  try {
    return await apiRequest(path, { method: "POST", body: JSON.stringify(payload) });
  } catch (error) {
    if (!isNetworkFetchError(error)) throw error;
    return mode === "register" ? localRegister({ ...payload, ...localPayload }) : localLogin(payload);
  }
}

function showAlert(el, message, type = "error") {
  if (!el) return;
  el.textContent = message || "";
  el.classList.remove("hidden", "error", "success");
  if (!message) {
    el.classList.add("hidden");
    return;
  }
  el.classList.add(type);
}

function setActiveTab(view) {
  tabs.login.classList.toggle("active", view === "login");
  tabs.register.classList.toggle("active", view === "register");
  loginForm.classList.toggle("hidden", view !== "login");
  registerForm.classList.toggle("hidden", view !== "register");
}

function setView(view) {
  setActiveTab(view);
  history.replaceState(null, "", `#${view}`);
  showAlert(loginAlert, "");
  showAlert(registerAlert, "");
}

function saveSession(user, token) {
  if (user) localStorage.setItem(PROFILE_STORE_KEY, JSON.stringify(user));
  if (token) localStorage.setItem(TOKEN_STORE_KEY, token);
}

function clearSession() {
  localStorage.removeItem(PROFILE_STORE_KEY);
  localStorage.removeItem(TOKEN_STORE_KEY);
}

function currentProfile() {
  try {
    return JSON.parse(localStorage.getItem(PROFILE_STORE_KEY) || "null");
  } catch (_) {
    return null;
  }
}

function updateSessionCard() {
  const profile = currentProfile();
  if (!profile) {
    sessionCard.classList.add("hidden");
    return;
  }
  sessionCard.classList.remove("hidden");
  sessionMeta.textContent = `${profile.fullName || "-"} • ${formatPhone(profile.phone || "")}`;
}

function redirectToHome(user) {
  setTimeout(() => {
    window.location.href = String(user?.role || "").toLowerCase() === "admin"
      ? "dashboard.html"
      : "index.html";
  }, 900);
}

tabs.login.addEventListener("click", () => setView("login"));
tabs.register.addEventListener("click", () => setView("register"));

document.querySelectorAll("[data-switch]").forEach((btn) => {
  btn.addEventListener("click", () => setView(btn.dataset.switch));
});

["loginPhone", "regPhone"].forEach((id) => {
  const el = inputs[id];
  if (!el) return;
  el.addEventListener("input", () => {
    el.value = formatPhone(el.value);
  });
});

logoutBtn?.addEventListener("click", () => {
  clearSession();
  updateSessionCard();
  showAlert(loginAlert, "Tizimdan chiqdingiz.", "success");
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const phone = inputs.loginPhone.value.trim();
  const password = inputs.loginPassword.value;
  if (!phone || !password) return showAlert(loginAlert, "Telefon va parolni kiriting.");
  try {
    showAlert(loginAlert, "Tekshirilmoqda...", "success");
    const data = await authRequestWithFallback("login", { phone, password });
    saveSession(data.user, data.token);
    updateSessionCard();
    showAlert(loginAlert, "Muvaffaqiyatli kirdingiz. Yo'naltirilmoqda...", "success");
    redirectToHome(data.user);
  } catch (error) {
    showAlert(loginAlert, error.message || "Kirishda xatolik yuz berdi.");
  }
});

registerForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const firstName = inputs.regFirstName.value.trim();
  const lastName = inputs.regLastName.value.trim();
  const phone = inputs.regPhone.value.trim();
  const role = inputs.regRole.value;
  const region = inputs.regRegion.value;
  const password = inputs.regPassword.value;
  const password2 = inputs.regPassword2.value;
  if (!firstName || !lastName || !phone || !region || !password || !password2) {
    return showAlert(registerAlert, "Barcha maydonlarni to'ldiring.");
  }
  if (password.length < 4) return showAlert(registerAlert, "Parol kamida 4 ta belgi bo'lsin.");
  if (password !== password2) return showAlert(registerAlert, "Parollar mos kelmadi.");
  try {
    showAlert(registerAlert, "Tekshirilmoqda...", "success");
    const data = await authRequestWithFallback(
      "register",
      { fullName: `${firstName} ${lastName}`, phone, password, role, region },
      { role, region }
    );
    saveSession(data.user, data.token);
    updateSessionCard();
    showAlert(registerAlert, "Ro'yxatdan o'tdingiz. Yo'naltirilmoqda...", "success");
    redirectToHome();
  } catch (error) {
    showAlert(registerAlert, error.message || "Ro'yxatdan o'tishda xatolik yuz berdi.");
  }
});

const hash = String(window.location.hash || "").replace("#", "");
if (hash === "register") setActiveTab("register");
else setActiveTab("login");

updateSessionCard();
