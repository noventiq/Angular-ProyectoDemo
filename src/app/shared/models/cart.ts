import { Product } from './product';
export interface Cart {
  id: number;
  total: number;
  products: Product[];
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}
