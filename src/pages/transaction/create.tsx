import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CreateTransaction from '@components/create-transaction';
import useSavingsAccount from '@shared/hooks/useSavingsAccount';
import { CreateTransactionConfig } from '@shared/models';
import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import { getAllSavingsAccounts } from '@shared/store/savingsAccounts.slice';

function TransactionCreate() {
  const dispatch = useDispatch<AppDispatch>();
  const savingsAccount = useSelector(getAllSavingsAccounts);
  useSavingsAccount();

  useEffect(() => {
    dispatch(setTitle('Transfer Money'));
  }, [dispatch]);

  const config: CreateTransactionConfig = {
    fromAccount: savingsAccount,
    toAccount: savingsAccount,
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
