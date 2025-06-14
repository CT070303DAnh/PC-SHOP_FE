export function formatPrice(price: any) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
export function formatToJavaString(input: string) {
  return input
    .replace(/\n/g, "\\n") // Handle line breaks
    .replace(/"/g, '\\"') // Escape quotes
    .trim();
}
