export type TvasResponse =
  | {
      id: number;
      rate: number;
      created_at: Date;
      updated_at: Date | null;
    }[]
  | {
      error: string;
    };

export type TvaResponse =
  | {
      id: number;
      rate: number;
      created_at: Date;
      updated_at: Date | null;
    }
  | {
      error: string;
    };
