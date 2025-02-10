import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getBanks, loadBanks } from '@shared/store/banks.slice';
import axiosInstance from '@utils/axiosInstance';

const useBanks = () => {
  const banks = useSelector(getBanks);
  const dispatch = useDispatch();
  const fetchBanks = () =>
    axiosInstance
      .get('/savings-account/banks')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((data: any) => dispatch(loadBanks(data)))
      .catch(console.error);

  useEffect(() => {
    !banks.length && fetchBanks();
  }, []);
};

export default useBanks;
