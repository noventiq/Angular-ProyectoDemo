
import { Cart } from 'src/app/shared/models/cart';
import { Pagination } from 'src/app/shared/models/Pagination';

export interface PaginationOrder extends Pagination {
  carts: Cart[];
}
