import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CreateTransaction from '@components/create-transaction';
import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import { CreateTransactionConfig } from '@shared/models';

function TransactionCreate() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setTitle('Transfer Money'));
  }, [dispatch]);

  const accountIDs = [
    { value: 'cm5wsd9yr0003p4jqn8l8da5y', label: '1234512345123455' },
    { value: 'cm5wsluz50001ycfakwn8bwkz', label: '1234512345123451' },
    { value: 'cm5xsvp1p0009uu2p5fzpp2m4', label: '1234512345123459' },
  ];

  const config: CreateTransactionConfig = {
    fromAccountIDs: accountIDs,
    toAccountIDs: accountIDs,
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
