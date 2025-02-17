import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CreateTransaction from '@components/create-transaction';
import savingsAccountApi from '@shared/api/savingsAccountApi';
import { CreateTransactionConfig, UpdateAccountDto } from '@shared/models';
import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';

function TransactionCreate() {
  const dispatch = useDispatch<AppDispatch>();
  const { data: savingsAccounts, isLoading } = savingsAccountApi.useGetSavingsAccountsQuery();

  useEffect(() => {
    dispatch(setTitle('Transfer Money'));
  }, [dispatch]);

  if (isLoading) {
    return <></>;
  }

  const config: CreateTransactionConfig = {
    fromAccount: savingsAccounts as UpdateAccountDto[],
    toAccount: savingsAccounts as UpdateAccountDto[],
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
