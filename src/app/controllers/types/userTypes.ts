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

export type NewUserResponse =
  | {
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
    }
  | {
      error: string;
    };

export type DeleteUser =
  | {
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
    }
  | {
      error: string;
    };

export type UsersResponse =
  | {
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
    }[]
  | {
      error: string;
    };

export type UserResponse =
  | {
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
    }
  | {
      error: string;
    };

export type ProductBasket = {
  id: number;
  name: string;
  description: string;
  image: string;
  location: string | null;
  expiration_date: string | null;
  barcode: string | null;
  size: string | null;
  depth: string | null;
  width: string | null;
  height: string | null;
  weight: string | null;
  price_kg: number | null;
  price_promo: string | null;
  price_ht: number;
  tva_id: number;
  brand_id: number;
  sub_category_id: number;
  created_at: Date;
  updated_at: Date | null;
};

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
      product: ProductBasket[];
    }
  | {
      error: string;
    };

export interface Result {
  id: number;
  firstname: string;
  lastname: string;
  birthday: string;
  email: string;
  phone_number: string;
  address: string;
  postal_code: string;
  city: string;
  country: string;
  created_at: Date;
  updated_at: Date;
}

export type LoginResponse =
  | {
      message: string;
      accessToken: string;
      result: Result;
    }
  | {
      error: string;
    };

export type NewUser = {
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

export type UpdateUserResponse =
  | {
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
    }
  | {
      error: string;
    };
