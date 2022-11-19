import { ErrorMessage } from './errorTypes';

export type Category = {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date | null;
};

export type CategorysResponse = Category[] | ErrorMessage;

export type CategoryWithSubcategorysResponse =
  | {
      category: string;
      sub_category: string[];
    }[]
  | ErrorMessage;

export type SubcategorysResponse =
  | {
      id: number;
      name: string;
      category_id: number;
    }[]
  | ErrorMessage;
