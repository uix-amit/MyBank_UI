import { UpdateAccountDto } from '@shared/models';

export const formatAccountNumber = (accountNumber: string): string =>
  accountNumber.replace(/(.{4})/g, '$1 ');

export const getSavingsAccountsAsOptions = (accounts: UpdateAccountDto[]) =>
  accounts.map(({ AccountID, AccountNumber }) => ({
    value: AccountID,
    label: AccountNumber,
  }));

export const formatNumber = (num: number): string => {
  if (Math.abs(num) >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}M`;
  } else if (Math.abs(num) >= 1_000) {
    return `${(num / 1_000).toFixed(1)}K`;
  } else {
    return num?.toString();
  }
};
