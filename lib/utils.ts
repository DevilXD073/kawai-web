export function formatINR(value: number) {
  if (value === 0) return "Custom";
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
}
export const discordUrl = "https://discord.gg/bda6V274PT";
