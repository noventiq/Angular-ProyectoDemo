
import { Pagination } from 'src/app/shared/models/Pagination';
import { Product } from 'src/app/shared/models/product';

export interface PaginationProduct extends Pagination {
  products: Product[];
}
