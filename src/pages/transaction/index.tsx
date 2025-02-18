import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import TransactionFilters from '@components/transaction-filters';
import TransactionTable from '@components/transaction-table';
import transactionsApi from '@shared/api/transactionsApi';
import { FilterTransaction } from '@shared/models/filter-transaction-dto';
import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';

function Transaction() {
  const dispatch = useDispatch<AppDispatch>();
  const [filters, setFilters] = useState<FilterTransaction | void>();
  const { data: transactions } = transactionsApi.useGetTransactionsQuery(filters);

  useEffect(() => {
    dispatch(setTitle('Transaction history'));
  }, [dispatch]);

  const handleFilterTransactions = (filters: FilterTransaction) => {
    setFilters(filters);
  };

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Filters</h2>
      <TransactionFilters isLoanFilter={false} onFilter={handleFilterTransactions} />
      <h2 className='text-xl font-bold mb-4'>Transaction History</h2>
      {transactions && <TransactionTable transactions={transactions} />}
    </>
  );
}

export default Transaction;
