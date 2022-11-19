import { ErrorMessage } from './errorTypes';

export type Tva = {
  id: number;
  rate: number;
  created_at: Date;
  updated_at: Date | null;
};

export type TvaResponse = Tva | ErrorMessage;

export type TvasResponse = Tva[] | ErrorMessage;
