import { ProductData } from "@/pages/products/card"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const generateProductImage = (product: ProductData, index?: number) => `/products/${product?.category.toLowerCase()}/${product?.name.toLowerCase()}/${product?.images[index ?? 0]}`