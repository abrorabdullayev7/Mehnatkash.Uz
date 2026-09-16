const uzbekistanRegions = {
    "Qoraqalpog'iston Respublikasi": ["Nukus shahri", "Amudaryo", "Beruniy", "Chimboy", "Ellikqal'a", "Kegeyli", "Mo'ynoq", "Nukus tumani", "Qanliko'l", "Qo'ng'irot", "Qorao'zak", "Shumanay", "Taxtako'pir", "To'rtko'l", "Xo'jayli"],
    "Andijon viloyati": ["Andijon shahri", "Andijon tumani", "Asaka", "Baliqchi tuman", "Bo'z", "Buloqboshi", "Izboskan", "Jalaquduq", "Xo'jaobod", "Qo'rg'ontepa", "Marhamat", "Oltinko'l", "Paxtaobod", "Shahrixon", "Ulug'nor"],
    "Buxoro viloyati": ["Buxoro shahri", "Buxoro tumani", "G'ijduvon", "Jondor", "Kogon shahri", "Kogon tumani", "Olot", "Peshku", "Romitan", "Shofirkon", "Qorako'l", "Qorovulbozor", "Vobkent"],
    "Farg'ona viloyati": ["Farg'ona shahri", "Farg'ona tumani", "Qo'qon shahri", "Quvasoy shahri", "Marg'ilon shahri", "Bag'dod", "Beshariq", "Buvayda", "Dang'ara", "Furqat", "Oltiariq", "O'zbekiston", "Rishton", "So'x", "Toshloq", "Uchko'prik", "Yozyovon", "Quva"],
    "Jizzax viloyati": ["Jizzax shahri", "Arnasoy", "Baxmal", "Do'stlik", "Forish", "G'allaorol", "Sharof Rashidov", "Mirzacho'l", "Paxtakor", "Yangiobod", "Zafarobod", "Zarbdor"],
    "Xorazm viloyati": ["Urganch shahri", "Xiva shahri", "Urganch tumani", "Bog'ot", "Gurlan", "Qo'shko'pir", "Shovot", "Hazorasp", "Xonqa", "Xiva tumani", "Yangiariq", "Yangibozor", "Tuproqqal'a"],
    "Namangan viloyati": ["Namangan shahri", "Namangan tumani", "Chortoq", "Chust", "Kosonsoy", "Mingbuloq", "Norin", "Pop", "To'raqo'rg'on", "Uchqo'rg'on", "Uychi", "Yangiqo'rg'on"],
    "Navoiy viloyati": ["Navoiy shahri", "Zarafshon shahri", "Karmana", "Konimex", "Qiziltepa", "Navbahor", "Nurota", "Tomdi", "Uchquduq", "Xatirchi"],
    "Qashqadaryo viloyati": ["Qarshi shahri", "Shahrisabz shahri", "Qarshi tumani", "Chiroqchi", "Dehqonobod", "G'uzor", "Kasbi", "Kitob", "Koson", "Mirishkor", "Muborak", "Nishon", "Qamashi", "Yakkabog'", "Shahrisabz tumani"],
    "Samarqand viloyati": ["Samarqand shahri", "Kattaqo'rg'on shahri", "Samarqand tumani", "Bulung'ur", "Ishtixon", "Jomboy", "Kattaqo'rg'on tumani", "Narpay", "Nurobod", "Oqdaryo", "Pastdarg'om", "Payariq", "Paqtachi", "Qo'shrabot", "Toyloq", "Urgut"],
    "Sirdaryo viloyati": ["Guliston shahri", "Shirin shahri", "Yangiyer shahri", "Guliston tumani", "Boyovut", "Mirzaobod", "Oqoltin", "Sardoba", "Sayxunobod", "Sirdaryo", "Xovos"],
    "Surxondaryo viloyati": ["Termiz shahri", "Termiz tumani", "Angor", "Bandixon", "Boysun", "Denov", "Jarqo'rg'on", "Muzrabot", "Oltinsoy", "Sariosiyo", "Sherobod", "Sho'rchi", "Qiziriq", "Qumqo'rg'on", "Uzun"],
    "Toshkent viloyati": ["Nurafshon shahri", "Bekobod shahri", "Chirchiq shahri", "Angren shahri", "Olmaliq shahri", "Ohangaron shahri", "Yangiyo'l shahri", "Bekobod tumani", "Bo'ka", "Bo'stonliq", "Zangiota", "Yuqori Chirchiq", "Quyi Chirchiq", "Oqqo'rg'on", "Parkent", "Piskent", "Ohangaron tumani", "Qibray", "Chinoz", "Yangiyo'l tumani", "O'rta Chirchiq"],
    "Toshkent shahri": ["Bektemir", "Chilonzor", "Mirzo Ulug'bek", "Mirobod", "Olmazor", "Sergeli", "Shayxontohur", "Uchtepa", "Yakkasaroy", "Yashnobod", "Yunusobod", "Yangihayot"]
};

// Categories tailored for "Mehnatkashlar" (labour / jobs oriented)
const categories = ["Barchasi", "Pol ta'miri", "Tom ta'miri", "Bo'yoq/Bezash", "Mardikor", "Elektrik", "IT xizmati", "Santexnik", "Mashin ta'mirlash"];
const categoryTranslations = {
    uz: {
        "Barchasi": "Barchasi",
        "Pol ta'miri": "Pol ta'miri",
        "Tom ta'miri": "Tom ta'miri",
        "Bo'yoq/Bezash": "Bo'yoq/Bezash",
        "Mardikor": "Mardikor",
        "Elektrik": "Elektrik",
        "IT xizmati": "IT xizmati",
        "Santexnik": "Santexnik",
        "Mashin ta'mirlash": "Mashin ta'mirlash"
    },
    ru: {
        "Barchasi": "Все",
        "Pol ta'miri": "Ремонт пола",
        "Tom ta'miri": "Ремонт крыши",
        "Bo'yoq/Bezash": "Покраска/Отделка",
        "Mardikor": "Разнорабочий",
        "Elektrik": "Электрик",
        "IT xizmati": "IT услуги",
        "Santexnik": "Сантехник",
        "Mashin ta'mirlash": "Ремонт авто"
    },
    en: {
        "Barchasi": "All",
        "Pol ta'miri": "Floor Repair",
        "Tom ta'miri": "Roof Repair",
        "Bo'yoq/Bezash": "Painting/Finishing",
        "Mardikor": "Handyman",
        "Elektrik": "Electrician",
        "IT xizmati": "IT Service",
        "Santexnik": "Plumber",
        "Mashin ta'mirlash": "Auto Repair"
    }
};
const categoryIcons = {
    "Barchasi": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    "Pol ta'miri": `<svg viewBox="0 0 48 48" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="10" width="36" height="28" rx="2"/><path d="M6 20h36M6 30h36"/></g></svg>`,
    "Tom ta'miri": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 12h3v7h6v-5h2v5h6v-7h3L12 3z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    "Bo'yoq/Bezash": `<svg viewBox="0 0 48 48" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M36 14l-6 6-10-10 6-6z"/><path d="M10 38c4-4 12-4 16 0"/></g></svg>`,
    "Mardikor": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21h18M12 3v6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    "Elektrik": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 4 14h6l-1 8 9-12h-6z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    "IT xizmati": `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 20h8M10 16v4m4-4v4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    "Santexnik": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12h12M15 12c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5M8 6l2-3h6l2 3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    "Mashin ta'mirlash": `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9h2l1 8H2L3 9zm16 0h2l-1 8h16l1-8h2M8 17h8" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6" cy="17" r="2" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="18" cy="17" r="2" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>`
};

const defaultChatContacts = [
    
];
const masters = [];

const getDefaultApiBase = () => {
    const hostname = window.location.hostname || "127.0.0.1";
    if (location.port === "5000") return "/api";
    if (hostname === "localhost" || hostname === "127.0.0.1" || hostname === "[::1]") {
        return "http://127.0.0.1:5000/api";
    }
    return `http://${hostname}:5000/api`;
};

const API_BASE = (localStorage.getItem("ustatop_api_base") || getDefaultApiBase()).replace(/\/+$/, "");

async function apiRequest(path, options = {}) {
    const token = localStorage.getItem("ustatop_token");
    const headers = {
        "Content-Type": "application/json",
        ...(token ? { "Authorization": `Bearer ${token}` } : {}),
        ...(options.headers || {})
    };
    const res = await fetch(`${API_BASE}${path}`, {
        ...options,
        headers
    });
    let data = null;
    try { data = await res.json(); } catch (_) { }
    if (!res.ok) {
        const msg = data?.message || `HTTP ${res.status}`;
        const err = new Error(msg);
        err.status = res.status;
        throw err;
    }
    return data || {};
}

async function refreshProfileFromServer({ silent = true } = {}) {
    const token = localStorage.getItem("ustatop_token");
    if (!token || token.startsWith("local-token-")) return null;
    try {
        const data = await apiRequest("/auth/me");
        if (data?.user) {
            const normalized = normalizeProfileFromServer(data.user);
            if (normalized) {
                state.profile = applyStoredAvatarToProfile({
                    ...(state.profile || {}),
                    ...normalized
                });
                saveState();
                syncPostRegionWithProfile();
                updateAuthLockUI();
                renderProfile();
                renderAccountModal();
            }
        }
        return data?.user || null;
    } catch (error) {
        if (error?.status === 401) {
            performLogout();
        } else if (!silent) {
            showMessage(error?.message || "Profilni yuklashda xatolik.");
        }
        return null;
    }
}

const PROFILE_AVATAR_STORE_KEY = "ustatop_profile_avatars";
const LOCAL_USERS_STORE_KEY = "ustatop_local_users";
const ADMIN_ACCOUNT_STORE_KEY = "ustatop_admin_account";
const ADMIN_SESSION_STORE_KEY = "ustatop_admin_session";
const ADMIN_TAB_STORE_KEY = "ustatop_admin_tab";
const CHAT_OWNER_STORE_KEY = "ustatop_chat_owner";
const MESSAGES_ENABLED = true;

const state = {
    tab: "home",
    activeCategory: "Barchasi",
    query: "",
    region: "",
    district: "",
    theme: localStorage.getItem("ustatop_theme") || "dark",
    lang: localStorage.getItem("ustatop_lang") || "uz",
    messagesView: "list",
    profile: JSON.parse(localStorage.getItem("ustatop_profile") || "null"),
    myAds: JSON.parse(localStorage.getItem("ustatop_ads") || "[]"),
    ratings: JSON.parse(localStorage.getItem("ustatop_ratings") || "{}"),
    myRatings: JSON.parse(localStorage.getItem("ustatop_my_ratings") || "{}"),
    chatContacts: JSON.parse(localStorage.getItem("ustatop_chat_contacts") || "null") || defaultChatContacts,
    chats: JSON.parse(localStorage.getItem("ustatop_chats") || "{}"),
    chatSeenAt: JSON.parse(localStorage.getItem("ustatop_chat_seen_at") || "{}"),
    chatPinned: JSON.parse(localStorage.getItem("ustatop_chat_pinned") || "{}"),
    chatMuted: JSON.parse(localStorage.getItem("ustatop_chat_muted") || "{}"),
    activeChatId: localStorage.getItem("ustatop_active_chat") || "",
    adminAccount: null,
    adminSession: false,
    adminDashboardTab: localStorage.getItem(ADMIN_TAB_STORE_KEY) || "overview"
};
let forceChatScrollBottom = false;
let chatReplyContext = null;
let chatEditContext = null;
let chatContextMenuState = null;
let chatSocket = null;
let activeChatOwnerId = "";

function normalizePhoneKey(raw) {
    return String(raw || "").replace(/\D/g, "").replace(/^998/, "").slice(-9);
}

function getCurrentUserId() {
    return String(state.profile?.id ?? state.profile?._id ?? "").trim();
}

function isMessageMine(message) {
    const senderId = String(message?.senderId || "").trim();
    if (senderId && getCurrentUserId()) return senderId === getCurrentUserId();
    return message?.sender === "me";
}

function getChatAccountStoreKey(kind, userId = getCurrentUserId()) {
    return `ustatop_${kind}_${encodeURIComponent(String(userId || "guest"))}`;
}

function saveChatAccountState() {
    if (!activeChatOwnerId) return;
    localStorage.setItem(getChatAccountStoreKey("chats", activeChatOwnerId), JSON.stringify(state.chats || {}));
    localStorage.setItem(getChatAccountStoreKey("chat_seen_at", activeChatOwnerId), JSON.stringify(state.chatSeenAt || {}));
    localStorage.setItem(getChatAccountStoreKey("chat_contacts", activeChatOwnerId), JSON.stringify(state.chatContacts || []));
    localStorage.setItem(getChatAccountStoreKey("chat_pinned", activeChatOwnerId), JSON.stringify(state.chatPinned || {}));
    localStorage.setItem(getChatAccountStoreKey("chat_muted", activeChatOwnerId), JSON.stringify(state.chatMuted || {}));
}

function syncChatAccountScope() {
    const userId = getCurrentUserId();
    if (!userId || userId === activeChatOwnerId) return;
    if (activeChatOwnerId) saveChatAccountState();
    const savedChats = JSON.parse(localStorage.getItem(getChatAccountStoreKey("chats", userId)) || "null");
    const savedSeenAt = JSON.parse(localStorage.getItem(getChatAccountStoreKey("chat_seen_at", userId)) || "null");
    const savedContacts = JSON.parse(localStorage.getItem(getChatAccountStoreKey("chat_contacts", userId)) || "null");
    const savedPinned = JSON.parse(localStorage.getItem(getChatAccountStoreKey("chat_pinned", userId)) || "null");
    const savedMuted = JSON.parse(localStorage.getItem(getChatAccountStoreKey("chat_muted", userId)) || "null");
    if (savedChats && typeof savedChats === "object") state.chats = savedChats;
    else if (activeChatOwnerId) state.chats = {};
    if (savedSeenAt && typeof savedSeenAt === "object") state.chatSeenAt = savedSeenAt;
    else if (activeChatOwnerId) state.chatSeenAt = {};
    if (Array.isArray(savedContacts)) state.chatContacts = savedContacts;
    else if (activeChatOwnerId) state.chatContacts = [];
    if (savedPinned && typeof savedPinned === "object") state.chatPinned = savedPinned;
    else if (activeChatOwnerId) state.chatPinned = {};
    if (savedMuted && typeof savedMuted === "object") state.chatMuted = savedMuted;
    else if (activeChatOwnerId) state.chatMuted = {};
    activeChatOwnerId = userId;
    localStorage.setItem(CHAT_OWNER_STORE_KEY, userId);
    ensureChatStateShape();
    saveChatAccountState();
}

function readAvatarStore() {
    try {
        const parsed = JSON.parse(localStorage.getItem(PROFILE_AVATAR_STORE_KEY) || "{}");
        return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
    } catch (_) {
        return {};
    }
}

function writeAvatarStore(store) {
    localStorage.setItem(PROFILE_AVATAR_STORE_KEY, JSON.stringify(store || {}));
}

function getProfileAvatarKeys(profile) {
    if (!profile) return [];
    const keys = [];
    const id = profile._id ?? profile.id;
    if (id !== undefined && id !== null && String(id).trim()) keys.push(`id:${String(id).trim()}`);
    const phoneKey = normalizePhoneKey(profile.phone);
    if (phoneKey) keys.push(`phone:${phoneKey}`);
    return keys;
}

function applyStoredAvatarToProfile(profile) {
    if (!profile || typeof profile !== "object") return profile;
    if (profile.avatar) return profile;
    const store = readAvatarStore();
    const key = getProfileAvatarKeys(profile).find((k) => !!store[k]);
    if (!key) return profile;
    return { ...profile, avatar: store[key] };
}

function saveAvatarForProfile(profile, avatarDataUrl) {
    if (!profile || !avatarDataUrl) return;
    const store = readAvatarStore();
    getProfileAvatarKeys(profile).forEach((key) => {
        store[key] = avatarDataUrl;
    });
    writeAvatarStore(store);
}

function syncCurrentUserAdsAvatar(avatarDataUrl) {
    const uid = state.profile?.id ?? state.profile?._id;
    if (uid === undefined || uid === null) return;
    state.myAds.forEach((ad) => {
        if (String(ad.ownerId) === String(uid)) ad.avatar = avatarDataUrl || "";
    });
}

function safeAvatarSrc(value) {
    const src = String(value || "").trim();
    if (!src) return "";
    if (/^data:image\/[a-zA-Z0-9.+-]+;base64,/i.test(src)) return src;
    if (/^https?:\/\//i.test(src) || src.startsWith("/") || src.startsWith("./") || src.startsWith("../")) return src;
    return "";
}

function avatarMarkup(name, avatar, extraClass = "", inlineStyle = "") {
    const safeSrc = safeAvatarSrc(avatar);
    const classes = ["avatar", extraClass, safeSrc ? "has-image" : ""].filter(Boolean).join(" ");
    const styleAttr = inlineStyle ? ` style="${inlineStyle}"` : "";
    if (!safeSrc) return `<div class="${classes}"${styleAttr}>${getInitials(name)}</div>`;
    return `<div class="${classes}"${styleAttr}><img src="${escapeHtml(safeSrc)}" alt="${escapeHtml(name)}" loading="lazy" decoding="async" /></div>`;
}

function readFileAsDataUrl(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || ""));
        reader.onerror = () => reject(new Error("Faylni o'qib bo'lmadi"));
        reader.readAsDataURL(file);
    });
}

