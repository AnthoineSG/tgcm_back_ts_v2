import { ErrorMessage } from './errorTypes';

export type Company = {
  id: number;
  name: string;
  city: string;
  address: string;
  phone_number: string;
  email: string;
  siret_number: string;
  created_at: Date;
  updated_at: Date | null;
};

export type CompanysResponse = Company[] | ErrorMessage;
