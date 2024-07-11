import BankCard from '@components/bank-card';
import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function Dashboard() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setTitle('dashboard'));
  }, [dispatch]);
  return (
    <div>
      <BankCard />
    </div>
  );
}

export default Dashboard;
