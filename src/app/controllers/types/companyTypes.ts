export type CompanysResponse =
  | {
      id: number;
      name: string;
      city: string;
      address: string;
      phone_number: string;
      email: string;
      siret_number: string;
      created_at: Date;
      updated_at: Date | null;
    }[]
  | {
      error: string;
    };
