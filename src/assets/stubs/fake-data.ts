import {
  AccoutStatus,
  Currency,
  TransactionStatus,
  TransactionType,
  UpdateAccountDto,
  UpdateCardDto,
  UpdateLoanTransactionDto,
  UpdateTransactionDto,
} from '@shared/models';

export const accounts: UpdateAccountDto[] = [
  {
    accountID: 'clyi97hbx00000cikfwsrbiqr',
    accountNumber: '1234567890124567',
    bankID: 'ICICI Bank Pvt. Ltd.',
    userID: 'John Doe',
    balance: 1234,
    createdAt: new Date(),
    currency: Currency.INR,
    status: AccoutStatus.ACTIVE,
    updatedAt: new Date(),
  },
  {
    accountID: 'clyi9f7xg00010ckuacxhcwox',
    accountNumber: '0987654321234567',
    bankID: 'State Bank of India',
    userID: 'John Doe',
    balance: 1234,
    createdAt: new Date(),
    currency: Currency.INR,
    status: AccoutStatus.INACTIVE,
    updatedAt: new Date(),
  },
];

export const transactions: UpdateTransactionDto[] = [
  {
    transactionID: 'ckz1v1c8g0000g7z6j0x1x3x1',
    fromAccountID: 'Jane Doe',
    toAccountID: 'John Doe',
    amount: 100.5,
    transactionType: TransactionType.CREDIT,
    transactionDate: new Date(),
    transactionStatus: TransactionStatus.COMPLETE,
  },
  {
    transactionID: 'ckz1v1c8g0000g7z6j0x1x3x4',
    fromAccountID: 'Jane Doe',
    toAccountID: 'John Doe',
    amount: 250.0,
    transactionType: TransactionType.DEBIT,
    transactionDate: new Date(),
    transactionStatus: TransactionStatus.INPROGRESS,
  },
  {
    transactionID: 'ckz1v1c8g0000g7z6j0x1x3x7',
    fromAccountID: 'Jane Doe',
    toAccountID: 'John Doe',
    amount: 300.75,
    transactionType: TransactionType.DEBIT,
    transactionDate: new Date(),
    transactionStatus: TransactionStatus.FAILED,
  },
];

export const loanTransactions: UpdateLoanTransactionDto[] = [
  {
    transactionID: 'clyiank7j00000vk29q0iczm6',
    amount: 1234,
    transactionDate: new Date(),
    toAccountID: 'John Doe',
    fromAccountID: 'Jane Doe',
    transactionStatus: TransactionStatus.COMPLETE,
  },
  {
    transactionID: 'clyiank7j00000ck29q0iczv6',
    amount: 1234,
    transactionDate: new Date(),
    toAccountID: 'John Doe',
    fromAccountID: 'Jane Doe',
    transactionStatus: TransactionStatus.COMPLETE,
  },
  {
    transactionID: 'clyiank7j00000ck29q0icvm6',
    amount: 1234,
    transactionDate: new Date(),
    toAccountID: 'John Doe',
    fromAccountID: 'Jane Doe',
    transactionStatus: TransactionStatus.COMPLETE,
  },
  {
    transactionID: 'clyiqa1jl00000clc9xe68e5z',
    amount: 1234,
    transactionDate: new Date(),
    toAccountID: 'John Doe',
    fromAccountID: 'Jane Doe',
    transactionStatus: TransactionStatus.COMPLETE,
  },
  {
    transactionID: 'clyiqa1vl00000clc9xe68e5z',
    amount: 1234,
    transactionDate: new Date(),
    toAccountID: 'John Doe',
    fromAccountID: 'Jane Doe',
    transactionStatus: TransactionStatus.COMPLETE,
  },
];

export const cards: UpdateCardDto[] = [
  {
    cardID: 'clyi97hbx00000cikfwsrbiq1',
    accountID: 'clyi97hbx00000cikfwsrbiqr',
    cardNumber: '1234567890124567',
    CVV: 123,
    expirationDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    cardID: 'clyi97hbx00000cikfwsrbiq2',
    accountID: 'clyi9f7xg00010ckuacxhcwox',
    cardNumber: '1234567890124567',
    CVV: 123,
    expirationDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    cardID: 'clyi97hbx00000cikfwsrbiq3',
    accountID: 'clyi9f7xg00010ckuacxhcwox',
    cardNumber: '1234567890124567',
    CVV: 123,
    expirationDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
