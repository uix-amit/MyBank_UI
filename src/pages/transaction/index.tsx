import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import TransactionFilters from '@components/transaction-filters';
import TransactionTable from '@components/transaction-table';
import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import { transactions } from '@assets/stubs/fake-data';

function Transaction() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setTitle('Transaction history'));
  }, [dispatch]);

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Filters</h2>
      <TransactionFilters />
      <h2 className='text-xl font-bold mb-4'>Transaction History</h2>
      <TransactionTable transactions={transactions} />
    </>
  );
}

export default Transaction;
