import {
  UpdateAccountDto,
  UpdateTransactionDto,
  TransactionType,
  UpdateLoanTransactionDto,
} from '@shared/models';

export const accounts: UpdateAccountDto[] = [
  {
    accountID: 'clyi97hbx00000cikfwsrbiqr',
    accountNumber: '1234567890124567',
    bankID: 'clyi982hl00010cikele9hjk8',
    userID: 'clyi98cix00000ckugwce2nce',
    balance: 1234,
  },
  {
    accountID: 'clyi9f7xg00010ckuacxhcwox',
    accountNumber: '0987654321234567',
    bankID: 'clyi9f7xg00010ckuacvhcwox',
    userID: 'clyi9fgwp00030ckuh5om3tyj',
    balance: 1234,
  },
];
export const transactions: UpdateTransactionDto[] = [
  {
    transactionID: 'clyiank7j00000vk29q0iczm6',
    amount: 1234,
    transactionDate: new Date(),
    transactionType: TransactionType.CREDIT,
    toAccountID: 'clyiar5cp00000cl3vxfb30fa',
  },
  {
    transactionID: 'clyiank7j00000ck29q0iczv6',
    amount: 1234,
    transactionDate: new Date(),
    transactionType: TransactionType.DEBIT,
    fromAccountID: 'clyiar5vp00000cl3dxfb30fa',
  },
  {
    transactionID: 'clyiank7j00000ck29q0icvm6',
    amount: 1234,
    transactionDate: new Date(),
    transactionType: TransactionType.CREDIT,
    toAccountID: 'clyiar5cp00000cl3dxfb30fv',
  },
];
export const loanTransactions: UpdateLoanTransactionDto[] = [
  {
    transactionID: 'clyiank7j00000vk29q0iczm6',
    amount: 1234,
    transactionDate: new Date(),
    toAccountID: 'clyiar5cp00000cl3vxfb30fa',
  },
  {
    transactionID: 'clyiank7j00000ck29q0iczv6',
    amount: 1234,
    transactionDate: new Date(),
    fromAccountID: 'clyiar5vp00000cl3dxfb30fa',
  },
  {
    transactionID: 'clyiank7j00000ck29q0icvm6',
    amount: 1234,
    transactionDate: new Date(),
    toAccountID: 'clyiar5cp00000cl3dxfb30fv',
  },
  {
    transactionID: 'clyiqa1jl00000clc9xe68e5z',
    amount: 1234,
    transactionDate: new Date(),
    toAccountID: 'clyiar5cp00000cl3dxfb30fv',
  },
  {
    transactionID: 'clyiqa1vl00000clc9xe68e5z',
    amount: 1234,
    transactionDate: new Date(),
    toAccountID: 'clyiar5cp00000cl3dxfb30fv',
  },
];
