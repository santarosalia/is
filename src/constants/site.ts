export const SITE_URL = "https://lunatic.monster";
export const CONTACT_EMAIL = "mdc@kakao.com";

const PLACEHOLDER_LINKS = new Set([
  "",
  "https://github.com",
  "https://example.com",
]);

export function hasValidLink(url?: string): boolean {
  if (!url?.trim()) return false;
  return !PLACEHOLDER_LINKS.has(url.trim());
}
