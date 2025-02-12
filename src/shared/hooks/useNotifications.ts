import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllNotifications, loadNotifications } from '@shared/store/notifications.slice';
import axiosInstance from '@utils/axiosInstance';

const useNotifications = () => {
  const notifications = useSelector(getAllNotifications);
  const dispatch = useDispatch();

  const fetchNotifications = () =>
    axiosInstance
      .get('/notifications')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((data: any) => dispatch(loadNotifications(data)))
      .catch(console.error);

  useEffect(() => {
    !notifications.length && fetchNotifications();
  }, []);
};

export default useNotifications;
