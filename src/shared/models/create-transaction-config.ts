import { UpdateAccountDto, UpdateLoanDto } from '.';

export interface CreateTransactionConfig {
  fromAccount: UpdateAccountDto[];
  toAccount: UpdateLoanDto[];
  transactionType: 'Transfer' | 'LoanRepayment';
}
