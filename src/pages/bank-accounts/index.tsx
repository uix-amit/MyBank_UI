import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import AccountsTable from '@components/accounts-table';
import Stats from '@components/stats';
import savingsAccountApi from '@shared/api/savingsAccountApi';
import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';

function BankAccount() {
  const { data: accounts, isLoading } = savingsAccountApi.useGetSavingsAccountsQuery();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setTitle('savings account'));
  }, [dispatch]);

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Overview</h2>
      <Stats />
      <h2 className='text-xl font-bold my-4'>Account Details</h2>
      {accounts && <AccountsTable accounts={accounts} />}
      <div className='text-primary p-4 flex justify-end'>
        <Link to={'create'} className='w-fit'>
          Link new account
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

export default BankAccount;
