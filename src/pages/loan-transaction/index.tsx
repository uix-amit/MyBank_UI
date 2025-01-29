import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import TransactionFilters from '@components/transaction-filters';
import TransactionTable from '@components/transaction-table';
import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import { Link } from 'react-router-dom';
import axiosInstance from '@utils/axiosInstance';
import { UpdateLoanTransactionDto } from '@shared/models';
import { FilterTransaction } from '@shared/models/filter-transaction-dto';

function LoanTransaction() {
  const dispatch = useDispatch<AppDispatch>();
  const [loanTransactions, setLoanTransactions] = useState<UpdateLoanTransactionDto[]>([]);

  useEffect(() => {
    dispatch(setTitle('loan transaction history'));
  }, [dispatch]);

  useEffect(() => {
    axiosInstance
      .get('/loan-transactions')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((data: any) => setLoanTransactions(data))
      .catch(console.error);
  }, []);

  const handleFilterTransactions = (filters: FilterTransaction) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filterParams = new URLSearchParams(filters as any).toString();
    axiosInstance
      .get(`/transactions/filter?${filterParams}`)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((response: any) => setLoanTransactions(response))
      .catch(console.error);
  };

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Filters</h2>
      <TransactionFilters isLoanFilter={true} onFilter={handleFilterTransactions} />
      <h2 className='text-xl font-bold mb-4'>Transaction History</h2>
      <TransactionTable transactions={loanTransactions} />
      <div className='text-primary p-4 flex justify-end'>
        <Link to={'create'} className='w-fit'>
          Make another payment
          <img
            className='inline-block w-8 pl-2'
            src='https://img.icons8.com/?size=100&id=355&format=png&color=491eff'
            alt='link new account'
          />
        </Link>
      </div>
    </>
  );
}

export default LoanTransaction;
