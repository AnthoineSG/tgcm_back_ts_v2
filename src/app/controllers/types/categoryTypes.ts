export type CategorysResponse =
  | {
      id: number;
      name: string;
      created_at: Date;
      updated_at: Date | null;
    }[]
  | {
      error: string;
    };

export type CategoryWithSubcategorysResponse =
  | {
      category: string;
      sub_category: string[];
    }[]
  | {
      error: string;
    };

export type SubcategorysResponse =
  | {
      id: number;
      name: string;
      category_id: number;
    }[]
  | {
      error: string;
    };
