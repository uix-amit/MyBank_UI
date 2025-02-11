import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllLoanAccounts, loadLoanAccounts } from '@shared/store/loanAccounts.slice';
import axiosInstance from '@utils/axiosInstance';

const useLoans = () => {
  const loanAccounts = useSelector(getAllLoanAccounts);
  const dispatch = useDispatch();

  const fetchLoansAccounts = () =>
    axiosInstance
      .get('/loans')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((data: any) => dispatch(loadLoanAccounts(data)))
      .catch(console.error);

  useEffect(() => {
    !loanAccounts.length && fetchLoansAccounts();
  }, []);
};

export default useLoans;
