export interface CreateTransactionConfig {
  fromAccountIDs: {
    value: string;
    label: string;
  }[];
  toAccountIDs: {
    value: string;
    label: string;
  }[];
  transactionType: 'Transfer' | 'LoanRepayment';
}
