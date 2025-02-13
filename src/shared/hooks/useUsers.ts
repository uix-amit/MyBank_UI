import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUser, loadUser } from '@shared/store/users.slice';
import axiosInstance from '@utils/axiosInstance';

const useUsers = () => {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  const fetchUser = () =>
    axiosInstance
      .get('/users')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((user: any) => dispatch(loadUser(user)))
      .catch(console.error);

  useEffect(() => {
    !user.UserID && fetchUser();
  }, []);
};

export default useUsers;
