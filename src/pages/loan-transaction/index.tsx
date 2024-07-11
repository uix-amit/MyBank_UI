import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function LoanTransaction() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setTitle('loan transaction history'));
  }, [dispatch]);
  return <h1 className='text-3xl font-bold'>{location.pathname} Works!</h1>;
}

export default LoanTransaction;
