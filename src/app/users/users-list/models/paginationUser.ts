
import { User } from 'src/app/shared/models/user';
import { Pagination } from 'src/app/shared/models/Pagination';

export interface PaginationUser extends Pagination {
  users: User[];
}
