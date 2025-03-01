import { UpdateAccountDto, UpdateLoanTransactionDto, UpdateTransactionDto } from '.';

export interface DashboardData {
  accounts: Array<
    UpdateAccountDto & {
      Bank: { BankName: string };
      User: {
        FirstName: string;
        LastName: string;
      };
    }
  >;
  transactions: UpdateTransactionDto[];
  loanTransactions: UpdateLoanTransactionDto[];
  accountBalanceByBank: AccountBalanceByBank[];
  weeklyTransactions: WeeklyTransaction[];
}

export interface Bank {
  BankName: string;
}

export interface AccountBalanceByBank {
  BankName: string;
  TotalBalance: number;
}

export interface WeeklyTransaction {
  name: string;
  data: number[];
}

export interface Sum {
  Amount: number;
}
