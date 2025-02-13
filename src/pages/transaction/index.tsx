import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TransactionFilters from '@components/transaction-filters';
import TransactionTable from '@components/transaction-table';
import useTransactions from '@shared/hooks/useTransactions';
import { FilterTransaction } from '@shared/models/filter-transaction-dto';
import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import { getTransactions } from '@shared/store/transaction.slice';

function Transaction() {
  const dispatch = useDispatch<AppDispatch>();
  const transactions = useSelector(getTransactions);
  const [url, setUrl] = useState('/transactions');
  useTransactions({ url });

  useEffect(() => {
    dispatch(setTitle('Transaction history'));
  }, [dispatch]);

  const handleFilterTransactions = (filters: FilterTransaction) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filterParams = new URLSearchParams(filters as any).toString();
    setUrl(`/transactions/filter?${filterParams}`);
  };

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Filters</h2>
      <TransactionFilters isLoanFilter={false} onFilter={handleFilterTransactions} />
      <h2 className='text-xl font-bold mb-4'>Transaction History</h2>
      <TransactionTable transactions={transactions} />
    </>
  );
}

export default Transaction;
