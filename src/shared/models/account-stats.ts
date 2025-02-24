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
