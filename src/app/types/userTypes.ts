import { ErrorMessage } from './errorTypes';
import { Product } from './productTypes';

export type User = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  birthday: string | null;
  phone_number: string | null;
  address: string | null;
  postal_code: string | null;
  city: string | null;
  country: string | null;
  created_at: Date;
  updated_at: Date | null;
};

export type UserResponse = User | ErrorMessage;

export type UsersResponse = User[] | ErrorMessage;

export type LoginResponse =
  | {
      message: string;
      accessToken: string;
      result: User;
    }
  | ErrorMessage;

export type UserBasket =
  | {
      random_id: string;
      user_id: number;
      firstname: string;
      lastname: string;
      email: string;
      total_delivery: string;
      total_ttc: string;
      final_price: string;
      product: Product[];
    }
  | ErrorMessage;
