import { UpdateAccountDto, UpdateLoanDto } from '.';

export interface CreateTransactionConfig {
  fromAccount: UpdateAccountDto[];
  toAccount: UpdateAccountDto[] | UpdateLoanDto[];
  transactionType: 'Transfer' | 'LoanRepayment';
}
