export function formatCurrency(amount) {
  const price = amount?.toFixed(2) || 0;

  return `$${price}`;
}
