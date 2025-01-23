import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import CreateTransaction from '@components/create-transaction';
import { CreateTransactionConfig } from '@shared/models';
import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import axiosInstance from '@utils/axiosInstance';

function TransactionCreate() {
  const dispatch = useDispatch<AppDispatch>();
  const [savingsAccount, setSavingsAccount] = useState<{ value: string; label: string }[]>([]);

  useEffect(() => {
    dispatch(setTitle('Transfer Money'));
  }, [dispatch]);

  useEffect(() => {
    axiosInstance
      .get('savings-account')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((response: any) =>
        setSavingsAccount(
          response.map(
            ({ AccountID, AccountNumber }: { AccountID: string; AccountNumber: string }) => ({
              value: AccountID,
              label: AccountNumber,
            })
          )
        )
      )
      .catch(console.error);
  }, []);

  const config: CreateTransactionConfig = {
    fromAccountIDs: savingsAccount,
    toAccountIDs: savingsAccount,
    transactionType: 'Transfer',
  };

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Transfer money to other accounts</h2>
      <CreateTransaction config={config}></CreateTransaction>
    </>
  );
}

export default TransactionCreate;
