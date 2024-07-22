import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { loanAccounts } from '@assets/stubs/fake-data';
import LoanStats from '@components/loan-stats';
import LoansTable from '@components/loans-table';
import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';

function LoanAccount() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setTitle('Loan Accounts'));
  }, [dispatch]);

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Overview</h2>
      <LoanStats />
      <h2 className='text-xl font-bold my-4'>Loan Details</h2>
      <LoansTable loanAccounts={loanAccounts} />
      <div className='text-primary p-4 flex justify-end'>
        <Link to={'create'} className='w-fit'>
          Avail new loan
          <img
            className='inline-block w-8 pl-2'
            src='https://img.icons8.com/?size=100&id=355&format=png&color=000000'
            alt='Avail new loan'
          />
        </Link>
      </div>
    </>
  );
}

export default LoanAccount;
