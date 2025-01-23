import { UpdateCardDto } from '.';

interface Accounts {
  AccountNumber: string;
  Bank: {
    BankName: string;
  };
  Cards: UpdateCardDto[];
}

export interface CardList {
  FirstName: string;
  LastName: string;
  Accounts: Accounts[];
}
