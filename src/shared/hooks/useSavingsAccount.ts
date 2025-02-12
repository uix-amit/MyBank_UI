import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllSavingsAccounts, loadSavingsAccounts } from '@shared/store/savingsAccounts.slice';
import axiosInstance from '@utils/axiosInstance';

const useSavingsAccount = () => {
  const savingsAccounts = useSelector(getAllSavingsAccounts);
  const dispatch = useDispatch();

  const fetchSavingsAccounts = () =>
    axiosInstance
      .get('/savings-account')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((data: any) => dispatch(loadSavingsAccounts(data)))
      .catch(console.error);

  useEffect(() => {
    !savingsAccounts.length && fetchSavingsAccounts();
  }, []);
};

export default useSavingsAccount;
