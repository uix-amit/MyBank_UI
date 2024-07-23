import {
  AccoutStatus,
  Currency,
  LoanAccountStatus,
  LoanType,
  TransactionStatus,
  TransactionType,
  UpdateAccountDto,
  UpdateCardDto,
  UpdateLoanDto,
  UpdateLoanTransactionDto,
  UpdateNotificationDto,
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

export const loanAccounts: UpdateLoanDto[] = [
  {
    loanID: 'clyi97hbx00000cikfwsrbiqr',
    accountNumber: '1234567890124567',
    bankID: 'ICICI Bank Pvt. Ltd.',
    userID: 'John Doe',
    loanAmount: 1234,
    createdAt: new Date(),
    loanStatus: LoanAccountStatus.OUTSTANDING,
    updatedAt: new Date(),
    loanType: LoanType.HOME,
    interestRate: 9.45,
    loanEndDate: new Date().toISOString(),
    loanStartDate: new Date().toISOString(),
    loanTerm: 360,
    remainingTenure: 360,
  },
  {
    loanID: 'clyi97hbx00000cikfwsrbiq1',
    accountNumber: '1234567890124567',
    bankID: 'State Bank of India',
    userID: 'John Doe',
    loanAmount: 1234,
    createdAt: new Date(),
    loanStatus: LoanAccountStatus.OUTSTANDING,
    updatedAt: new Date(),
    loanType: LoanType.HOME,
    interestRate: 9.45,
    loanEndDate: new Date().toISOString(),
    loanStartDate: new Date().toISOString(),
    loanTerm: 360,
    remainingTenure: 360,
  },
  {
    loanID: 'clyi97hbx00000cikfwsrbiq2',
    accountNumber: '1234567890124567',
    bankID: 'HDFC Bank Pvt. Ltd.',
    userID: 'John Doe',
    loanAmount: 1234,
    createdAt: new Date(),
    loanStatus: LoanAccountStatus.SETTLED,
    updatedAt: new Date(),
    loanType: LoanType.VEHICLE,
    interestRate: 9.45,
    loanEndDate: new Date().toISOString(),
    loanStartDate: new Date().toISOString(),
    loanTerm: 360,
    remainingTenure: 360,
  },
];

export const notifications: UpdateNotificationDto[] = [
  {
    notificationID: 'clyyix8aj00000clbdnd91ncw',
    userID: 'clyyix8aj00000clbdnd91nch',
    createdAt: new Date(),
    isRead: true,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet vulputate quam at congue.',
  },
  {
    notificationID: 'clyyix8aj00000clbdnd91ncc',
    userID: 'clyyix8aj00000clbdnd91ncr',
    createdAt: new Date(),
    isRead: false,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet vulputate quam at congue.',
  },
];
