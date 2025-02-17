import { UpdateAccountDto } from '@shared/models';

export const formatAccountNumber = (accountNumber: string): string =>
  accountNumber.replace(/(.{4})/g, '$1 ');

export const getSavingsAccountsAsOptions = (accounts: UpdateAccountDto[]) =>
  accounts.map(({ AccountID, AccountNumber }) => ({
    value: AccountID,
    label: AccountNumber,
  }));
