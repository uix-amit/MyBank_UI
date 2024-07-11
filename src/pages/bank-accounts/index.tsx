import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { AppDispatch } from '@shared/store/rootStore';
import { setTitle } from '@shared/store/header.slice';

function BankAccount() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setTitle('savings account'));
  }, [dispatch]);

  return <h1 className='text-3xl font-bold'>{location.pathname} Works!</h1>;
}

export default BankAccount;
