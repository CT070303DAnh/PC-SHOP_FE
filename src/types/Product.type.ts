export interface Product {
  id: string; // Unique identifier for the product
  productName: string; // Name of the product
  description: string; // Product description
  price: number; // Original price of the product
  specialPrice: number; // Discounted price of the product
  discount: number; // Discount percentage
  image: string; // URL or path to the product image
  quantity: number; // Quantity in stock
}
