import {
  TransactionStatus,
  TransactionType,
  UpdateAccountDto,
  UpdateLoanTransactionDto,
  UpdateTransactionDto,
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
    transactionID: 'ckz1v1c8g0000g7z6j0x1x3x1', // Example cuid
    fromAccountID: 'ckz1v1c8g0000g7z6j0x1x3x2', // Example cuid
    toAccountID: 'ckz1v1c8g0000g7z6j0x1x3x3', // Example cuid
    amount: 100.5,
    transactionType: TransactionType.CREDIT,
    transactionDate: new Date(),
    transactionStatus: TransactionStatus.COMPLETE,
  },
  {
    transactionID: 'ckz1v1c8g0000g7z6j0x1x3x4', // Example cuid
    fromAccountID: 'ckz1v1c8g0000g7z6j0x1x3x5', // Example cuid
    toAccountID: 'ckz1v1c8g0000g7z6j0x1x3x6', // Example cuid
    amount: 250.0,
    transactionType: TransactionType.DEBIT,
    transactionDate: new Date(),
    transactionStatus: TransactionStatus.INPROGRESS,
  },
  {
    transactionID: 'ckz1v1c8g0000g7z6j0x1x3x7', // Example cuid
    fromAccountID: 'ckz1v1c8g0000g7z6j0x1x3x8', // Example cuid
    toAccountID: 'ckz1v1c8g0000g7z6j0x1x3x9', // Example cuid
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
    toAccountID: 'clyiar5cp00000cl3vxfb30fa',
    fromAccountID: 'clyiar5cp00000cl3vxfb30f1',
    transactionStatus: TransactionStatus.COMPLETE
  },
  {
    transactionID: 'clyiank7j00000ck29q0iczv6',
    amount: 1234,
    transactionDate: new Date(),
    toAccountID: 'clyiar5cp00000cl3vxfb30ff',
    fromAccountID: 'clyiar5vp00000cl3dxfb30fa',
    transactionStatus: TransactionStatus.COMPLETE
  },
  {
    transactionID: 'clyiank7j00000ck29q0icvm6',
    amount: 1234,
    transactionDate: new Date(),
    toAccountID: 'clyiar5cp00000cl3dxfb30fv',
    fromAccountID: 'clyiar5cp00000cl3vxfb30f3',
    transactionStatus: TransactionStatus.COMPLETE
  },
  {
    transactionID: 'clyiqa1jl00000clc9xe68e5z',
    amount: 1234,
    transactionDate: new Date(),
    toAccountID: 'clyiar5cp00000cl3dxfb30fv',
    fromAccountID: 'clyiar5cp00000cl3vxfb30f3',
    transactionStatus: TransactionStatus.COMPLETE
  },
  {
    transactionID: 'clyiqa1vl00000clc9xe68e5z',
    amount: 1234,
    transactionDate: new Date(),
    toAccountID: 'clyiar5cp00000cl3dxfb30fv',
    fromAccountID: 'clyiar5cp00000cl3vxfb30f5',
    transactionStatus: TransactionStatus.COMPLETE
  },
];
