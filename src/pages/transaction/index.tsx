import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import TransactionFilters from '@components/transaction-filters';
import TransactionTable from '@components/transaction-table';
import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import axiosInstance from '@utils/axiosInstance';
import { UpdateTransactionDto } from '@shared/models';

function Transaction() {
  const dispatch = useDispatch<AppDispatch>();
  const [transactions, setTransactions] = useState<UpdateTransactionDto[]>([]);

  useEffect(() => {
    dispatch(setTitle('Transaction history'));
  }, [dispatch]);

  useEffect(() => {
    axiosInstance
      .get('transactions')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((response: any) => setTransactions(response))
      .catch(console.error);
  }, []);

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Filters</h2>
      <TransactionFilters isLoanFilter={false} />
      <h2 className='text-xl font-bold mb-4'>Transaction History</h2>
      <TransactionTable transactions={transactions} />
    </>
  );
}

export default Transaction;
