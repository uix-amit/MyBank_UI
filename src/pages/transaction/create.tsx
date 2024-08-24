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
    { value: '1234567890abcdef', label: '1234567890abcdef' },
    { value: '0987654321fedcba', label: '0987654321fedcba' },
    { value: 'abcdef1234567890', label: 'abcdef1234567890' },
    { value: 'fedcba0987654321', label: 'fedcba0987654321' },
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
