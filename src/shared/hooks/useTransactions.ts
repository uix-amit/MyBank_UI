import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadTransactions } from '@shared/store/transaction.slice';
import axiosInstance from '@utils/axiosInstance';

const useTransactions = ({ url }: { url: string }) => {
  const dispatch = useDispatch();

  const fetchTransactions = () =>
    axiosInstance
      .get(url)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((response: any) => dispatch(loadTransactions(response)))
      .catch(console.error);

  useEffect(() => {
    fetchTransactions();
  }, [url]);
};

export default useTransactions;
