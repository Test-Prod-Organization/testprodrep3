export function formatActivityTime(timestamp, userTimezone) {
  const date = new Date(timestamp);
  const options = {
    timeZone: userTimezone || "UTC",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function getTimezoneOffset(timezone) {
  const now = new Date();
  const utcDate = new Date(now.toLocaleString("en-US", { timeZone: "UTC" }));
  const tzDate = new Date(now.toLocaleString("en-US", { timeZone: timezone }));
  return (tzDate - utcDate) / (1000 * 60);
}