export interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
  productDetails: ProductDetails;
}

export interface ProductDetails {
  partNumber: string;
  dimension?: string;
  manufacture?: string;
  weight?: number;
  origin?: string;
}

export interface UpdateProduct {
  name: string;
  quantity: number;
  price: number;
}