function formatPhoneFromKey(phoneKey) {
    const d = String(phoneKey || "").replace(/\D/g, "").slice(-9);
    if (d.length !== 9) return "+998";
    return `+998 ${d.slice(0, 2)} ${d.slice(2, 5)} ${d.slice(5, 7)} ${d.slice(7, 9)}`;
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

function readAdminAccount() {
    try {
        const parsed = JSON.parse(localStorage.getItem(ADMIN_ACCOUNT_STORE_KEY) || "null");
        if (!parsed || typeof parsed !== "object") return null;
        const displayName = String(parsed.displayName || "").trim();
        const username = String(parsed.username || "").trim().toLowerCase();
        const password = String(parsed.password || "");
        if (!displayName || !username || !password) return null;
        return {
            displayName,
            username,
            password,
            createdAt: parsed.createdAt || new Date().toISOString()
        };
    } catch (_) {
        return null;
    }
}

function writeAdminAccount(account) {
    if (!account) {
        localStorage.removeItem(ADMIN_ACCOUNT_STORE_KEY);
        return;
    }
    localStorage.setItem(ADMIN_ACCOUNT_STORE_KEY, JSON.stringify(account));
}

function normalizeAdminUsername(value) {
    return String(value || "").trim().toLowerCase();
}

function normalizeUserRole(role) {
    const value = String(role || "").toLowerCase().trim();
    if (["provider", "worker", "usta", "ishchi", "mutaxassis"].includes(value)) return "provider";
    return "client";
}

function normalizeAccountRole(role) {
    const value = String(role || "").toLowerCase().trim();
    if (value === "admin") return "admin";
    return normalizeUserRole(value);
}

function normalizeProfileFromServer(user) {
    if (!user || typeof user !== "object") return null;
    const normalized = { ...user };
    if (!normalized.avatar && normalized.avatarUrl) normalized.avatar = normalized.avatarUrl;
    normalized.role = normalizeAccountRole(normalized.role);
    return normalized;
}

function updateLocalUserByPhone(phone, patch = {}) {
    const phoneKey = normalizePhoneKey(phone);
    if (!phoneKey) return;
    const users = readLocalUsers();
    const idx = users.findIndex((u) => u.phoneKey === phoneKey);
    if (idx < 0) return;
    users[idx] = { ...users[idx], ...patch };
    writeLocalUsers(users);
}

function updateLocalUserProfile(oldPhone, updates = {}) {
    const oldKey = normalizePhoneKey(oldPhone);
    if (!oldKey) return { ok: false, error: "Telefon raqam noto'g'ri." };
    const users = readLocalUsers();
    const idx = users.findIndex((u) => u.phoneKey === oldKey);
    if (idx < 0) return { ok: false, notFound: true };
    const next = { ...users[idx] };
    if (updates.fullName) next.fullName = String(updates.fullName).trim().replace(/\s+/g, " ");
    const nextKey = updates.phoneKey || normalizePhoneKey(updates.phone);
    if (nextKey) {
        if (users.some((u, i) => i !== idx && u.phoneKey === nextKey)) {
            return { ok: false, error: "Bu telefon raqam bilan hisob mavjud." };
        }
        next.phoneKey = nextKey;
        next.phone = formatPhoneFromKey(nextKey);
    }
    users[idx] = next;
    writeLocalUsers(users);
    return { ok: true, user: next };
}

function toPublicUser(user) {
    return {
        id: user.id,
        fullName: user.fullName,
        phone: user.phone,
        role: normalizeUserRole(user.role),
        region: user.region || "",
        avatar: user.avatar || ""
    };
}

function localRegister({ fullName, phone, password, role, region }) {
    const cleanName = String(fullName || "").trim().replace(/\s+/g, " ");
    const phoneKey = normalizePhoneKey(phone);
    const pass = String(password || "");
    const normalizedRole = normalizeUserRole(role);
    if (!cleanName || !phoneKey || !pass || !region) throw new Error("Barcha maydonlarni to'ldiring");
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

async function authRequestWithFallback(mode, payload, localPayload = {}) {
    const path = mode === "register" ? "/auth/register" : "/auth/login";
    try {
        return await apiRequest(path, { method: "POST", body: JSON.stringify(payload) });
    } catch (error) {
        if (!isNetworkFetchError(error)) throw error;
        return mode === "register" ? localRegister({ ...payload, ...localPayload }) : localLogin(payload);
    }
}

function getMessagesDisabledText() {
    if (state.lang === "ru") return "Раздел сообщений скоро будет доступен.";
    if (state.lang === "en") return "Messages are coming soon.";
    return "Xabarlar bo'limi tez kunda ishga tushadi.";
}

function getAuthRequiredText() {
    if (state.lang === "ru") return "Сначала войдите, зарегистрируйтесь или войдите как админ.";
    if (state.lang === "en") return "Please sign in, sign up, or log in as admin first.";
    return "Avval tizimga kiring, ro'yxatdan o'ting yoki admin sifatida kiring.";
}

function canCreatePost(profile = state.profile) {
    if (!profile) return false;
    return normalizeAccountRole(profile.role) === "client";
}

function isAdminLoggedIn() {
    return String(state.profile?.role || "").toLowerCase() === "admin";
}

function isAuthenticated() {
    return !!state.profile;
}

function getPostRoleRequiredText() {
    if (state.lang === "ru") return "Объявление может размещать только работодатель.";
    if (state.lang === "en") return "Only employers can post ads.";
    return "E'lonni faqat ish beruvchi joylashi mumkin.";
}

function updateAuthLockUI() {
    const locked = !isAuthenticated();
    document.body.classList.toggle("auth-locked", locked);
    document.querySelectorAll(".nav-item").forEach((item) => {
        const roleLockedPost = !locked && item.dataset.tab === "post" && !canCreatePost();
        const isLockedItem = (locked && item.dataset.tab !== "profile") || roleLockedPost;
        item.classList.toggle("locked", isLockedItem);
        if (isLockedItem) item.setAttribute("aria-disabled", "true");
        else item.removeAttribute("aria-disabled");
    });
    // Show/hide post ad + auth buttons in header
    const postAdContainer = document.getElementById("postAdBtnContainer");
    const authButtons = document.getElementById("authButtonsContainer");
    const userProfileContainer = document.getElementById("userProfileContainer");
    const headerUserName = document.getElementById("headerUserName");
    const headerAvatar = document.getElementById("headerAvatar");
    if (postAdContainer) {
        if (isAuthenticated()) postAdContainer.classList.remove("hidden");
        else postAdContainer.classList.add("hidden");
    }
    if (authButtons) {
        if (isAuthenticated()) authButtons.classList.add("hidden");
        else authButtons.classList.remove("hidden");
    }
    if (userProfileContainer) {
        if (isAuthenticated()) userProfileContainer.classList.remove("hidden");
        else userProfileContainer.classList.add("hidden");
    }
    if (headerUserName) {
        const label = state.profile?.fullName || formatPhone(state.profile?.phone || "") || "Foydalanuvchi";
        headerUserName.textContent = isAuthenticated() ? label : "";
    }
    if (headerAvatar) {
        if (isAuthenticated()) {
            const avatar = state.profile?.avatar || "";
            if (avatar) {
                headerAvatar.style.backgroundImage = `url(${avatar})`;
                headerAvatar.classList.add("has-image");
                headerAvatar.textContent = "";
            } else {
                const fallbackName = state.profile?.fullName || formatPhone(state.profile?.phone || "") || "U";
                headerAvatar.style.backgroundImage = "";
                headerAvatar.classList.remove("has-image");
                headerAvatar.textContent = getInitials(fallbackName);
            }
        } else {
            headerAvatar.style.backgroundImage = "";
            headerAvatar.classList.remove("has-image");
            headerAvatar.textContent = "";
        }
    }
}

function applyMessagesFeatureToggle() {
    const bottomNav = document.getElementById("bottomNav");
    if (!bottomNav) return;
    bottomNav.classList.toggle("messages-disabled", !MESSAGES_ENABLED);
    const msgScreen = document.getElementById("screen-messages");
    if (msgScreen && !MESSAGES_ENABLED) msgScreen.classList.remove("active");
}

function syncBottomNavHeight() {
    const fallback = 84;
    const nav = document.getElementById("bottomNav");
    const height = Math.max(fallback, Math.ceil(nav?.offsetHeight || 0));
    document.documentElement.style.setProperty("--bottom-nav-height", `${height}px`);
}

function syncTopbarHeight() {
    const top = document.querySelector('.topbar');
    if (!top) return;
    const h = Math.max(48, Math.ceil(top.offsetHeight || 0));
    document.documentElement.style.setProperty('--topbar-height', `${h}px`);
}

function ensureChatStateShape() {
    if (!Array.isArray(state.chatContacts)) state.chatContacts = [];
    state.chatContacts = state.chatContacts.filter((c) => c && c.id && c.name);

    if (!state.chats || typeof state.chats !== "object" || Array.isArray(state.chats)) {
        state.chats = {};
    }
    if (!state.chatSeenAt || typeof state.chatSeenAt !== "object" || Array.isArray(state.chatSeenAt)) {
        state.chatSeenAt = {};
    }
    if (!state.chatPinned || typeof state.chatPinned !== "object" || Array.isArray(state.chatPinned)) state.chatPinned = {};
    if (!state.chatMuted || typeof state.chatMuted !== "object" || Array.isArray(state.chatMuted)) state.chatMuted = {};

    state.chatContacts.forEach((c) => {
        if (!Array.isArray(state.chats[c.id])) state.chats[c.id] = [];
    });

    if (!state.activeChatId || !state.chatContacts.some((c) => c.id === state.activeChatId)) {
        state.activeChatId = state.chatContacts[0]?.id || "";
    }
}

function saveState() {
    localStorage.setItem("ustatop_ads", JSON.stringify(state.myAds));
    localStorage.setItem("ustatop_ratings", JSON.stringify(state.ratings));
    localStorage.setItem("ustatop_my_ratings", JSON.stringify(state.myRatings));
    localStorage.setItem("ustatop_chat_contacts", JSON.stringify(state.chatContacts));
    localStorage.setItem("ustatop_chats", JSON.stringify(state.chats));
    localStorage.setItem("ustatop_chat_seen_at", JSON.stringify(state.chatSeenAt || {}));
    localStorage.setItem("ustatop_chat_pinned", JSON.stringify(state.chatPinned || {}));
    localStorage.setItem("ustatop_chat_muted", JSON.stringify(state.chatMuted || {}));
    localStorage.setItem("ustatop_active_chat", state.activeChatId);
    saveChatAccountState();
    localStorage.setItem("ustatop_theme", state.theme);
    localStorage.setItem("ustatop_lang", state.lang);
    if (state.profile) localStorage.setItem("ustatop_profile", JSON.stringify(state.profile));
    else localStorage.removeItem("ustatop_profile");
    localStorage.removeItem(ADMIN_ACCOUNT_STORE_KEY);
    localStorage.removeItem(ADMIN_SESSION_STORE_KEY);
    localStorage.setItem(ADMIN_TAB_STORE_KEY, state.adminDashboardTab || "overview");
}

async function refreshAdsFromServer({ silent = true } = {}) {
    const token = localStorage.getItem("ustatop_token");
    if (!token) {
        const localAds = JSON.parse(localStorage.getItem("ustatop_ads") || "[]");
        state.myAds = Array.isArray(localAds) ? localAds : [];
        renderAds();
        return state.myAds;
    }

    try {
        const response = await apiRequest("/ads");
        const serverAds = Array.isArray(response?.ads) ? response.ads : [];
        const localAds = JSON.parse(localStorage.getItem("ustatop_ads") || "[]");
        const merged = [...serverAds, ...((Array.isArray(localAds) ? localAds : []).filter((ad) => !serverAds.some((item) => String(item.id || item._id) === String(ad.id || ad._id))))];
        state.myAds = merged;
        localStorage.setItem("ustatop_ads", JSON.stringify(state.myAds));
        renderAds();
        return state.myAds;
    } catch (error) {
        if (!silent) showMessage(error?.message || "E'lonlarni yuklashda xatolik yuz berdi.");
        const localAds = JSON.parse(localStorage.getItem("ustatop_ads") || "[]");
        state.myAds = Array.isArray(localAds) ? localAds : [];
        renderAds();
        return state.myAds;
    }
}

function collectPostFormData() {
    return {
        title: document.getElementById("jobTitle")?.value.trim() || "",
        category: document.getElementById("jobCategory")?.value || "",
        budget: document.getElementById("jobBudget")?.value.trim() || "",
        contact: document.getElementById("jobContact")?.value.trim() || "",
        description: document.getElementById("jobDescription")?.value.trim() || "",
        region: document.getElementById("postRegion")?.value || "",
        district: document.getElementById("postDistrict")?.value || "",
        address: document.getElementById("jobAddress")?.value.trim() || ""
    };
}

function validatePostForm(data) {
    const requiredFields = [
        ["title", "ishchi qidirilayotgan sarlavha"],
        ["category", "kategoriya"],
        ["budget", "ish haqi"],
        ["contact", "bog'lanish telefoni"],
        ["description", "batafsil tavsif"],
        ["region", "viloyat"],
        ["district", "tuman/shahar"],
        ["address", "aniq manzil"]
    ];
    const missing = requiredFields.find(([key]) => !String(data[key] || "").trim());
    if (missing) return `Iltimos, ${missing[1]} maydonini to'ldiring.`;
    if (!/^\+?998[\d\s()-]{9,}$/.test(data.contact.replace(/\s/g, ""))) {
        return "Iltimos, to'g'ri telefon raqamini kiriting.";
    }
    if (Number(data.budget) <= 0) return "Ish haqi 0 dan katta bo'lishi kerak.";
    return "";
}

function syncPostRegionWithProfile() {
    const select = document.getElementById("postRegion");
    const districtSelect = document.getElementById("postDistrict");
    const profileRegion = String(state.profile?.region || "");
    if (!select) return;

    if (profileRegion) {
        select.value = profileRegion;
        select.disabled = false;
        fillDistricts(profileRegion);
        if (districtSelect && state.profile?.district) {
            districtSelect.value = state.profile.district;
        }
        return;
    }

    select.value = "";
    select.disabled = false;
    if (districtSelect) {
        districtSelect.value = "";
        districtSelect.disabled = true;
    }
    fillDistricts("");
}

function clearPostForm() {
    ["jobTitle", "jobCategory", "jobBudget", "jobContact", "jobDescription", "jobAddress"].forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.value = "";
    });
    const region = document.getElementById("postRegion");
    if (region) {
        region.value = "";
        region.disabled = false;
    }
    const district = document.getElementById("postDistrict");
    if (district) {
        district.value = "";
        district.disabled = true;
    }
    fillDistricts("");
}

function buildPreviewHtml(data) {
    return `
      <div style="display:flex;flex-direction:column;gap:16px;">
        <div style="font-size: 14px; color: var(--text-muted);">Bu yerda e'lonning saytga qanday chiqishini ko'rishingiz mumkin.</div>
        <div style="padding: 20px; border: 1px solid var(--border); border-radius: 18px; background: #ffffff;">
          <h3 style="margin: 0 0 10px; font-size: 22px;">${escapeHtml(data.title || "Ishchi qidirilyapti")}</h3>
          <p style="margin: 0 0 12px; color: var(--text-muted);">${escapeHtml(data.description || "Ish joyi, muddat va shartlar haqida qisqacha yozing.")}</p>
          <div style="display:grid;gap:12px;">
            <div><strong>Kategoriya:</strong> ${escapeHtml(data.category || "- ")}</div>
            <div><strong>Ish haqi:</strong> ${escapeHtml(data.budget ? data.budget + " so'm" : "- ")}</div>
            <div><strong>Viloyat:</strong> ${escapeHtml(data.region || "- ")}</div>
            <div><strong>Tuman/Shahar:</strong> ${escapeHtml(data.district || "- ")}</div>
            <div><strong>Manzil:</strong> ${escapeHtml(data.address || "-")}</div>
            <div><strong>Telefon:</strong> ${escapeHtml(data.contact || "- ")}</div>
          </div>
        </div>
      </div>
    `;
}

function showPreviewModal(html) {
    const modal = document.getElementById("postPreviewModal");
    const content = document.getElementById("previewContent");
    if (!modal || !content) return;
    content.innerHTML = html;
    modal.classList.add("open");
}

function closePreviewModal() {
    document.getElementById("postPreviewModal")?.classList.remove("open");
}

async function savePostAd(data) {
    const record = {
        id: Date.now(),
        ownerId: state.profile?.id ?? state.profile?._id ?? 1,
        ownerName: state.profile?.fullName || state.profile?.name || "E'lon egasi",
        ownerAvatar: state.profile?.avatar || "",
        name: data.title,
        spec: data.category,
        price: data.budget,
        region: data.region,
        district: data.district,
        phone: data.contact,
        bio: data.description,
        address: data.address,
        avatar: state.profile?.avatar || "",
        createdAt: new Date().toISOString(),
        booked: false,
        bookedBy: null,
        bookedAt: null
    };

    const token = localStorage.getItem("ustatop_token");
    if (token) {
        try {
            const payload = {
                ...record,
                title: record.name,
                category: record.spec,
                budget: record.price,
                contact: record.phone,
                description: record.bio,
                ownerId: record.ownerId,
                ownerName: record.ownerName,
                ownerAvatar: record.ownerAvatar,
                avatar: record.avatar
            };
            const response = await apiRequest("/ads", {
                method: "POST",
                body: JSON.stringify(payload)
            });
            const savedAd = response?.ad || { ...record, id: response?.ad?.id || record.id };
            state.myAds = [savedAd, ...state.myAds.filter((item) => String(item.id) !== String(savedAd.id))];
            saveState();
            renderAds();
            renderMasters();
            if (document.getElementById("screen-profile")) renderProfile();
            return savedAd;
        } catch (error) {
            console.warn("Server ad save failed, falling back to local storage:", error);
        }
    }

    state.myAds.unshift(record);
    saveState();
    renderAds();
    renderMasters();
    if (document.getElementById("screen-profile")) renderProfile();
    return record;
}

