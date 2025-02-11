import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadLoanTransactions } from '@shared/store/loanTransactions.slice';
import axiosInstance from '@utils/axiosInstance';

const useLoanTransactions = ({ url }: { url: string }) => {
  console.log(url);

  const dispatch = useDispatch();

  const fetchLoanTransaction = () =>
    axiosInstance
      .get(url)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((data: any) => dispatch(loadLoanTransactions(data)))
      .catch(console.error);

  useEffect(() => {
    fetchLoanTransaction();
  }, [url]);
};

export default useLoanTransactions;
