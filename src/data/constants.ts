export const PRIMARY_DOMAIN = "https://electrikainc.in";

export const COMPANY_NAME = "Electrika INC";

// Public contact email — used as the single source of truth for any fallback
// in email-sending services or contact links.
export const COMPANY_EMAIL = "electrikainc@gmail.com";

// Primary phone number, digits only with country code (no "+", no spaces) —
// the format required by wa.me deep links.
export const COMPANY_PHONE_PRIMARY_RAW = "919971499542";

// Primary phone number, human-readable display format (matches existing
// Organization schema / footer usage).
export const COMPANY_PHONE_PRIMARY = "+91-9971499542";

// All published contact numbers as shown in the site footer, primary first.
export const COMPANY_PHONES_LIST = ["9971499542", "9818079762", "9871714055"];

// Base WhatsApp deep-link for the primary number. Append
// `?text=${encodeURIComponent(message)}` for a pre-filled message.
export const WHATSAPP_BASE_URL = `https://wa.me/${COMPANY_PHONE_PRIMARY_RAW}`;
