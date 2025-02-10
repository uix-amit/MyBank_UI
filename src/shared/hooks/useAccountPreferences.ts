import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getAccountPreferences,
  loadAccountPreferences,
} from '@shared/store/accountPreferences.slice';
import axiosInstance from '@utils/axiosInstance';

const useAccountPreferences = () => {
  const accountPreferences = useSelector(getAccountPreferences);
  const dispatch = useDispatch();

  const fetchAccountPreferences = () =>
    axiosInstance
      .get('/account-preferences')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((preferences: any) => dispatch(loadAccountPreferences(preferences)))
      .catch(console.error);

  useEffect(() => {
    !accountPreferences.AccountPreferenceID && fetchAccountPreferences();
  }, []);
};

export default useAccountPreferences;
