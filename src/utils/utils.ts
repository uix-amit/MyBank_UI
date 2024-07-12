export const formatAccountNumber = (accountNumber: string): string =>
  accountNumber.replace(/(.{4})/g, '$1 ');
