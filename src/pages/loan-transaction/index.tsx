import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loanTransactions } from '@assets/stubs/fake-data';
import TransactionFilters from '@components/transaction-filters';
import TransactionTable from '@components/transaction-table';
import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import { Link } from 'react-router-dom';

function LoanTransaction() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setTitle('loan transaction history'));
  }, [dispatch]);
  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Filters</h2>
      <TransactionFilters isLoanFilter={true} />
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