function toTs(value) { return new Date(value || 0).getTime(); }

function getLastMessageTime(chatId) {
    const messages = state.chats[chatId] || [];
    if (!messages.length) return 0;
    return toTs(messages[messages.length - 1]?.createdAt);
}

function getUnreadCount(chatId) {
    const seenAt = Number(state.chatSeenAt?.[chatId] || 0);
    const messages = state.chats[chatId] || [];
    return messages.filter((m) => !isMessageMine(m) && toTs(m.createdAt) > seenAt).length;
}

function markChatAsRead(chatId) {
    if (!chatId) return;
    const messages = state.chats[chatId] || [];
    const lastOther = [...messages].reverse().find((m) => !isMessageMine(m));
    const latestSeen = lastOther ? toTs(lastOther.createdAt) : getLastMessageTime(chatId);
    state.chatSeenAt[chatId] = Math.max(state.chatSeenAt[chatId] || 0, latestSeen);
}

function normalizeCategory(value) {
    return String(value || "").toLocaleLowerCase("uz-UZ").replace(/['`‘’ʼ]/g, "").replace(/\s+/g, "").trim();
}
function resolveCategoryLabel(value) {
    const normalizedValue = normalizeCategory(value);
    return categories.find((c) => c !== "Barchasi" && normalizeCategory(c) === normalizedValue) || String(value || "").trim();
}
function isSameCategory(left, right) { return normalizeCategory(left) === normalizeCategory(right); }
function normalizePlace(value) {
    return String(value || "").toLocaleLowerCase("uz-UZ").replace(/['`‘’ʼ]/g, "").replace(/\s+/g, "").trim();
}
function isSamePlace(left, right) { return normalizePlace(left) === normalizePlace(right); }
function getCurrentUserAds() {

    // If not logged in, show ads with ownerId = 1 (default for guest users)
    const uid = state.profile?.id ?? state.profile?._id ?? 1;
    return state.myAds.filter((ad) => String(ad.ownerId) === String(uid));
}

function getCurrentUserDisplayName() {
    return state.profile?.fullName || state.profile?.name || "Foydalanuvchi";
}

function getAdOwnerContactId(ad) {
    return `chat-ad-${ad.id}`;
}

function ensureAdOwnerChat(ad) {
    if (!ad) return null;
    const contactId = getAdOwnerContactId(ad);
    let contact = state.chatContacts.find((c) => c.id === contactId);
    if (!contact) {
        contact = {
            id: contactId,
            name: ad.ownerName || ad.owner || ad.name || "E'lon egasi",
            role: ad.spec || "E'lon",
            avatar: ad.ownerAvatar || ad.avatar || "",
            participantIds: []
        };
        state.chatContacts.push(contact);
    }
    const participantIds = new Set(contact.participantIds || []);
    if (ad.ownerId !== undefined && ad.ownerId !== null) participantIds.add(String(ad.ownerId));
    if (getCurrentUserId()) participantIds.add(getCurrentUserId());
    contact.participantIds = [...participantIds];
    chatSocket?.emit("join_room", contactId);
    if (!Array.isArray(state.chats[contactId])) state.chats[contactId] = [];
    return contact;
}

function joinOwnedAdChatRooms() {
    const currentUserId = getCurrentUserId();
    if (!currentUserId || !chatSocket) return;
    (state.myAds || [])
        .filter((ad) => String(ad.ownerId) === currentUserId)
        .forEach((ad) => {
            const contactId = getAdOwnerContactId(ad);
            let contact = state.chatContacts.find((item) => item.id === contactId);
            if (!contact) {
                contact = {
                    id: contactId,
                    name: ad.ownerName || ad.owner || ad.name || "E'lon egasi",
                    role: ad.spec || "E'lon",
                    avatar: ad.ownerAvatar || ad.avatar || "",
                    participantIds: [currentUserId]
                };
                state.chatContacts.push(contact);
            }
            chatSocket.emit("join_room", contactId);
        });
    saveChatAccountState();
}

function openAdChat(ad) {
    if (!ad) return null;
    const contact = ensureAdOwnerChat(ad);
    if (!contact) return null;
    state.activeChatId = contact.id;
    state.messagesView = "chat";
    switchTab("messages");
    renderMessagesScreen();
    return contact;
}

function bookAd(adId) {
    if (!state.profile) return showMessage(getAuthRequiredText());
    const ad = state.myAds.find((item) => String(item.id) === String(adId));
    if (!ad) return showMessage("E'lon topilmadi.");
    const currentUserId = getCurrentUserId();
    if (String(ad.ownerId) === currentUserId) {
        return showMessage("O'zingizning e'loningizga band qila olmaysiz.");
    }
    // Mark ad as booked and notify owner (without navigating to chat)
    if (ad.booked) return showMessage("Bu e'lon allaqachon band qilingan.");
    const actorName = getCurrentUserDisplayName();
    ad.booked = true;
    ad.bookedBy = actorName;
    ad.bookedAt = new Date().toISOString();
    // try to notify owner via chat contacts (silent)
    const contact = ensureAdOwnerChat(ad);
    if (contact && Array.isArray(state.chats[contact.id])) {
        state.chats[contact.id].push({
            id: `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            sender: "other",
            text: `${actorName} sizning "${ad.name || "e'lon"}" e'longizni band qildi.`,
            createdAt: new Date().toISOString()
        });
    }
    saveState();
    renderAds();
    showMessage("E'lon muvaffaqiyatli band qilindi.");
}

function mapAdToMaster(ad) {
    return {
        id: `ad-${ad.id}`,
        name: ad.name,
        avatar: ad.avatar || "",
        category: resolveCategoryLabel(ad.spec),
        region: ad.region,
        district: ad.district,
        rating: 0, reviews: 0,
        price: ad.price,
        phone: ad.phone,
        bio: ad.bio || "Foydalanuvchi tomonidan joylangan e'lon."
    };
}

function getInitials(name) {
    const words = String(name || "").trim().split(/\s+/).filter(Boolean);
    if (!words.length) return "?";
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
}

function getRatingData(master) {
    const list = state.ratings[master.id] || [];
    if (list.length) {
        const avg = list.reduce((sum, val) => sum + val, 0) / list.length;
        return { rating: avg, reviews: list.length };
    }
    return { rating: master.rating || 0, reviews: master.reviews || 0 };
}

function ratingMarkup(rating, reviews) {
    const stars = Math.round(rating);
    const starHtml = Array.from({ length: 5 }, (_, i) =>
        `<svg width="14" height="14" viewBox="0 0 24 24" fill="${i < stars ? '#fbbf24' : '#e5e7eb'}" stroke="none">
            <polygon points="12,2 15,8 22,9 17,14 18,21 12,18 6,21 7,14 2,9 9,8"/>
        </svg>`
    ).join("");
    return `<div class="rating" style="display:flex;align-items:center;gap:4px;font-size:14px;color:#6b7280;">
        <div class="stars">${starHtml}</div>
        <span class="rating-score">${rating.toFixed(1)}</span>
        <span class="reviews-count">(${reviews} sharh)</span>
    </div>`;
}

function formatPhone(raw) {
    const d = String(raw || "").replace(/\D/g, "").replace(/^998/, "").slice(0, 9);
    const p = [d.slice(0, 2), d.slice(2, 5), d.slice(5, 7), d.slice(7, 9)].filter(Boolean);
    return "+998 " + p.join(" ");
}

function money(n) {
    const sum = formatSum(n);
    return `${sum} ${t("somUnit", "so'm")}`;
}

function formatSum(value) {
    const raw = String(value || "").replace(/[^0-9]/g, "");
    const num = Number(raw || 0);
    return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function pad2(n) { return String(n).padStart(2, "0"); }
function formatDateShort(iso) {
    if (!iso) return "";
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "";
    return `${pad2(d.getDate())}.${pad2(d.getMonth()+1)}.${d.getFullYear()} ${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
}

function fillRegions(id, empty) {
    const s = document.getElementById(id);
    if (s) s.innerHTML = `<option value="">${empty}</option>` + Object.keys(uzbekistanRegions).map(r => `<option value="${r}">${r}</option>`).join("");
}

function fillDistricts(region) {
    const s = document.getElementById("postDistrict");
    if (!s) return;
    if (!region) { s.innerHTML = `<option value="">${t("chooseRegionFirst", "Avval viloyat tanlang")}</option>`; s.disabled = true; return; }
    s.disabled = false;
    s.innerHTML = `<option value="">${t("chooseDistrict", "Tumanni tanlang")}</option>` + (uzbekistanRegions[region] || []).map(d => `<option value="${d}">${d}</option>`).join("");
}

function fillDistrictFilter(region) {
    const s = document.getElementById("districtSelect");
    if (!s) return;
    if (!region) {
        s.disabled = true;
        state.district = "";
        s.innerHTML = `<option value="">${t("chooseRegionFirst", "Avval viloyat tanlang")}</option>`;
        return;
    }
    s.disabled = false;
    const selected = state.district || "";
    const districts = uzbekistanRegions[region] || [];
    s.innerHTML = `<option value="">${t("allDistricts", "Barcha tumanlar")}</option>` + districts.map(d => `<option value="${d}">${d}</option>`).join("");
    if (districts.includes(selected)) s.value = selected;
    else {
        s.value = "";
        state.district = "";
    }
}

const i18n = {
    uz: {
        heroTitle: "Uyingiz uchun eng yaxshi ustani toping",
        heroDesc: "Ishonchli mutaxassislar, tezkor buyurtma va shaffof narxlar.",
        sectionCategoriesTitle: "Kategoriyalar",
        sectionTopMastersTitle: "Top Mehnatkashlar",
        allCategoriesTitle: "Barcha kategoriyalar",
        postTitle: "E'lon berish",
        myAdsTitle: "Mening e'lonlarim",
        profileTitle: "Profil",
        messagesTitle: "Xabarlar",
        navHomeLabel: "Bosh",
        navSearchLabel: "Qidiruv",
        navOrderLabel: "E'lon",
        navMessagesLabel: "Xabarlar",
        navProfileLabel: "Profil",
        searchPlaceholder: "Qidiruv: elektrik, santexnik...",
        chatInputPlaceholder: "Xabar yozing...",
        showcaseSubtitle: "Eng ko'p qidirilgan va ishlatilayotgan xizmatlar",
        allRegions: "Barcha hududlar",
        allDistricts: "Barcha tumanlar",
        chooseRegion: "Viloyat tanlang",
        chooseRegionFirst: "Avval viloyat tanlang",
        chooseDistrict: "Tumanni tanlang",
        resultNotFound: "Natija topilmadi.",
        noRating: "Baholanmagan",
        detailsBtn: "Batafsil",
        messageBtn: "Xabar",
        fromPrice: "Dan",
        noAds: "Hali e'lon yo'q.",
        deleteBtn: "O'chirish",
        confirmDelete: "Rostanham bu e'lonni ochirmoqchimisiz?",
        contactBtn: "Bog'lanish",
        somUnit: "so'm"
    },
    ru: {
        heroTitle: "Найдите лучшего мастера для вашего дома",
        heroDesc: "Надежные специалисты, быстрый заказ и прозрачные цены.",
        sectionCategoriesTitle: "Категории",
        sectionTopMastersTitle: "Топ мастера",
        allCategoriesTitle: "Все категории",
        postTitle: "Подать объявление",
        myAdsTitle: "Мои объявления",
        profileTitle: "Профиль",
        messagesTitle: "Сообщения",
        navHomeLabel: "Главная",
        navSearchLabel: "Поиск",
        navOrderLabel: "Объявление",
        navMessagesLabel: "Сообщения",
        navProfileLabel: "Профиль",
        searchPlaceholder: "Поиск: электрик, сантехник...",
        chatInputPlaceholder: "Введите сообщение...",
        showcaseSubtitle: "Самые популярные и часто используемые услуги",
        allRegions: "Все регионы",
        allDistricts: "Все районы",
        chooseRegion: "Выберите регион",
        chooseRegionFirst: "Сначала выберите регион",
        chooseDistrict: "Выберите район",
        resultNotFound: "Ничего не найдено.",
        noRating: "Без оценки",
        detailsBtn: "Подробнее",
        messageBtn: "Сообщение",
        fromPrice: "От",
        noAds: "Объявлений пока нет.",
        deleteBtn: "Удалить",
        confirmDelete: "Вы действительно хотите удалить это объявление?",
        contactBtn: "Связаться",
        somUnit: "сум"
    },
    en: {
        heroTitle: "Find the best specialist for your home",
        heroDesc: "Trusted experts, fast booking, and transparent prices.",
        sectionCategoriesTitle: "Categories",
        sectionTopMastersTitle: "Top Specialists",
        allCategoriesTitle: "All categories",
        postTitle: "Post an Ad",
        myAdsTitle: "My Ads",
        profileTitle: "Profile",
        messagesTitle: "Messages",
        navHomeLabel: "Home",
        navSearchLabel: "Search",
        navOrderLabel: "Post",
        navMessagesLabel: "Messages",
        navProfileLabel: "Profile",
        searchPlaceholder: "Search: electrician, plumber...",
        chatInputPlaceholder: "Type a message...",
        showcaseSubtitle: "Most searched and frequently used services",
        allRegions: "All regions",
        allDistricts: "All districts",
        chooseRegion: "Choose region",
        chooseRegionFirst: "Choose region first",
        chooseDistrict: "Choose district",
        resultNotFound: "No results found.",
        noRating: "Not rated",
        detailsBtn: "Details",
        messageBtn: "Message",
        fromPrice: "From",
        noAds: "No ads yet.",
        deleteBtn: "Delete",
        confirmDelete: "Do you really want to delete this ad?",
        contactBtn: "Contact",
        somUnit: "UZS"
    }
};

function t(key, fallback = "") {
    return i18n[state.lang]?.[key] ?? i18n.uz?.[key] ?? fallback;
}

function localizeCategory(category) {
    return categoryTranslations[state.lang]?.[category] || categoryTranslations.uz[category] || category;
}

function applyTheme() {
    document.body.classList.toggle("light-theme", state.theme === "light");
    const icon = document.getElementById("themeIcon");
    if (icon) icon.textContent = state.theme === "light" ? "☀️" : "🌙";
}

function applyLanguage() {
    const dictionary = i18n[state.lang] || i18n.uz;
    Object.entries(dictionary).forEach(([id, value]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    });
    const searchInput = document.getElementById("searchInput");
    if (searchInput) searchInput.placeholder = dictionary.searchPlaceholder;
    const chatInput = document.getElementById("chatInput");
    if (chatInput) chatInput.placeholder = dictionary.chatInputPlaceholder;
    const showcaseSubtitle = document.querySelector("#showcase .showcase-head .muted");
    if (showcaseSubtitle) showcaseSubtitle.textContent = t("showcaseSubtitle");

    fillRegions("regionSelect", t("allRegions"));
    fillRegions("postRegion", t("chooseRegion"));
    fillDistrictFilter(state.region);
    fillDistricts(document.getElementById("postRegion")?.value || "");

    const regionSelect = document.getElementById("regionSelect");
    if (regionSelect) regionSelect.value = state.region || "";
    const districtSelect = document.getElementById("districtSelect");
    if (districtSelect) districtSelect.value = state.district || "";

    renderTopShowcase();
    renderChips();
    renderCategories();
    renderMasters();
    renderAds();
    document.documentElement.lang = state.lang;
    renderLangPicker();
    renderFilterPickers();
}

function renderLangPicker() {
    const current = document.getElementById("langCurrent");
    const select = document.getElementById("langSelect");
    const normalized = ["uz", "ru", "en"].includes(state.lang) ? state.lang : "uz";
    if (current) current.textContent = normalized.toUpperCase();
    if (select) select.value = normalized;
    document.querySelectorAll("#langMenu .lang-option").forEach((btn) => {
        const active = btn.dataset.lang === normalized;
        btn.classList.toggle("active", active);
        btn.setAttribute("aria-selected", active ? "true" : "false");
    });
}

function closeLangPicker() {
    const menu = document.getElementById("langMenu");
    const trigger = document.getElementById("langTrigger");
    if (menu) menu.classList.add("hidden");
    if (trigger) trigger.setAttribute("aria-expanded", "false");
}

function setupLangPicker() {
    const picker = document.getElementById("langPicker");
    const trigger = document.getElementById("langTrigger");
    const menu = document.getElementById("langMenu");
    const select = document.getElementById("langSelect");
    if (!picker || !trigger || !menu || !select) return;

    renderLangPicker();

    trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const willOpen = menu.classList.contains("hidden");
        menu.classList.toggle("hidden", !willOpen);
        trigger.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });

    menu.querySelectorAll(".lang-option").forEach((btn) => {
        btn.addEventListener("click", () => {
            const lang = btn.dataset.lang;
            if (!lang) return;
            if (select.value !== lang) {
                select.value = lang;
                select.dispatchEvent(new Event("change", { bubbles: true }));
            }
            closeLangPicker();
        });
    });

    document.addEventListener("click", (e) => {
        if (!picker.contains(e.target)) closeLangPicker();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeLangPicker();
    });
}

function closeFilterPickers() {
    document.querySelectorAll(".field-select-menu").forEach((menu) => menu.classList.add("hidden"));
    document.querySelectorAll(".field-select-trigger").forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}

function renderFilterPicker(selectId, triggerId, menuId) {
    const select = document.getElementById(selectId);
    const trigger = document.getElementById(triggerId);
    const menu = document.getElementById(menuId);
    if (!select || !trigger || !menu) return;

    const options = Array.from(select.options || []);
    const selected = options.find((opt) => opt.value === select.value) || options[0];
    trigger.textContent = selected ? selected.textContent : "";
    trigger.disabled = !!select.disabled;
    trigger.classList.toggle("is-disabled", !!select.disabled);

    menu.innerHTML = options.map((opt) => {
        const isActive = opt.value === select.value;
        return `<button type="button" class="field-select-option ${isActive ? "active" : ""}" data-value="${escapeHtml(opt.value)}" role="option" aria-selected="${isActive ? "true" : "false"}" ${opt.disabled ? "disabled" : ""}>${escapeHtml(opt.textContent)}</button>`;
    }).join("");
}

function renderFilterPickers() {
    renderFilterPicker("regionSelect", "regionTrigger", "regionMenu");
    renderFilterPicker("districtSelect", "districtTrigger", "districtMenu");
    renderFilterPicker("profileRoleSelect", "profileRoleTrigger", "profileRoleMenu");
}

function setupFilterPickers() {
    const configs = [
        { pickerId: "regionPicker", selectId: "regionSelect", triggerId: "regionTrigger", menuId: "regionMenu" },
        { pickerId: "districtPicker", selectId: "districtSelect", triggerId: "districtTrigger", menuId: "districtMenu" },
        { pickerId: "profileRolePicker", selectId: "profileRoleSelect", triggerId: "profileRoleTrigger", menuId: "profileRoleMenu" }
    ];

    configs.forEach(({ pickerId, selectId, triggerId, menuId }) => {
        const picker = document.getElementById(pickerId);
        const select = document.getElementById(selectId);
        const trigger = document.getElementById(triggerId);
        const menu = document.getElementById(menuId);
        if (!picker || !select || !trigger || !menu) return;

        renderFilterPicker(selectId, triggerId, menuId);
        if (picker.dataset.bound === "1") return;
        picker.dataset.bound = "1";

        trigger.addEventListener("click", (e) => {
            e.stopPropagation();
            if (trigger.disabled) return;
            const willOpen = menu.classList.contains("hidden");
            closeFilterPickers();
            menu.classList.toggle("hidden", !willOpen);
            trigger.setAttribute("aria-expanded", willOpen ? "true" : "false");
        });

        menu.addEventListener("click", (e) => {
            const optionBtn = e.target.closest(".field-select-option");
            if (!optionBtn || optionBtn.disabled) return;
            const value = optionBtn.dataset.value ?? "";
            if (select.value !== value) {
                select.value = value;
                select.dispatchEvent(new Event("change", { bubbles: true }));
            } else {
                renderFilterPickers();
            }
            closeFilterPickers();
        });

        select.addEventListener("change", () => renderFilterPicker(selectId, triggerId, menuId));
        const observer = new MutationObserver(() => renderFilterPicker(selectId, triggerId, menuId));
        observer.observe(select, { childList: true, subtree: true, attributes: true, attributeFilter: ["disabled"] });
    });

    if (document.body.dataset.filterPickersBound !== "1") {
        document.body.dataset.filterPickersBound = "1";
        document.addEventListener("click", (e) => {
            if (!e.target.closest(".field-picker")) closeFilterPickers();
        });
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") closeFilterPickers();
        });
    }
}

function ensureChats() {
    ensureChatStateShape();
}

function removeAutomatedChatMessages() {
    const automatedTexts = new Set([
        "Tushunarli. Tez orada javob beraman.",
        "Narxlar ish hajmiga qarab kelishiladi. Batafsil ma'lumot uchun yozing.",
        "Ishning turi va hajmiga qarab narx belgilanadi."
    ]);
    let changed = false;
    Object.keys(state.chats || {}).forEach((chatId) => {
        const messages = state.chats[chatId];
        if (!Array.isArray(messages)) return;
        const filtered = messages.filter((message) => {
            const text = String(message?.text || "");
            const isInitialGreeting = message?.sender === "other" && /^Salom, men .+\. Sizga qanday yordam bera olaman\?$/.test(text);
            const isAutomatedReply = message?.sender === "other" && automatedTexts.has(text);
            return !isInitialGreeting && !isAutomatedReply;
        });
        if (filtered.length !== messages.length) {
            state.chats[chatId] = filtered;
            changed = true;
        }
    });
    if (changed) saveState();
}

function removeDemoData() {
    const demoChatIds = new Set(["chat-akmal", "chat-jasur"]);
    state.chatContacts = (state.chatContacts || []).filter((contact) => !demoChatIds.has(contact.id));
    demoChatIds.forEach((chatId) => {
        delete state.chats[chatId];
        delete state.chatPinned[chatId];
        delete state.chatMuted[chatId];
    });
    state.myAds = (state.myAds || []).filter((ad) => ad.ownerId && String(ad.ownerId) !== "1");
    saveState();
}

function initChatRealtime() {
    if (!window.io || chatSocket) return;
    const socketUrl = API_BASE.replace(/\/api$/, "");
    chatSocket = window.io(socketUrl, { transports: ["websocket", "polling"] });
    chatSocket.on("connect", () => {
        state.chatContacts.forEach((contact) => chatSocket.emit("join_room", contact.id));
        joinOwnedAdChatRooms();
    });
    chatSocket.on("receive_message", (payload) => {
        if (!payload || String(payload.senderId || "") === String(state.profile?.id ?? state.profile?._id ?? "")) return;
        const chatId = String(payload.roomId || payload.chatId || "");
        if (!chatId || !payload.text) return;
        ensureChatStateShape();
        if (!state.chatContacts.some((contact) => contact.id === chatId) && payload.contact) {
            state.chatContacts.push({
                id: chatId,
                name: payload.contact.name || "Usta",
                role: payload.contact.role || "Usta",
                avatar: payload.contact.avatar || ""
            });
        } else if (payload.contact && chatId.startsWith("chat-ad-")) {
            const contact = state.chatContacts.find((item) => item.id === chatId);
            if (contact) {
                contact.name = payload.contact.name || contact.name;
                contact.role = payload.contact.role || contact.role;
                contact.avatar = payload.contact.avatar || contact.avatar || "";
            }
        }
        if (!Array.isArray(state.chats[chatId])) state.chats[chatId] = [];
        if (state.chats[chatId].some((message) => String(message.id) === String(payload.id))) return;
        state.chats[chatId].push({
            id: payload.id || `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            sender: "other",
            senderId: String(payload.senderId || ""),
            text: String(payload.text),
            createdAt: payload.createdAt || new Date().toISOString()
        });
        saveState();
        renderMessagesScreen();
    });
}

function renderMasters() {
    const q = state.query.trim().toLowerCase();
    const qn = normalizePlace(q);
    const all = [...masters, ...state.myAds.map(mapAdToMaster)];
    const filtered = all.filter(m => {
        const catMatch = (state.activeCategory === "Barchasi") || isSameCategory(m.category, state.activeCategory);
        const regionMatch = !state.region || isSamePlace(m.region, state.region);
        const districtMatch = !state.district || isSamePlace(m.district, state.district);
        const queryMatch = !q || [m.name, m.category, m.district, m.region].some((val) => {
            const text = String(val || "");
            const lower = text.toLowerCase();
            if (lower.includes(q)) return true;
            if (qn && normalizePlace(text).includes(qn)) return true;
            return false;
        });
        return catMatch && regionMatch && districtMatch && queryMatch;
    });
    const box = document.getElementById("mastersList");
    if (!box) return;

    if (!filtered.length) {
        box.innerHTML = `<div class="card" style="text-align:center; padding: 60px 20px;"><div class="muted">${t("resultNotFound")}</div></div>`;
        return;
    }

    box.innerHTML = filtered.map(m => {
        const rd = getRatingData(m);
        const isPol = (String(m.category || "").toLowerCase() === "pol ta'miri");
        const genericNote = state.lang === "ru"
            ? "Быстрый выезд и гарантия качества"
            : state.lang === "en"
                ? "Fast response and quality guarantee"
                : "Tezkor xizmat va sifat kafolati";
        const noteText = isPol ? "Zamonaviy pol ishlari — sifatli material va tezkor o'rnatish" : genericNote;
        const priceHtml = isPol ? `<div class="price-tag">10 000 ${t("somUnit", "so'm")} / m²</div>` : `<div class="price-tag">${t("fromPrice")}: ${money(m.price)}</div>`;
        const extraNote = `<div class="muted service-note">${noteText}</div>`;
        const chatLabel = MESSAGES_ENABLED ? t("messageBtn") : (state.lang === "ru" ? "Скоро" : state.lang === "en" ? "Soon" : "Tez orada");
        return `
            <article class="worker-card premium-card">
                <div class="card-header">
                    <div class="worker-avatar">
                        ${avatarMarkup(m.name, m.avatar)}
                    </div>
                </div>
                <div class="card-content">
                    <div class="worker-name">
                        <span class="verify-tick" aria-hidden="true">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22,4 12,14.01 9,11.01"/>
                            </svg>
                        </span>
                        <span>${m.name}</span>
                    </div>
                    <div class="worker-rating">
                        ${ratingMarkup(rd.rating, rd.reviews)}
                    </div>
                    <div class="worker-profession">${localizeCategory(m.category)}</div>
                    <div class="worker-location">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        ${m.region}${m.district ? ', ' + m.district : ''}
                    </div>
                    <div class="worker-price">${priceHtml}</div>
                    <div class="worker-description">${extraNote}</div>
                </div>
                <div class="card-actions">
                    <button class="btn-secondary" data-info="${m.id}">Batafsil</button>
                    <button class="btn-primary" data-chat="${m.id}">${chatLabel}</button>
                </div>
            </article>
        `;
    }).join("");

    box.querySelectorAll("[data-info]").forEach(b => b.addEventListener("click", () => showAdSummary(b.dataset.info)));
    box.querySelectorAll("[data-chat]").forEach(b => b.addEventListener("click", () => openChatWithMaster(b.dataset.chat)));
}


// Render the top-10 showcase (uses categories and icons)
function renderTopShowcase() {
    const container = document.getElementById("topShowcase");
    if (!container) return;

    // attach click handlers
    container.querySelectorAll('.showcase-item').forEach(el => el.addEventListener('click', () => {
        const key = el.dataset.key;
        // set category filter and go to home
        state.activeCategory = key || "Barchasi";
        state.query = "";
        switchTab('home');
        renderMasters();
    }));
}

function escapeHtml(s) { return String(s || "").replace(/[&<>\"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

function formatChatTime(value) {
    const d = new Date(value || Date.now());
    if (Number.isNaN(d.getTime())) return "";
    const locale = state.lang === "ru" ? "ru-RU" : state.lang === "en" ? "en-US" : "uz-UZ";
    return d.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" });
}

function formatChatListTime(value) {
    const d = new Date(value || Date.now());
    if (Number.isNaN(d.getTime())) return "";
    const now = new Date();
    const locale = state.lang === "ru" ? "ru-RU" : state.lang === "en" ? "en-US" : "uz-UZ";
    const sameDay = d.toDateString() === now.toDateString();
    return sameDay
        ? d.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" })
        : d.toLocaleDateString(locale, { day: "2-digit", month: "2-digit" });
}

function getChatUiText() {
    if (state.lang === "ru") {
        return {
            you: "Вы",
            replyTo: "Ответ",
            replyHint: "ответ на сообщение",
            editHint: "редактирование сообщения",
            editBtn: "Изменить",
            deleteBtn: "Удалить",
            copyBtn: "Копировать",
            cancelBtn: "Отмена",
            sendBtn: "Отправить",
            saveBtn: "Сохранить",
            edited: "изменено",
            deleted: "Удаленное сообщение",
            deleteConfirm: "Удалить это сообщение?",
            copied: "Скопировано"
        };
    }
    if (state.lang === "en") {
        return {
            you: "You",
            replyTo: "Reply",
            replyHint: "replying to a message",
            editHint: "editing message",
            editBtn: "Edit",
            deleteBtn: "Delete",
            copyBtn: "Copy",
            cancelBtn: "Cancel",
            sendBtn: "Send",
            saveBtn: "Save",
            edited: "edited",
            deleted: "Deleted message",
            deleteConfirm: "Delete this message?",
            copied: "Copied"
        };
    }
    return {
        you: "Siz",
        replyTo: "Javob",
        replyHint: "xabarga javob",
        editHint: "xabar tahrirlanmoqda",
        editBtn: "Tahrirlash",
        deleteBtn: "O'chirish",
        copyBtn: "Nusxalash",
        cancelBtn: "Bekor qilish",
        sendBtn: "Yuborish",
        saveBtn: "Saqlash",
        edited: "tahrirlangan",
        deleted: "O'chirilgan xabar",
        deleteConfirm: "Bu xabarni o'chiraymi?",
        copied: "Nusxalandi"
    };
}

function sameMessageId(a, b) {
    return String(a ?? "") === String(b ?? "");
}

function clipChatText(value, max = 84) {
    const txt = String(value || "").trim().replace(/\s+/g, " ");
    if (!txt) return "";
    return txt.length > max ? `${txt.slice(0, max - 1)}...` : txt;
}

function getChatMessageIndex(chatId, msgId) {
    const list = state.chats[chatId] || [];
    return list.findIndex((m) => sameMessageId(m.id, msgId));
}

function getChatMessageById(chatId, msgId) {
    const idx = getChatMessageIndex(chatId, msgId);
    if (idx < 0) return null;
    return state.chats[chatId][idx];
}

function copyTextToClipboard(value) {
    const txt = String(value || "");
    if (!txt) return Promise.resolve(false);
    if (navigator.clipboard?.writeText) {
        return navigator.clipboard.writeText(txt).then(() => true).catch(() => false);
    }
    try {
        const ta = document.createElement("textarea");
        ta.value = txt;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(ta);
        return Promise.resolve(!!ok);
    } catch (_) {
        return Promise.resolve(false);
    }
}

function hideChatContextMenu() {
    const menu = document.getElementById("chatContextMenu");
    if (!menu) return;
    menu.classList.add("hidden");
    menu.setAttribute("aria-hidden", "true");
    menu.innerHTML = "";
    chatContextMenuState = null;
}

function showChatContextMenu({ chatId, msgId, sender, x, y }) {
    const menu = document.getElementById("chatContextMenu");
    if (!menu) return;

    const ui = getChatUiText();
    const isChatMenu = !msgId;
    const actions = isChatMenu ? [
        { key: "pin", label: state.chatPinned[chatId] ? "Unpin" : "Pin", icon: "📌" },
        { key: "mark-unread", label: "Mark as unread", icon: "◌" },
        { key: "mute", label: state.chatMuted[chatId] ? "Unmute" : "Mute notifications", icon: "🔕" },
        { key: "clear-chat", label: "Clear chat", icon: "⌫" },
        { key: "delete-chat", label: "Delete chat", icon: "🗑" }
    ] : [
        { key: "reply", label: ui.replyTo, icon: "↩" },
        { key: "copy", label: ui.copyBtn, icon: "⧉" }
    ];
    if (!isChatMenu && sender === "me") {
        actions.splice(1, 0, { key: "edit", label: ui.editBtn, icon: "✎" });
    }
    if (!isChatMenu) actions.push({ key: "delete", label: ui.deleteBtn, icon: "🗑" });

    const menuItem = (a) => `
        <button type="button" class="chat-menu-item ${a.key.includes("delete") ? "danger" : ""}" data-chat-menu-action="${a.key}">
            <span class="chat-menu-icon">${a.icon}</span>
            <span>${escapeHtml(a.label)}</span>
        </button>
    `;
    menu.innerHTML = actions.map(menuItem).join("");
    if (isChatMenu) {
        const muteButton = menu.querySelector('[data-chat-menu-action="mute"]');
        const muteGroup = document.createElement("div");
        muteGroup.className = "chat-menu-mute-group";
        muteGroup.innerHTML = `${muteButton?.outerHTML || ""}
            <div class="chat-mute-submenu">
                ${menuItem({ key: "disable-sound", label: "Disable sound", icon: "♩" })}
                ${menuItem({ key: "mute-for", label: "Mute for...", icon: "◷" })}
                ${menuItem({ key: "mute-forever", label: "Mute forever", icon: "🔇" })}
            </div>`;
        muteButton?.replaceWith(muteGroup);
    }
    menu.classList.remove("hidden");
    menu.setAttribute("aria-hidden", "false");

    const pad = 8;
    let left = x + 8;
    let top = y + 8;
    const rect = menu.getBoundingClientRect();
    const preferAbove = y > window.innerHeight * 0.62;
    if (preferAbove) top = y - rect.height - 8;
    if (left + rect.width + pad > window.innerWidth) left = Math.max(pad, x - rect.width - 8);
    if (top + rect.height + pad > window.innerHeight) top = Math.max(pad, y - rect.height - 8);
    if (top < pad) top = pad;
    menu.style.left = `${left}px`;
    menu.style.top = `${top}px`;

    chatContextMenuState = { chatId, msgId, sender };
}

async function handleChatMenuAction(actionKey) {
    if (!chatContextMenuState) return;
    const ui = getChatUiText();
    const { chatId, msgId, sender } = chatContextMenuState;
    if (!msgId) {
        hideChatContextMenu();
        if (actionKey === "pin") state.chatPinned[chatId] = !state.chatPinned[chatId];
        if (actionKey === "mute") state.chatMuted[chatId] = !state.chatMuted[chatId];
        if (["disable-sound", "mute-for", "mute-forever"].includes(actionKey)) state.chatMuted[chatId] = true;
        if (actionKey === "mark-unread") state.chatSeenAt[chatId] = 0;
        if (actionKey === "clear-chat") state.chats[chatId] = [];
        if (actionKey === "delete-chat") {
            const contact = state.chatContacts.find((item) => item.id === chatId);
            return showConfirm(
                `"${contact?.name || "Bu chat"}" bilan barcha xabarlar tarixi o'chirilsinmi?\n\nBu amalni bekor qilib bo'lmaydi.`,
                () => {
                    state.chatContacts = state.chatContacts.filter((item) => item.id !== chatId);
                    delete state.chats[chatId];
                    delete state.chatPinned[chatId];
                    delete state.chatMuted[chatId];
                    if (state.activeChatId === chatId) state.activeChatId = state.chatContacts[0]?.id || "";
                    saveState();
                    renderMessagesScreen();
                },
                "Chatni o'chirish",
                "O'chirish"
            );
        }
        saveState();
        renderMessagesScreen();
        return;
    }
    const message = getChatMessageById(chatId, msgId);
    hideChatContextMenu();
    if (!message) return;

    if (actionKey === "reply") {
        chatReplyContext = { chatId, msgId };
        chatEditContext = null;
        if (!sameMessageId(state.activeChatId, chatId)) state.activeChatId = chatId;
        renderMessagesScreen();
        document.getElementById("chatInput")?.focus();
        return;
    }

    if (actionKey === "edit" && sender === "me") {
        chatEditContext = { chatId, msgId };
        chatReplyContext = null;
        if (!sameMessageId(state.activeChatId, chatId)) state.activeChatId = chatId;
        renderMessagesScreen();
        const inp = document.getElementById("chatInput");
        if (inp) {
            inp.value = message.text || "";
            inp.focus();
            inp.setSelectionRange(inp.value.length, inp.value.length);
        }
        return;
    }

    if (actionKey === "copy") {
        const copied = await copyTextToClipboard(message.text || "");
        if (copied) showMessage(ui.copied);
        return;
    }

    if (actionKey === "delete") {
        showConfirm(ui.deleteConfirm, () => {
            const idx = getChatMessageIndex(chatId, msgId);
            if (idx < 0) return;
            state.chats[chatId].splice(idx, 1);
            if (chatReplyContext && sameMessageId(chatReplyContext.msgId, msgId) && sameMessageId(chatReplyContext.chatId, chatId)) chatReplyContext = null;
            if (chatEditContext && sameMessageId(chatEditContext.msgId, msgId) && sameMessageId(chatEditContext.chatId, chatId)) chatEditContext = null;
            saveState();
            renderMessagesScreen();
        });
    }
}

function clearChatComposeState() {
    chatReplyContext = null;
    chatEditContext = null;
    hideChatContextMenu();
}

function renderMessagesScreen() {
    syncChatAccountScope();
    ensureChats();
    const list = document.getElementById("chatList");
    const main = document.querySelector("#screen-messages .chat-main");
    const shell = document.querySelector("#screen-messages .chat-shell");
    if (!list || !main || !shell) return;

    const isCompact = window.matchMedia("(max-width: 900px)").matches;
    const isChatView = isCompact ? state.messagesView === "chat" : true;
    shell.classList.toggle("is-chat-view", isCompact && isChatView);
    shell.classList.toggle("is-list-view", isCompact && !isChatView);
    list.classList.toggle("hidden", isCompact && isChatView);
    main.classList.toggle("hidden", isCompact && !isChatView);

    const sortedRaw = [...state.chatContacts].sort((a, b) => {
        const pinDiff = Number(!!state.chatPinned[b.id]) - Number(!!state.chatPinned[a.id]);
        return pinDiff || getLastMessageTime(b.id) - getLastMessageTime(a.id);
    });
    const seenKeys = new Set();
    const sorted = sortedRaw.filter((c) => {
        const key = `${String(c.name || "").trim().toLowerCase()}|${String(c.role || "").trim().toLowerCase()}`;
        if (seenKeys.has(key)) return false;
        seenKeys.add(key);
        return true;
    });
    list.innerHTML = sorted.length ? sorted.map(c => {
        const unread = state.chatMuted[c.id] ? 0 : getUnreadCount(c.id);
        const last = (state.chats[c.id] || []).slice(-1)[0];
        const listTime = last ? formatChatListTime(last.createdAt) : "";
        const emptyPreview = state.lang === "ru" ? "Пока сообщений нет" : state.lang === "en" ? "No messages yet" : "Hozircha xabar yo'q";
        return `
      <button type="button" class="chat-user ${c.id === state.activeChatId ? "active" : ""}" data-chat="${c.id}">
        <div class="chat-user-avatar">${escapeHtml(getInitials(c.name))}</div>
        <div class="chat-user-body">
          <div class="chat-user-row">
            <span class="chat-user-name">${state.chatPinned[c.id] ? "📌 " : ""}${state.chatMuted[c.id] ? "🔕 " : ""}${escapeHtml(c.name)}</span>
            <span class="chat-user-time">${escapeHtml(listTime)}</span>
          </div>
          <div class="chat-user-preview">${escapeHtml(last?.text || emptyPreview)}</div>
        </div>
        ${unread ? `<span class="chat-user-badge">${unread}</span>` : ""}
      </button>
    `;
    }).join("") : `<div class="chat-empty">${state.lang === "ru" ? "Пока нет диалогов." : state.lang === "en" ? "No conversations yet." : "Hozircha suhbatlar yo'q."}</div>`;

    list.querySelectorAll("[data-chat]").forEach(b => b.addEventListener("click", () => {
        state.activeChatId = b.dataset.chat;
        state.messagesView = "chat";
        clearChatComposeState();
        markChatAsRead(state.activeChatId);
        saveState();
        renderMessagesScreen();
    }));
    list.oncontextmenu = (event) => {
        const chatEl = event.target.closest("[data-chat]");
        if (!chatEl) return;
        event.preventDefault();
        showChatContextMenu({ chatId: chatEl.dataset.chat, msgId: "", sender: "", x: event.clientX, y: event.clientY });
    };

    let curr = state.chatContacts.find(c => c.id === state.activeChatId);
    if (!curr && state.chatContacts.length) {
        state.activeChatId = state.chatContacts[0].id;
        curr = state.chatContacts[0];
    }

    const chatTitle = document.getElementById("chatTitle");
    const chatMeta = document.getElementById("chatMeta");
    const thread = document.getElementById("chatThread");
    const chatInput = document.getElementById("chatInput");
    const chatSendBtn = document.getElementById("chatSendBtn");
    const composeMeta = document.getElementById("chatComposeMeta");
    const ui = getChatUiText();
    const hasActiveChat = !!curr;

    if (chatTitle) chatTitle.textContent = hasActiveChat ? curr.name : (state.lang === "ru" ? "Диалог" : state.lang === "en" ? "Conversation" : "Suhbat");
    if (chatMeta) chatMeta.textContent = hasActiveChat
        ? `${curr.role ? String(curr.role) + " • " : ""}${state.lang === "ru" ? "Онлайн" : state.lang === "en" ? "Online" : "Onlayn"}`
        : (state.lang === "ru" ? "Выберите чат слева" : state.lang === "en" ? "Select a chat" : "Chapdan suhbatni tanlang");

    if (chatInput) chatInput.disabled = !hasActiveChat;
    if (chatSendBtn) chatSendBtn.disabled = !hasActiveChat;
    if (chatSendBtn) chatSendBtn.textContent = (chatEditContext && hasActiveChat && chatEditContext.chatId === state.activeChatId) ? ui.saveBtn : ui.sendBtn;

    if (!thread) return;
    const previousChatId = thread.dataset.chatId || "";
    const nearBottom = (thread.scrollHeight - (thread.scrollTop + thread.clientHeight)) <= 72;
    const shouldStickToBottom = forceChatScrollBottom || previousChatId !== state.activeChatId || nearBottom;
    if (!hasActiveChat) {
        thread.innerHTML = `<div class="chat-empty">${state.lang === "ru" ? "Пока нет активного диалога." : state.lang === "en" ? "No active conversation yet." : "Hozircha faol suhbat yo'q."}</div>`;
        thread.dataset.chatId = "";
        hideChatContextMenu();
        if (composeMeta) {
            composeMeta.classList.add("hidden");
            composeMeta.innerHTML = "";
        }
        forceChatScrollBottom = false;
        return;
    }

    if (chatReplyContext && chatReplyContext.chatId !== state.activeChatId) chatReplyContext = null;
    if (chatEditContext && chatEditContext.chatId !== state.activeChatId) chatEditContext = null;

    markChatAsRead(state.activeChatId);
    const chatMessages = state.chats[state.activeChatId] || [];
    if (chatReplyContext && !getChatMessageById(state.activeChatId, chatReplyContext.msgId)) chatReplyContext = null;
    if (chatEditContext) {
        const editing = getChatMessageById(state.activeChatId, chatEditContext.msgId);
        if (!editing || editing.sender !== "me") chatEditContext = null;
    }
    if (chatContextMenuState && (!sameMessageId(chatContextMenuState.chatId, state.activeChatId) || !getChatMessageById(state.activeChatId, chatContextMenuState.msgId))) hideChatContextMenu();

    if (composeMeta) {
        if (chatEditContext) {
            const editing = getChatMessageById(state.activeChatId, chatEditContext.msgId);
            const txt = clipChatText(editing?.text, 96) || "";
            composeMeta.classList.remove("hidden");
            composeMeta.innerHTML = `
                <div class="chat-compose-meta-title">${ui.editHint}</div>
                <div class="chat-compose-meta-text">${escapeHtml(txt)}</div>
                <button type="button" class="chat-compose-meta-close" data-chat-meta-cancel="edit" aria-label="${escapeHtml(ui.cancelBtn)}">✕</button>
            `;
        } else if (chatReplyContext) {
            const replied = getChatMessageById(state.activeChatId, chatReplyContext.msgId);
            const author = replied && isMessageMine(replied) ? ui.you : curr.name;
            const txt = replied ? clipChatText(replied.text, 96) : ui.deleted;
            composeMeta.classList.remove("hidden");
            composeMeta.innerHTML = `
                <div class="chat-compose-meta-title">${ui.replyHint} • ${escapeHtml(author || "")}</div>
                <div class="chat-compose-meta-text">${escapeHtml(txt)}</div>
                <button type="button" class="chat-compose-meta-close" data-chat-meta-cancel="reply" aria-label="${escapeHtml(ui.cancelBtn)}">✕</button>
            `;
        } else {
            composeMeta.classList.add("hidden");
            composeMeta.innerHTML = "";
        }
    }

    thread.innerHTML = chatMessages.length ? `<div class="chat-conversation">${chatMessages.map((m) => {
        const msgId = String(m.id ?? "");
        const replied = m.replyTo ? getChatMessageById(state.activeChatId, m.replyTo) : null;
        const replyAuthor = replied ? (isMessageMine(replied) ? ui.you : curr.name) : ui.deleted;
        const replyText = replied ? clipChatText(replied.text, 84) : ui.deleted;
        const timeLabel = `${formatChatTime(m.createdAt)}${m.editedAt ? ` • ${ui.edited}` : ""}`;
        return `
    <div class="chat-message ${isMessageMine(m) ? "mine" : "theirs"}" data-mid="${escapeHtml(msgId)}" data-sender="${isMessageMine(m) ? "me" : "other"}">
        <div class="chat-bubble">
          ${m.replyTo ? `<div class="chat-reply-quote"><div class="chat-reply-author">${escapeHtml(replyAuthor || "")}</div><div class="chat-reply-text">${escapeHtml(replyText || "")}</div></div>` : ""}
          <div class="chat-bubble-text">${escapeHtml(m.text)}</div>
        </div>
        <div class="chat-msg-time">${escapeHtml(timeLabel)}</div>
      </div>
    `;
    }).join("")}</div>` : `<div class="chat-empty">${state.lang === "ru" ? "Нет сообщений. Напишите первым." : state.lang === "en" ? "No messages yet. Start the conversation." : "Xabar yo'q. Birinchi bo'lib yozing."}</div>`;

    thread.onclick = (event) => {
        const menu = document.getElementById("chatContextMenu");
        if (!menu?.contains(event.target)) hideChatContextMenu();
    };

    thread.oncontextmenu = (event) => {
        const msgEl = event.target.closest(".chat-message");
        if (!msgEl || !thread.contains(msgEl)) return;
        event.preventDefault();

        const msgId = msgEl.dataset.mid;
        const sender = msgEl.dataset.sender;
        if (!msgId) return;
        showChatContextMenu({ chatId: state.activeChatId, msgId, sender, x: event.clientX, y: event.clientY });
    };
    thread.onscroll = () => hideChatContextMenu();

    composeMeta?.querySelector("[data-chat-meta-cancel]")?.addEventListener("click", () => {
        const type = composeMeta.querySelector("[data-chat-meta-cancel]")?.dataset.chatMetaCancel;
        if (type === "edit") chatEditContext = null;
        if (type === "reply") chatReplyContext = null;
        renderMessagesScreen();
    });

    thread.dataset.chatId = state.activeChatId;
    if (shouldStickToBottom) thread.scrollTop = thread.scrollHeight;
    forceChatScrollBottom = false;
}

function handleSendChatMessage() {
    if (!MESSAGES_ENABLED) return showMessage(getMessagesDisabledText());
    const inp = document.getElementById("chatInput");
    if (!inp) return;

    const txt = String(inp.value || "").trim();
    if (!txt) return;

    ensureChats();
    const chatId = state.activeChatId || state.chatContacts[0]?.id;
    if (!chatId || !Array.isArray(state.chats[chatId])) {
        showMessage("Suhbat topilmadi. Sahifani yangilang.");
        return;
    }

    if (chatEditContext && chatEditContext.chatId === chatId) {
        const idx = getChatMessageIndex(chatId, chatEditContext.msgId);
        if (idx < 0) {
            chatEditContext = null;
            return renderMessagesScreen();
        }
        const msg = state.chats[chatId][idx];
        if (!msg || !isMessageMine(msg)) {
            chatEditContext = null;
            return renderMessagesScreen();
        }
        msg.text = txt;
        msg.editedAt = new Date().toISOString();
        inp.value = "";
        chatEditContext = null;
        saveState();
        renderMessagesScreen();
        return;
    }

    const replyToId = (chatReplyContext && chatReplyContext.chatId === chatId) ? chatReplyContext.msgId : null;
    inp.value = "";

    state.activeChatId = chatId;
    state.messagesView = "chat";
    forceChatScrollBottom = true;
    const messageId = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const messageCreatedAt = new Date().toISOString();
    state.chats[chatId].push({
        id: messageId,
        sender: "me",
        senderId: getCurrentUserId(),
        text: txt,
        createdAt: messageCreatedAt,
        ...(replyToId ? { replyTo: replyToId } : {})
    });
    chatReplyContext = null;
    chatSocket?.emit("send_message", {
        roomId: chatId,
        message: {
            id: messageId,
            roomId: chatId,
            senderId: getCurrentUserId(),
            text: txt,
            createdAt: messageCreatedAt,
            contact: {
                name: state.profile?.fullName || state.profile?.name || "Foydalanuvchi",
                role: state.profile?.role || "Ish beruvchi",
                avatar: state.profile?.avatar || ""
            }
        }
    });
    renderMessagesScreen();
    saveState();
}

function renderAds() {
    const box = document.getElementById("myAds");
    if (!box) return;

    const ads = state.myAds || [];
    if (!ads.length) {
        box.innerHTML = '<div class="muted">Hali e\'lon yo\'q.</div>';
        return;
    }

    box.innerHTML = ads.map((ad) => `
        <article class="worker-card premium-card" style="margin-bottom: 16px;">
            <div class="card-header">
                <div class="worker-avatar">${avatarMarkup(ad.name || "E'lon", ad.avatar)}</div>
            </div>
            <div class="card-content">
                <div class="worker-name"><span>${escapeHtml(ad.name || "E'lon")}</span></div>
                <div class="worker-profession">${escapeHtml(ad.spec || "-")}</div>
                <div class="worker-location">${escapeHtml(ad.region || "")}${ad.region && ad.district ? ", " : ""}${escapeHtml(ad.district || "")}</div>
                <div class="worker-price" style="display:flex;flex-direction:column;align-items:center;margin-bottom:12px;">
                    <div class="price-tag">${money(ad.price)}</div>
                    ${ad.booked ? `<div class="muted" style="margin-top:8px; font-size:13px;">Band qilgan: ${escapeHtml(ad.bookedBy || "-")}</div>` : ""}
                </div>
            </div>
            <div class="card-actions" style="margin-top: 16px; flex-wrap: wrap;">
                <button class="btn-secondary" type="button" data-info="${ad.id}">Batafsil</button>
                ${ad.booked ? `<button class="btn-secondary" type="button" disabled>Band qilingan</button>` : `<button class="btn-outline" type="button" data-book="${ad.id}">Band qilish</button>`}
                <button class="btn-primary" type="button" data-chat="${ad.id}">Xabar berish</button>
            </div>
        </article>
    `).join("");

    box.querySelectorAll("[data-info]").forEach((btn) => {
        btn.addEventListener("click", () => showAdSummary(btn.dataset.info));
    });
    box.querySelectorAll("[data-book]").forEach((btn) => {
        btn.addEventListener("click", () => bookAd(btn.dataset.book));
    });
    box.querySelectorAll("[data-chat]").forEach((btn) => {
        btn.addEventListener("click", () => {
            const ad = state.myAds.find((item) => String(item.id) === String(btn.dataset.chat));
            if (ad) openAdChat(ad);
        });
    });
}

function switchTab(tab, options = {}) {
    if (tab === "messages") {
        const screen = document.getElementById("screen-messages");
        if (screen) screen.classList.remove("hidden");
        ensureChatStateShape();
        ensureChats();
        renderMessagesScreen();
        return;
    }
    const screen = document.getElementById("screen-messages");
    if (screen) screen.classList.add("hidden");
    if (tab === "home") { renderMasters(); renderChips(); }
    if (tab === "categories") renderCategories();
}

function renderChips() {
    const box = document.getElementById("categoryChips");
    if (!box) return;
    box.innerHTML = categories.map(c => `<div class="chip ${state.activeCategory === c ? "active" : ""}" data-category="${c}">${categoryIcons[c]} ${localizeCategory(c)}</div>`).join("");
    box.querySelectorAll(".chip").forEach(b => b.addEventListener("click", () => { state.activeCategory = b.dataset.category; renderChips(); renderMasters(); }));
}

function renderCategories() {
    const box = document.getElementById("categoriesGrid");
    if (!box) return;
    box.innerHTML = categories.filter(c => c !== "Barchasi").map(c => `
        <a href="#workers" class="category-card" data-category="${c}">
            <div class="cat-icon bg-blue">${categoryIcons[c]}</div>
            <h3>${localizeCategory(c)}</h3>
            <p>Faol</p>
        </a>
    `).join("");

    // Add click handler to filter and scroll
    box.querySelectorAll("[data-category]").forEach(b => b.addEventListener("click", (e) => {
        state.activeCategory = b.dataset.category;
        renderMasters();
    }));
}


function renderProfile() {
    const p = state.profile;
    const isAdminProfile = String(p?.role || "").toLowerCase() === "admin";
    const isRegister = state.authView === "register";
    document.getElementById("tabLogin")?.classList.toggle("active", !p && !isRegister);
    document.getElementById("tabRegister")?.classList.toggle("active", !p && isRegister);
    document.getElementById("profileCard")?.classList.toggle("hidden", !p);
    document.getElementById("authTabs")?.classList.toggle("hidden", !!p);
    document.getElementById("loginCard")?.classList.toggle("hidden", !!p || state.authView !== "login");
    document.getElementById("registerCard")?.classList.toggle("hidden", !!p || state.authView !== "register");
    if (p) {
        const profileName = document.getElementById("profileName");
        const profilePhone = document.getElementById("profilePhone");
        if (profileName) profileName.textContent = p.fullName;
        if (profilePhone) profilePhone.textContent = formatPhone(p.phone);
        const roleSelect = document.getElementById("profileRoleSelect");
        if (roleSelect) roleSelect.value = normalizeUserRole(p.role);
        const preview = document.getElementById("profileAvatarPreview");
        if (preview) {
            const src = safeAvatarSrc(p.avatar);
            preview.classList.toggle("has-image", !!src);
            preview.innerHTML = src
                ? `<img src="${escapeHtml(src)}" alt="${escapeHtml(p.fullName || "Profil rasmi")}" loading="lazy" decoding="async" />`
                : getInitials(p.fullName || "U");
        }
    } else {
        const preview = document.getElementById("profileAvatarPreview");
        if (preview) {
            preview.classList.remove("has-image");
            preview.textContent = "U";
        }
        const roleSelect = document.getElementById("profileRoleSelect");
        if (roleSelect) roleSelect.value = "client";
    }
    document.getElementById("profileInfo")?.classList.toggle("hidden", !p || isAdminProfile);
    renderAdminProfile();
    renderFilterPickers();
}

function renderAdminProfile() {
    const card = document.getElementById("adminProfileCard");
    if (!card) return;
    const session = isAdminLoggedIn();
    const status = document.getElementById("adminStatusText");
    const setupBox = document.getElementById("adminSetupBox");
    const loginBox = document.getElementById("adminLoginBox");
    const sessionBox = document.getElementById("adminSessionBox");

    if (setupBox) setupBox.classList.add("hidden");
    if (loginBox) loginBox.classList.add("hidden");
    if (sessionBox) sessionBox.classList.toggle("hidden", !session);
    card.classList.toggle("admin-locked", !session);

    if (status) {
        if (session) status.textContent = "Admin tizimga kirgan.";
        else status.textContent = "Bu bo'lim faqat serverdagi admin account uchun ochiladi.";
    }

    const usernameLabel = document.getElementById("adminCurrentUsername");
    const nameLabel = document.getElementById("adminCurrentName");
    if (usernameLabel) usernameLabel.textContent = session ? (state.profile?.phone || "-") : "-";
    if (nameLabel) nameLabel.textContent = session ? (state.profile?.fullName || "-") : "-";
    renderAdminDashboard();
}

function formatAdminCompactNumber(value) {
    const n = Number(value || 0);
    if (n >= 1000000) return `${(n / 1000000).toFixed(1)}M`;
    if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
    return String(Math.round(n));
}

function formatAdminBytes(bytes) {
    const n = Number(bytes || 0);
    if (n >= 1024 * 1024) return `${(n / (1024 * 1024)).toFixed(2)} MB`;
    if (n >= 1024) return `${(n / 1024).toFixed(1)} KB`;
    return `${Math.round(n)} B`;
}

function toAdminDate(value) {
    const d = new Date(value || 0);
    return Number.isNaN(d.getTime()) ? null : d;
}

function getAdminDashboardData() {
    const localUsers = readLocalUsers();
    const mergedAds = [...masters, ...state.myAds.map(mapAdToMaster)];
    const chatsObj = state.chats && typeof state.chats === "object" ? state.chats : {};
    const allMessages = Object.values(chatsObj).flat().filter(Boolean);

    const ratings = Object.values(state.ratings || {}).flat().map(Number).filter((n) => Number.isFinite(n) && n > 0);
    const avgRating = ratings.length ? (ratings.reduce((sum, n) => sum + n, 0) / ratings.length) : 0;

    const categoryMap = {};
    const regionMap = {};
    mergedAds.forEach((ad) => {
        const cat = String(ad.category || "Noma'lum");
        const region = String(ad.region || "Noma'lum");
        categoryMap[cat] = (categoryMap[cat] || 0) + 1;
        regionMap[region] = (regionMap[region] || 0) + 1;
    });

    const topCategories = Object.entries(categoryMap).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([name, value]) => ({ name, value }));
    const topRegions = Object.entries(regionMap).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([name, value]) => ({ name, value }));

    const now = new Date();
    const dayNames = [];
    const dayCounts = [];
    for (let i = 6; i >= 0; i -= 1) {
        const day = new Date(now);
        day.setDate(now.getDate() - i);
        const key = day.toDateString();
        const label = day.toLocaleDateString("uz-UZ", { day: "2-digit", month: "2-digit" });
        dayNames.push(label);
        dayCounts.push(allMessages.filter((m) => toAdminDate(m.createdAt)?.toDateString() === key).length);
    }

    const monthLabels = [];
    const regCounts = [];
    const adCounts = [];
    for (let i = 5; i >= 0; i -= 1) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const y = d.getFullYear();
        const m = d.getMonth();
        const label = d.toLocaleDateString("uz-UZ", { month: "short" });
        monthLabels.push(label);
        const regInMonth = localUsers.filter((u) => {
            const dt = toAdminDate(u.createdAt);
            return dt && dt.getFullYear() === y && dt.getMonth() === m;
        }).length;
        const adsInMonth = state.myAds.filter((ad) => {
            const dt = toAdminDate(ad.createdAt || ad.id);
            return dt && dt.getFullYear() === y && dt.getMonth() === m;
        }).length;
        regCounts.push(regInMonth);
        adCounts.push(adsInMonth);
    }

    const recentUsers = [...localUsers]
        .sort((a, b) => (toAdminDate(b.createdAt)?.getTime() || 0) - (toAdminDate(a.createdAt)?.getTime() || 0))
        .slice(0, 6);
    const recentAds = [...state.myAds]
        .sort((a, b) => (toAdminDate(b.createdAt || b.id)?.getTime() || 0) - (toAdminDate(a.createdAt || a.id)?.getTime() || 0))
        .slice(0, 6);

    const chatRows = (state.chatContacts || []).map((c) => {
        const list = chatsObj[c.id] || [];
        const last = list[list.length - 1];
        return {
            name: c.name,
            role: c.role,
            count: list.length,
            lastAt: toAdminDate(last?.createdAt)?.getTime() || 0
        };
    }).sort((a, b) => b.lastAt - a.lastAt).slice(0, 8);

    const providersLocal = localUsers.filter((u) => normalizeUserRole(u.role) === "provider").length;
    const clientsLocal = Math.max(0, localUsers.length - providersLocal);
    const totalMessagesToday = allMessages.filter((m) => toAdminDate(m.createdAt)?.toDateString() === now.toDateString()).length;

    const adPrices = mergedAds
        .map((ad) => Number(ad.price || 0))
        .filter((n) => Number.isFinite(n) && n > 0)
        .sort((a, b) => a - b);
    const avgPrice = adPrices.length ? Math.round(adPrices.reduce((sum, n) => sum + n, 0) / adPrices.length) : 0;
    const medianPrice = adPrices.length ? adPrices[Math.floor(adPrices.length / 2)] : 0;
    const minPrice = adPrices.length ? adPrices[0] : 0;
    const maxPrice = adPrices.length ? adPrices[adPrices.length - 1] : 0;

    const categoryPriceMap = {};
    mergedAds.forEach((ad) => {
        const cat = String(ad.category || "Noma'lum");
        const p = Number(ad.price || 0);
        if (!Number.isFinite(p) || p <= 0) return;
        if (!categoryPriceMap[cat]) categoryPriceMap[cat] = { sum: 0, count: 0 };
        categoryPriceMap[cat].sum += p;
        categoryPriceMap[cat].count += 1;
    });
    const avgPriceByCategory = Object.entries(categoryPriceMap)
        .map(([name, payload]) => ({
            name,
            value: Math.round(payload.sum / Math.max(1, payload.count))
        }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 6);

    const hourLabels = [];
    const hourCounts = [];
    for (let h = 0; h < 24; h += 3) {
        const next = (h + 3).toString().padStart(2, "0");
        const from = h.toString().padStart(2, "0");
        hourLabels.push(`${from}-${next}`);
        hourCounts.push(
            allMessages.filter((m) => {
                const dt = toAdminDate(m.createdAt);
                return dt && dt.getHours() >= h && dt.getHours() < h + 3;
            }).length
        );
    }

    const storageKeys = Object.keys(localStorage).filter((k) => k.startsWith("ustatop_"));
    const storageBytes = storageKeys.reduce((sum, key) => {
        const value = localStorage.getItem(key) || "";
        return sum + (key.length + value.length) * 2;
    }, 0);

    return {
        localUsers,
        mergedAds,
        allMessages,
        avgRating,
        topCategories,
        topRegions,
        dayNames,
        dayCounts,
        monthLabels,
        regCounts,
        adCounts,
        recentUsers,
        recentAds,
        chatRows,
        providersLocal,
        clientsLocal,
        totalMessagesToday,
        avgPrice,
        medianPrice,
        minPrice,
        maxPrice,
        avgPriceByCategory,
        hourLabels,
        hourCounts,
        storageKeys,
        storageBytes
    };
}

function renderAdminBars(rows, suffix = "") {
    if (!rows.length) return `<div class="admin-empty">Ma'lumot yo'q</div>`;
    const max = Math.max(...rows.map((r) => Number(r.value || 0)), 1);
    return rows.map((r) => {
        const width = Math.max(6, Math.round((Number(r.value || 0) / max) * 100));
        return `
            <div class="admin-bar-row">
                <div class="admin-bar-meta">
                    <span class="admin-bar-label">${escapeHtml(r.name)}</span>
                    <span class="admin-bar-value">${escapeHtml(String(r.value))}${suffix}</span>
                </div>
                <div class="admin-bar-track"><span class="admin-bar-fill" style="width:${width}%"></span></div>
            </div>
        `;
    }).join("");
}

function renderAdminColumns(labels, values) {
    if (!labels.length || !values.length) return `<div class="admin-empty">Ma'lumot yo'q</div>`;
    const max = Math.max(...values.map((v) => Number(v || 0)), 1);
    return `
        <div class="admin-columns">
            ${labels.map((label, idx) => {
        const v = Number(values[idx] || 0);
        const h = Math.max(10, Math.round((v / max) * 100));
        return `
                    <div class="admin-col">
                        <div class="admin-col-bar-wrap"><span class="admin-col-bar" style="height:${h}%"></span></div>
                        <div class="admin-col-value">${escapeHtml(String(v))}</div>
                        <div class="admin-col-label">${escapeHtml(String(label))}</div>
                    </div>
                `;
    }).join("")}
        </div>
    `;
}

function renderAdminDashboard() {
    const box = document.getElementById("adminDashboardContent");
    if (!box) return;

    const allowed = new Set(["overview", "users", "ads", "messages", "analytics", "system"]);
    if (!allowed.has(state.adminDashboardTab)) state.adminDashboardTab = "overview";
    document.querySelectorAll("[data-admin-tab]").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.adminTab === state.adminDashboardTab);
    });

    if (!isAdminLoggedIn()) {
        box.innerHTML = "";
        return;
    }

    const data = getAdminDashboardData();
    const totalUsers = data.localUsers.length;
    const totalAds = data.mergedAds.length;
    const totalMessages = data.allMessages.length;
    const totalChats = Object.keys(state.chats || {}).length;

    if (state.adminDashboardTab === "overview") {
        box.innerHTML = `
            <div class="admin-kpi-grid">
                <div class="admin-kpi"><div class="kpi-label">Foydalanuvchilar</div><div class="kpi-value">${formatAdminCompactNumber(totalUsers)}</div></div>
                <div class="admin-kpi"><div class="kpi-label">Jami e'lonlar</div><div class="kpi-value">${formatAdminCompactNumber(totalAds)}</div></div>
                <div class="admin-kpi"><div class="kpi-label">Suhbatlar</div><div class="kpi-value">${formatAdminCompactNumber(totalChats)}</div></div>
                <div class="admin-kpi"><div class="kpi-label">O'rtacha reyting</div><div class="kpi-value">${data.avgRating ? data.avgRating.toFixed(2) : "0.00"}</div></div>
            </div>
            <div class="admin-panels">
                <section class="admin-panel">
                    <h4>Ro'yxatdan o'tish (6 oy)</h4>
                    ${renderAdminColumns(data.monthLabels, data.regCounts)}
                </section>
                <section class="admin-panel">
                    <h4>Kategoriyalar bo'yicha e'lonlar</h4>
                    ${renderAdminBars(data.topCategories)}
                </section>
            </div>
        `;
        return;
    }

    if (state.adminDashboardTab === "users") {
        box.innerHTML = `
            <div class="admin-kpi-grid">
                <div class="admin-kpi"><div class="kpi-label">Lokal userlar</div><div class="kpi-value">${formatAdminCompactNumber(totalUsers)}</div></div>
                <div class="admin-kpi"><div class="kpi-label">Mijozlar</div><div class="kpi-value">${formatAdminCompactNumber(data.clientsLocal)}</div></div>
                <div class="admin-kpi"><div class="kpi-label">Ustalar</div><div class="kpi-value">${formatAdminCompactNumber(data.providersLocal)}</div></div>
                <div class="admin-kpi"><div class="kpi-label">Seed ustalar</div><div class="kpi-value">${formatAdminCompactNumber(masters.length)}</div></div>
            </div>
            <div class="admin-panels">
                <section class="admin-panel">
                    <h4>Oxirgi ro'yxatdan o'tganlar</h4>
                    <div class="admin-list">
                        ${data.recentUsers.length ? data.recentUsers.map((u) => `
                            <div class="admin-list-row">
                                <div><strong>${escapeHtml(u.fullName || "-")}</strong><span>${escapeHtml(formatPhone(u.phone || ""))}</span></div>
                                <span class="pill">${normalizeUserRole(u.role) === "provider" ? "Usta" : "Mijoz"}</span>
                            </div>
                        `).join("") : `<div class="admin-empty">Hali user yo'q</div>`}
                    </div>
                </section>
                <section class="admin-panel">
                    <h4>Hududlar bo'yicha taqsimot</h4>
                    ${renderAdminBars(data.topRegions)}
                </section>
            </div>
        `;
        return;
    }

    if (state.adminDashboardTab === "ads") {
        box.innerHTML = `
            <div class="admin-kpi-grid">
                <div class="admin-kpi"><div class="kpi-label">Jami e'lon</div><div class="kpi-value">${formatAdminCompactNumber(totalAds)}</div></div>
                <div class="admin-kpi"><div class="kpi-label">User e'lonlari</div><div class="kpi-value">${formatAdminCompactNumber(state.myAds.length)}</div></div>
                <div class="admin-kpi"><div class="kpi-label">Seed e'lonlar</div><div class="kpi-value">${formatAdminCompactNumber(masters.length)}</div></div>
                <div class="admin-kpi"><div class="kpi-label">O'rtacha narx</div><div class="kpi-value">${money(data.avgPrice)}</div></div>
            </div>
            <div class="admin-panels">
                <section class="admin-panel">
                    <h4>Yangi e'lonlar (6 oy)</h4>
                    ${renderAdminColumns(data.monthLabels, data.adCounts)}
                </section>
                <section class="admin-panel">
                    <h4>Oxirgi user e'lonlari</h4>
                    <div class="admin-list">
                        ${data.recentAds.length ? data.recentAds.map((ad) => `
                            <div class="admin-list-row">
                                <div><strong>${escapeHtml(ad.name || "-")}</strong><span>${escapeHtml(ad.spec || "-")}</span></div>
                                <span class="pill">${money(ad.price || 0)}</span>
                            </div>
                        `).join("") : `<div class="admin-empty">Hali user e'loni yo'q</div>`}
                    </div>
                </section>
            </div>
        `;
        return;
    }

    if (state.adminDashboardTab === "analytics") {
        box.innerHTML = `
            <div class="admin-kpi-grid">
                <div class="admin-kpi"><div class="kpi-label">Median narx</div><div class="kpi-value">${money(data.medianPrice)}</div></div>
                <div class="admin-kpi"><div class="kpi-label">Min narx</div><div class="kpi-value">${money(data.minPrice)}</div></div>
                <div class="admin-kpi"><div class="kpi-label">Maks narx</div><div class="kpi-value">${money(data.maxPrice)}</div></div>
                <div class="admin-kpi"><div class="kpi-label">Bugungi xabarlar</div><div class="kpi-value">${formatAdminCompactNumber(data.totalMessagesToday)}</div></div>
            </div>
            <div class="admin-panels">
                <section class="admin-panel">
                    <h4>Kategoriya bo'yicha o'rtacha narx</h4>
                    ${renderAdminBars(data.avgPriceByCategory, ` ${t("somUnit", "so'm")}`)}
                </section>
                <section class="admin-panel">
                    <h4>Sutka bo'yicha xabar faolligi</h4>
                    ${renderAdminColumns(data.hourLabels, data.hourCounts)}
                </section>
            </div>
        `;
        return;
    }

    if (state.adminDashboardTab === "system") {
        const providerCount = data.providersLocal + masters.length;
        const listRows = [
            { name: "Admin holati", meta: isAdminLoggedIn() ? "Faol" : "Nofaol", badge: isAdminLoggedIn() ? "ON" : "OFF" },
            { name: "Umumiy ustalar", meta: `${providerCount} ta`, badge: "Usta" },
            { name: "Umumiy mijozlar", meta: `${data.clientsLocal} ta`, badge: "Mijoz" },
            { name: "LocalStorage kalitlari", meta: `${data.storageKeys.length} ta`, badge: "Store" }
        ];
        box.innerHTML = `
            <div class="admin-kpi-grid">
                <div class="admin-kpi"><div class="kpi-label">Saqlangan kalitlar</div><div class="kpi-value">${formatAdminCompactNumber(data.storageKeys.length)}</div></div>
                <div class="admin-kpi"><div class="kpi-label">Ma'lumot hajmi</div><div class="kpi-value">${formatAdminBytes(data.storageBytes)}</div></div>
                <div class="admin-kpi"><div class="kpi-label">Faol chatlar</div><div class="kpi-value">${formatAdminCompactNumber(data.chatRows.length)}</div></div>
                <div class="admin-kpi"><div class="kpi-label">Jami xabarlar</div><div class="kpi-value">${formatAdminCompactNumber(totalMessages)}</div></div>
            </div>
            <div class="admin-panels">
                <section class="admin-panel">
                    <h4>Tizim monitoring</h4>
                    <div class="admin-list">
                        ${listRows.map((row) => `
                            <div class="admin-list-row">
                                <div><strong>${escapeHtml(row.name)}</strong><span>${escapeHtml(row.meta)}</span></div>
                                <span class="pill">${escapeHtml(row.badge)}</span>
                            </div>
                        `).join("")}
                    </div>
                </section>
                <section class="admin-panel">
                    <h4>Storage bo'yicha bo'linma</h4>
                    ${renderAdminBars(data.storageKeys.map((key) => ({
            name: key.replace(/^ustatop_/, ""),
            value: Math.max(1, Math.round(((localStorage.getItem(key) || "").length * 2) / 1024))
        })), " KB")}
                </section>
            </div>
        `;
        return;
    }

    box.innerHTML = `
        <div class="admin-kpi-grid">
            <div class="admin-kpi"><div class="kpi-label">Suhbatlar</div><div class="kpi-value">${formatAdminCompactNumber(totalChats)}</div></div>
            <div class="admin-kpi"><div class="kpi-label">Jami xabarlar</div><div class="kpi-value">${formatAdminCompactNumber(totalMessages)}</div></div>
            <div class="admin-kpi"><div class="kpi-label">Bugungi xabarlar</div><div class="kpi-value">${formatAdminCompactNumber(data.totalMessagesToday)}</div></div>
            <div class="admin-kpi"><div class="kpi-label">Kontaktlar</div><div class="kpi-value">${formatAdminCompactNumber((state.chatContacts || []).length)}</div></div>
        </div>
        <div class="admin-panels">
            <section class="admin-panel">
                <h4>Oxirgi 7 kun xabarlar</h4>
                ${renderAdminColumns(data.dayNames, data.dayCounts)}
            </section>
            <section class="admin-panel">
                <h4>Faol chatlar</h4>
                <div class="admin-list">
                    ${data.chatRows.length ? data.chatRows.map((row) => `
                        <div class="admin-list-row">
                            <div><strong>${escapeHtml(row.name || "-")}</strong><span>${escapeHtml(row.role || "")}</span></div>
                            <span class="pill">${row.count} ta</span>
                        </div>
                    `).join("") : `<div class="admin-empty">Chat ma'lumotlari yo'q</div>`}
                </div>
            </section>
        </div>
    `;
}

// Replaced modal with in-page summary. Show a concise ad/master summary.
function showAdSummary(id) {
    const ad = state.myAds.find((item) => String(item.id) === String(id) || String(`ad-${item.id}`) === String(id));
    const m = ad ? mapAdToMaster(ad) : [...masters, ...state.myAds.map(mapAdToMaster)].find(x => String(x.id) === String(id) || String(x.id).replace(/^ad-/, "") === String(id));
    if (!m) return showMessage("Ma'lumot topilmadi");
    const parts = [];
    parts.push(`${m.name || '-'} — ${m.spec || m.category || '-'}`);
    const priceText = ad ? money(ad.price) : money(m.price);
    if (priceText) parts.push(`${priceText} so'm`);
    if (ad && ad.booked) parts.push(`Band qilingan: ${ad.bookedBy || '-'}`);
    if (m.phone) parts.push(`Tel: ${m.phone}`);
    showMessage(parts.filter(Boolean).join('\n'));
}

async function copyTextSafe(text) {
    if (!text || !navigator?.clipboard?.writeText) return false;
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (_) {
        return false;
    }
}

function getContactDesktopText(phone, copied) {
    if (state.lang === "ru") {
        return copied
            ? `Номер скопирован: ${phone}. Если звонок не открылся, вставьте номер вручную.`
            : `Если звонок не открылся, позвоните по номеру: ${phone}`;
    }
    if (state.lang === "en") {
        return copied
            ? `Number copied: ${phone}. If the call app did not open, paste the number manually.`
            : `If the call app did not open, call this number: ${phone}`;
    }
    return copied
        ? `Raqam nusxalandi: ${phone}. Agar qo'ng'iroq ochilmasa, qo'lda qo'ying.`
        : `Agar qo'ng'iroq ochilmasa, shu raqamga qo'ng'iroq qiling: ${phone}`;
}

function openModal(id) {
    const ad = state.myAds.find((item) => String(item.id) === String(id) || String(`ad-${item.id}`) === String(id));
    const m = ad ? mapAdToMaster(ad) : [...masters, ...state.myAds.map(mapAdToMaster)].find(x => String(x.id) === String(id) || String(x.id).replace(/^ad-/, "") === String(id));
    if (!m) return;
    const rd = getRatingData(m);
    const modalLabels = {
        uz: { price: "Narx", location: "Hudud" },
        ru: { price: "Цена", location: "Локация" },
        en: { price: "Price", location: "Location" }
    };
    const labels = modalLabels[state.lang] || modalLabels.uz;
    const locationText = [m.region, m.district].filter(Boolean).join(", ");
    const phoneRaw = String(m.phone || "").trim();
    const phoneHref = phoneRaw.replace(/[^\d+]/g, "");
    const bioText = m.bio || "Mutaxassis haqida qo'shimcha ma'lumot mavjud emas.";
        // modal removed; details are shown via `showAdSummary` instead.
}

function openChatWithMaster(id) {
    const ad = state.myAds.find((item) => String(item.id) === String(id) || String(`ad-${item.id}`) === String(id));
    if (ad) {
        openAdChat(ad);
        return;
    }
    const m = [...masters].find(x => String(x.id) === String(id));
    if (!m) return;
    const cid = `chat-${m.id}`;
    let existing = state.chatContacts.find((c) => c.id === cid);
    if (!existing) {
        existing = state.chatContacts.find((c) =>
            String(c.name || "").trim().toLowerCase() === String(m.name || "").trim().toLowerCase() &&
            String(c.role || "").trim().toLowerCase() === String(m.category || "").trim().toLowerCase()
        );
    }
    const targetId = existing?.id || cid;
    if (!existing) state.chatContacts.push({ id: cid, name: m.name, role: m.category });
    state.activeChatId = targetId; state.messagesView = "chat"; switchTab("messages");
}

function showConfirm(txt, action, title = "Tasdiqlash", confirmLabel = "Tasdiqlash") {
    const titleEl = document.getElementById("confirmTitle");
    const confirmBtn = document.getElementById("confirmOkBtn");
    if (titleEl) titleEl.textContent = title;
    if (confirmBtn) confirmBtn.textContent = confirmLabel;
    document.getElementById("confirmText").textContent = txt;
    document.getElementById("confirmOkBtn").onclick = () => { action(); closeConfirm(); };
    document.getElementById("confirmModal").classList.add("open");
}
function closeConfirm() {
    document.getElementById("confirmModal").classList.remove("open");
    const titleEl = document.getElementById("confirmTitle");
    const confirmBtn = document.getElementById("confirmOkBtn");
    if (titleEl) titleEl.textContent = "Tasdiqlash";
    if (confirmBtn) confirmBtn.textContent = "Tasdiqlash";
}
function showMessage(txt) {
    const modal = document.getElementById("messageModal");
    const text = document.getElementById("messageText");
    if (!modal || !text) return window.alert(txt);
    text.textContent = txt;
    modal.classList.add("open");
}

function closeAccountModal() {
    document.getElementById("accountModal")?.classList.remove("open");
    resetAccountEditUi();
}

function roleLabel(role) {
    return normalizeUserRole(role) === "provider" ? "Usta" : "Mijoz";
}

let accountEditBaseline = null;
let accountEditActive = false;

function isAccountEditDirty() {
    if (!accountEditBaseline) return false;
    const nameInput = document.getElementById("accountEditName");
    const phoneInput = document.getElementById("accountEditPhone");
    const currentName = String(nameInput?.value || "").trim();
    const currentPhoneKey = normalizePhoneKey(phoneInput?.value || "");
    return currentName !== accountEditBaseline.name || currentPhoneKey !== accountEditBaseline.phoneKey;
}

function updateAccountEditUi() {
    const fields = document.getElementById("accountEditFields");
    const editBtn = document.getElementById("accountEditBtn");
    const saveBtn = document.getElementById("accountSaveBtn");
    const cancelBtn = document.getElementById("accountCancelBtn");
    if (!fields || !editBtn || !saveBtn || !cancelBtn) return;
    fields.classList.toggle("hidden", !accountEditActive);
    editBtn.textContent = accountEditActive ? "Bekor qilish" : "Tahrirlash";
    cancelBtn.classList.toggle("hidden", !accountEditActive);
    saveBtn.classList.toggle("hidden", !accountEditActive || !isAccountEditDirty());
}

function resetAccountEditUi() {
    accountEditActive = false;
    accountEditBaseline = null;
    updateAccountEditUi();
}

function syncAccountEditFields(profile) {
    const nameInput = document.getElementById("accountEditName");
    const phoneInput = document.getElementById("accountEditPhone");
    if (nameInput) nameInput.value = profile?.fullName || "";
    if (phoneInput) phoneInput.value = profile?.phone || "+998";
    accountEditBaseline = {
        name: String(profile?.fullName || "").trim(),
        phoneKey: normalizePhoneKey(profile?.phone || "")
    };
    accountEditActive = false;
    updateAccountEditUi();
}

function renderAccountModal() {
    const profile = state.profile;
    if (!profile) return;
    const name = profile.fullName || "Foydalanuvchi";
    const phone = formatPhone(profile.phone || "");
    const avatar = profile.avatar || "";
    const avatarEl = document.getElementById("accountAvatar");
    const nameEl = document.getElementById("accountName");
    const phoneEl = document.getElementById("accountPhone");
    const roleEl = document.getElementById("accountRole");
    const emailEl = document.getElementById("accountEmail");
    const locationEl = document.getElementById("accountLocation");
    if (nameEl) nameEl.textContent = name;
    if (phoneEl) phoneEl.textContent = phone || "+998";
    if (roleEl) roleEl.textContent = roleLabel(profile.role);
    if (emailEl) emailEl.textContent = profile.email || "—";
    if (locationEl) {
        const location = [profile.city, profile.district].filter(Boolean).join(", ");
        locationEl.textContent = location || "—";
    }
    if (avatarEl) {
        if (avatar) {
            avatarEl.style.backgroundImage = `url(${avatar})`;
            avatarEl.classList.add("has-image");
            avatarEl.textContent = "";
        } else {
            avatarEl.style.backgroundImage = "";
            avatarEl.classList.remove("has-image");
            avatarEl.textContent = getInitials(name);
        }
    }
    syncAccountEditFields(profile);
}

function openAccountModal() {
    if (!isAuthenticated()) return showMessage(getAuthRequiredText());
    renderAccountModal();
    refreshProfileFromServer({ silent: true });
    document.getElementById("accountModal")?.classList.add("open");
}

function performLogout() {
    state.profile = null;
    localStorage.removeItem("ustatop_token");
    saveState();
    updateAuthLockUI();
    state.authView = "login";
    switchTab("profile", { silentAuth: true });
    renderProfile();
}

function initApp() {
    ensureChatStateShape();
    syncChatAccountScope();
    removeDemoData();
    removeAutomatedChatMessages();
    initChatRealtime();
    localStorage.removeItem(ADMIN_ACCOUNT_STORE_KEY);
    localStorage.removeItem(ADMIN_SESSION_STORE_KEY);
    if (state.profile) {
        state.profile = applyStoredAvatarToProfile({
            ...state.profile,
            role: normalizeAccountRole(state.profile.role)
        });
    }
    refreshProfileFromServer();
    refreshAdsFromServer({ silent: true });
    applyMessagesFeatureToggle();
    syncBottomNavHeight();
    fillRegions("regionSelect", "Barcha hududlar");
    fillRegions("postRegion", "Viloyat tanlang");
    syncPostRegionWithProfile();
    document.getElementById("postRegion")?.addEventListener("change", (e) => fillDistricts(e.target.value));
    const langSelectEl = document.getElementById("langSelect");
    if (langSelectEl) langSelectEl.value = state.lang;
    applyTheme();
    // Remove specific ad requested by user: spec contains "santexnik" and name contains "abror"
    try {
        const norm = (s) => String(s || "").toLowerCase().trim();
        const before = state.myAds.length;
        state.myAds = (state.myAds || []).filter(ad => !(norm(ad.spec).includes("santexnik") && norm(ad.name).includes("abror")));
        if (state.myAds.length !== before) {
            saveState();
        }
    } catch (e) {
        // ignore
    }
    applyLanguage();
    setupLangPicker();
    setupFilterPickers();

    // Update header nav active class based on hash
    function updateNavActive() {
        const hash = window.location.hash || '#home';
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === hash);
        });
    }
    updateNavActive();
    window.addEventListener('hashchange', updateNavActive);

    document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => switchTab(n.dataset.tab)));
    document.getElementById("topThemeBtn")?.addEventListener("click", () => {
        state.theme = state.theme === "dark" ? "light" : "dark";
        applyTheme();
        saveState();
    });
    document.getElementById("langSelect")?.addEventListener("change", (e) => {
        state.lang = e.target.value;
        applyLanguage();
        saveState();
    });
    document.getElementById("topNotificationsBtn")?.addEventListener("click", () => {
        const notices = {
            uz: "Hozircha yangi bildirishnoma yo'q.",
            ru: "Пока новых уведомлений нет.",
            en: "No new notifications yet."
        };
        showMessage(notices[state.lang] || notices.uz);
    });
    document.getElementById("navMessagesBtn")?.addEventListener("click", (e) => {
        e.preventDefault();
        if (window.location.hash !== "#messages") window.location.hash = "#messages";
        state.messagesView = "list";
        switchTab("messages");
    });
    document.getElementById("showPostAdBtn")?.addEventListener("click", (e) => {
        // Only authenticated employers can open the posting form.
        if (!isAuthenticated()) {
            e.preventDefault();
            return showMessage(getAuthRequiredText());
        }
        if (!canCreatePost()) {
            e.preventDefault();
            return showMessage(getPostRoleRequiredText());
        }
        // Authorized provider: allow link navigation to `post-job.html`
    });

    document.getElementById("publishBtn")?.addEventListener("click", () => {
        const data = collectPostFormData();
        const validationError = validatePostForm(data);
        if (validationError) {
            if (document.getElementById("messageModal")) return showMessage(validationError);
            return alert(validationError);
        }
        savePostAd(data);
        if (document.getElementById("messageModal")) showMessage("E'lon joylandi. Asosiy sahifada ko'rishingiz mumkin.");
        // redirect back to main page after short delay
        setTimeout(() => { window.location.href = "index.html"; }, 300);
    });

    document.getElementById("saveDraftBtn")?.addEventListener("click", () => {
        clearPostForm();
        showMessage("Qoralama saqlandi va forma tozalandi.");
    });

    document.getElementById("previewBtn")?.addEventListener("click", () => {
        const data = collectPostFormData();
        showPreviewModal(buildPreviewHtml(data));
    });

    document.getElementById("previewCloseBtn")?.addEventListener("click", closePreviewModal);
    document.getElementById("postPreviewModal")?.addEventListener("click", (e) => {
        if (e.target === document.getElementById("postPreviewModal")) closePreviewModal();
    });
    document.getElementById("accountBtn")?.addEventListener("click", openAccountModal);
    document.getElementById("logoutBtnTop")?.addEventListener("click", () => {
        performLogout();
        closeAccountModal();
    });
    document.getElementById("tabLogin")?.addEventListener("click", () => { state.authView = "login"; renderProfile(); });
    document.getElementById("tabRegister")?.addEventListener("click", () => { state.authView = "register"; renderProfile(); });
    document.getElementById("goRegister")?.addEventListener("click", () => { state.authView = "register"; renderProfile(); });
    document.getElementById("goLogin")?.addEventListener("click", () => { state.authView = "login"; renderProfile(); });
    document.getElementById("adminSetupBtn")?.addEventListener("click", () => showMessage("Admin hisobi faqat server tomonidan boshqariladi."));
    document.getElementById("adminLoginBtn")?.addEventListener("click", () => showMessage("Admin kirish oddiy login formasi orqali amalga oshiriladi."));
    document.getElementById("adminLogoutBtn")?.addEventListener("click", () => {
        state.profile = null;
        localStorage.removeItem("ustatop_token");
        saveState();
        updateAuthLockUI();
        state.authView = "login";
        switchTab("profile", { silentAuth: true });
        renderProfile();
    });
    document.getElementById("adminProfileCard")?.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-admin-tab]");
        if (!btn) return;
        const tab = btn.dataset.adminTab;
        if (!["overview", "users", "ads", "messages", "analytics", "system"].includes(tab)) return;
        state.adminDashboardTab = tab;
        saveState();
        renderAdminDashboard();
    });
    document.getElementById("profileRoleSelect")?.addEventListener("change", (e) => {
        if (!state.profile) return;
        if (String(state.profile.role || "").toLowerCase() === "admin") {
            showMessage("Admin roli faqat server tomonidan boshqariladi.");
            renderProfile();
            return;
        }
        const role = normalizeUserRole(e.target.value);
        state.profile = { ...state.profile, role };
        saveState();
        updateLocalUserByPhone(state.profile.phone, { role });
        renderProfile();
        showMessage("Hisob turi saqlandi.");
    });

    document.getElementById("loginBtn")?.addEventListener("click", async () => {
        const phone = document.getElementById("loginPhone").value.trim();
        const password = document.getElementById("loginPassword").value;
        if (!phone || !password) return showMessage("Telefon va parolni kiriting.");
        try {
            const d = await authRequestWithFallback("login", { phone, password });
            const normalized = normalizeProfileFromServer(d.user) || d.user;
            state.profile = applyStoredAvatarToProfile(normalized);
            syncChatAccountScope();
            if (d.token) localStorage.setItem("ustatop_token", d.token);
            else localStorage.removeItem("ustatop_token");
            saveState();
            updateAuthLockUI();
            renderProfile();
            refreshProfileFromServer({ silent: true });
            if (normalizeAccountRole(d.user?.role) === "admin") {
                window.location.href = "dashboard.html";
                return;
            }
            // Agar provider bo'lsa va profileComplete false bo'lsa, profilni to'ldirishni so'raymiz
            if ((normalizeAccountRole(d.user?.role) === "provider") && d.profileComplete === false) {
                showMessage("Iltimos, profilingizni to'ldiring — profil sahifasiga yo'naltirilyapti.");
                switchTab("profile");
                state.authView = "register";
                renderProfile();
                return;
            }
            switchTab("home");
        } catch (e) { showMessage(e.message); }
    });

    document.getElementById("registerBtn")?.addEventListener("click", async () => {
        const firstName = document.getElementById("regFirstName").value.trim();
        const lastName = document.getElementById("regLastName").value.trim();
        const fullName = `${firstName} ${lastName}`.trim();
        const phone = document.getElementById("regPhone").value.trim();
        const selectedRole = normalizeUserRole(document.getElementById("regRole")?.value || "client");
        const password = document.getElementById("regPassword").value;
        const password2 = document.getElementById("regPassword2").value;
        if (!firstName || !lastName || !phone || !password || !password2) return showMessage("Barcha maydonlarni to'ldiring");
        if (password.length < 4) return showMessage("Parol kamida 4 ta belgidan iborat bo'lsin.");
        if (password !== password2) return showMessage("Parollar mos kelmadi.");
        try {
            const d = await authRequestWithFallback("register", { fullName, phone, password }, { role: selectedRole });
            const normalized = normalizeProfileFromServer(d.user) || {
                ...d.user,
                role: normalizeAccountRole(d.user?.role || selectedRole)
            };
            state.profile = applyStoredAvatarToProfile(normalized);
            syncChatAccountScope();
            if (d.token) localStorage.setItem("ustatop_token", d.token);
            else localStorage.removeItem("ustatop_token");
            saveState();
            updateAuthLockUI();
            updateLocalUserByPhone(state.profile.phone, { role: state.profile.role });
            renderProfile();
            refreshProfileFromServer({ silent: true });
            if ((state.profile?.role === "provider") && d.profileComplete === false) {
                showMessage("Iltimos, profilingizni to'ldiring — profil sahifasiga yo'naltirilyapti.");
                switchTab("profile");
                state.authView = "register";
                renderProfile();
                return;
            }
            ["regFirstName", "regLastName", "regPhone", "regPassword", "regPassword2"].forEach((id) => {
                const el = document.getElementById(id);
                if (el) el.value = "";
            });
            const regRole = document.getElementById("regRole");
            if (regRole) regRole.value = "client";
            switchTab("home");
        } catch (e) { showMessage(e.message); }
    });

    document.getElementById("logoutBtn")?.addEventListener("click", () => {
        performLogout();
    });
    document.getElementById("profileAvatarBtn")?.addEventListener("click", () => {
        if (!state.profile) return showMessage("Avval tizimga kiring.");
        document.getElementById("profileAvatarInput")?.click();
    });
    document.getElementById("profileAvatarInput")?.addEventListener("change", async (e) => {
        const input = e.target;
        const file = input?.files?.[0];
        if (!file) return;
        if (!state.profile) {
            showMessage("Avval tizimga kiring.");
            input.value = "";
            return;
        }
        if (!file.type.startsWith("image/")) {
            showMessage("Faqat rasm faylini tanlang.");
            input.value = "";
            return;
        }
        if (file.size > 2 * 1024 * 1024) {
            showMessage("Rasm hajmi 2MB dan oshmasin.");
            input.value = "";
            return;
        }
        try {
            const dataUrl = await readFileAsDataUrl(file);
            state.profile = { ...state.profile, avatar: dataUrl };
            saveAvatarForProfile(state.profile, dataUrl);
            updateLocalUserByPhone(state.profile.phone, { avatar: dataUrl });
            syncCurrentUserAdsAvatar(dataUrl);
            saveState();
            updateAuthLockUI();
            renderAccountModal();
            renderProfile();
            renderAds();
            renderMasters();
            showMessage("Profil rasmi saqlandi.");
        } catch (_) {
            showMessage("Rasmni yuklashda xatolik bo'ldi.");
        } finally {
            input.value = "";
        }
    });

    // Search: real-time as user types
    const searchInput = document.getElementById("searchInput");
    searchInput?.addEventListener("input", () => {
        state.query = searchInput.value;
        renderMasters();
    });

    // Search button click
    document.getElementById("searchBtn")?.addEventListener("click", () => {
        state.query = searchInput.value;
        renderMasters();
    });

    // Region/district filter - changes whenever regionSelect value changes
    const regionSelect = document.getElementById("regionSelect");
    regionSelect?.addEventListener("change", () => {
        state.region = regionSelect.value;
        fillDistrictFilter(state.region);
        renderMasters();
    });
    const districtSelectFilter = document.getElementById("districtSelect");
    districtSelectFilter?.addEventListener("change", () => {
        state.district = districtSelectFilter.value;
        renderMasters();
    });

    document.getElementById("chatBackBtn")?.addEventListener("click", () => { state.messagesView = "list"; renderMessagesScreen(); });
    document.getElementById("chatSendBtn")?.addEventListener("click", handleSendChatMessage);
    document.getElementById("chatContextMenu")?.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-chat-menu-action]");
        if (!btn) return;
        handleChatMenuAction(btn.dataset.chatMenuAction);
    });
    document.addEventListener("click", (e) => {
        const menu = document.getElementById("chatContextMenu");
        if (!menu || menu.classList.contains("hidden")) return;
        if (!menu.contains(e.target)) hideChatContextMenu();
    });
    document.addEventListener("contextmenu", (e) => {
        const target = e.target;
        if (!(target instanceof Element)) return;
        if (!target.closest(".chat-message") && !target.closest("[data-chat]")) hideChatContextMenu();
    });
    document.getElementById("chatInput")?.addEventListener("focus", () => {
        const thread = document.getElementById("chatThread");
        if (!thread) return;
        thread.scrollTop = thread.scrollHeight;
    });
    document.getElementById("chatInput")?.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendChatMessage();
        }
    });

    document.getElementById("postSubmit")?.addEventListener("click", () => {
        if (!state.profile) return showMessage(getAuthRequiredText());
        if (!canCreatePost()) return showMessage(getPostRoleRequiredText());
        const n = document.getElementById("postName").value,
            s = document.getElementById("postSpec").value,
            p = document.getElementById("postPrice").value,
            r = document.getElementById("postRegion").value,
            d = document.getElementById("postDistrict").value,
            ph = document.getElementById("postPhone").value;
        if (!n || !s || !p || !r) return showMessage("Barcha maydonlarni to'ldiring");
        state.myAds.unshift({
            id: Date.now(),
            ownerId: state.profile?.id ?? state.profile?._id ?? 1,
            avatar: state.profile?.avatar || "",
            name: n,
            spec: s,
            price: p,
            region: r,
            district: d,
            phone: ph,
            bio: document.getElementById("postBio").value,
            createdAt: new Date().toISOString(),
            booked: false,
            bookedBy: null,
            bookedAt: null
        });
        saveState();
        renderAds();
        renderMasters();
        showMessage("Joylandi!");
        document.getElementById("postAdModalOuter")?.classList.remove("open");
        ["postName", "postPrice", "postPhone", "postBio"].forEach((id) => {
            const el = document.getElementById(id);
            if (el) el.value = "";
        });
        const postSpec = document.getElementById("postSpec");
        if (postSpec) postSpec.selectedIndex = 0;
        const postRegion = document.getElementById("postRegion");
        if (postRegion) postRegion.value = "";
        fillDistricts("");
    });

    // master modal removed; no close handlers needed
    document.getElementById("accountModal")?.addEventListener("click", (e) => {
        if (e.target && e.target.id === "accountModal") closeAccountModal();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            hideChatContextMenu();
            document.getElementById("messageModal")?.classList.remove("open");
            closeConfirm();
            closeAccountModal();
        }
    });
    document.getElementById("messageOkBtn")?.addEventListener("click", () => document.getElementById("messageModal").classList.remove("open"));
    document.getElementById("confirmCancelBtn")?.addEventListener("click", closeConfirm);
    document.getElementById("accountCloseBtn")?.addEventListener("click", closeAccountModal);
    document.getElementById("accountCloseBtn2")?.addEventListener("click", closeAccountModal);
    document.getElementById("accountLogoutBtn")?.addEventListener("click", () => {
        performLogout();
        closeAccountModal();
    });
    document.getElementById("accountEditBtn")?.addEventListener("click", () => {
        if (!state.profile) return showMessage(getAuthRequiredText());
        const nameInput = document.getElementById("accountEditName");
        const phoneInput = document.getElementById("accountEditPhone");
        if (!accountEditActive) {
            accountEditActive = true;
            updateAccountEditUi();
            nameInput?.focus();
            return;
        }
        if (nameInput) nameInput.value = accountEditBaseline?.name || "";
        if (phoneInput) phoneInput.value = formatPhoneFromKey(accountEditBaseline?.phoneKey || "") || "+998";
        accountEditActive = false;
        updateAccountEditUi();
    });
    document.getElementById("accountCancelBtn")?.addEventListener("click", () => {
        const nameInput = document.getElementById("accountEditName");
        const phoneInput = document.getElementById("accountEditPhone");
        if (nameInput) nameInput.value = accountEditBaseline?.name || "";
        if (phoneInput) phoneInput.value = formatPhoneFromKey(accountEditBaseline?.phoneKey || "") || "+998";
        accountEditActive = false;
        updateAccountEditUi();
    });
    const accountEditInputs = ["accountEditName", "accountEditPhone"];
    accountEditInputs.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.addEventListener("input", () => {
            if (!accountEditActive) return;
            updateAccountEditUi();
        });
    });
    document.getElementById("accountSaveBtn")?.addEventListener("click", () => {
        if (!state.profile) return showMessage(getAuthRequiredText());
        const nameInput = document.getElementById("accountEditName");
        const phoneInput = document.getElementById("accountEditPhone");
        const newName = String(nameInput?.value || "").trim();
        const phoneKey = normalizePhoneKey(phoneInput?.value || "");
        if (!newName) return showMessage("Ism va familiyani kiriting.");
        if (!phoneKey || phoneKey.length !== 9) return showMessage("Telefon raqam noto'g'ri.");
        const formattedPhone = formatPhoneFromKey(phoneKey);
        const localRes = updateLocalUserProfile(state.profile.phone, { fullName: newName, phoneKey });
        if (localRes?.error) return showMessage(localRes.error);
        state.profile = { ...state.profile, fullName: newName, phone: formattedPhone };
        saveState();
        updateAuthLockUI();
        renderAccountModal();
        accountEditBaseline = { name: newName, phoneKey };
        accountEditActive = false;
        updateAccountEditUi();
        showMessage("Profil ma'lumotlari saqlandi.");
    });

    ["postPhone", "loginPhone", "regPhone", "accountEditPhone"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener("input", () => el.value = formatPhone(el.value));
    });

    // Footer buttons
    document.getElementById("footerUserBtn")?.addEventListener("click", () => switchTab("profile"));
    document.getElementById("footerBellBtn")?.addEventListener("click", () => showMessage("Sizga xabar bo'lmagan. Tez orada birinchi buyurtmangiz erishib ko'ring!"));

    document.getElementById("footerStarBtn")?.addEventListener("click", function () {
        this.classList.toggle("liked");
        const likeCount = document.getElementById("likeCount");
        if (this.classList.contains("liked")) {
            likeCount.textContent = "11K";
            showMessage("Sizga tashakkur! 🎉 Saytni yoqtirganingiz uchun raxmat.");
        } else {
            likeCount.textContent = "10K";
        }
        localStorage.setItem("ustatop_liked", this.classList.contains("liked"));
    });

    // Restore like state from localStorage
    if (localStorage.getItem("ustatop_liked") === "true") {
        document.getElementById("footerStarBtn")?.classList.add("liked");
    }

    state.authView = state.profile ? state.authView : "login";
    updateAuthLockUI();
    if (document.body.dataset.page === "dashboard") {
        if (!isAdminLoggedIn()) {
            window.location.replace("auth.html#login");
            return;
        }
        renderProfile();
    }
    // render showcase and then go to home
    renderTopShowcase();
    renderCategories();
    renderMasters();

    // Page load animation: reveal hero then cards
    try {
        setTimeout(() => document.querySelector('.hero h1')?.classList.add('show'), 120);
    } catch (err) { /* ignore */ }

    window.addEventListener("resize", syncBottomNavHeight, { passive: true });
    window.addEventListener("resize", hideChatContextMenu, { passive: true });
    window.addEventListener("resize", syncTopbarHeight, { passive: true });
    window.addEventListener("load", () => { syncBottomNavHeight(); syncTopbarHeight(); }, { once: true });
}

window.addEventListener("DOMContentLoaded", initApp);
