import { TransactionType } from '.';

export interface FilterTransaction {
  TransactionType: TransactionType;
  StartDate: Date;
  EndDate: Date;
  MinAmount: number;
  MaxAmount: number;
}
