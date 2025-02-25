interface IncomeExpenses {
  numberOfTransactions: number;
  amountOfTransactions: number;
}

export interface AccountStats {
  Balance: number;
  Income: IncomeExpenses;
  Expenses: IncomeExpenses;
  Savings: number;
}

export interface LoanAccountStats {
  LoanAmount: number;
  EMI: number;
  InterestPaid: number;
}
