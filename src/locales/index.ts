import en from "./en.json";
import uk from "./uk.json";

const locales = { en, uk };

export function t(key, lang = "en", params = {}) {
  const keys = key.split(".");
  let value = locales[lang];
  for (const k of keys) {
    value = value?.[k];
  }
  if (typeof value !== "string") return key;
  return value.replace(/\{\{(\w+)\}\}/g, (_, p) => params[p] ?? "");
}

export const supportedLanguages = Object.keys(locales);