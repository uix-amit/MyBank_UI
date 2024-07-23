import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { notifications as notificationsData } from '../../assets/stubs/fake-data';

function Notifications() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setTitle('Notifications'));
  }, [dispatch]);
  const [notifications, setNotifications] = useState(notificationsData);

  const markAsRead = (id: string) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.notificationID === id
          ? { ...notification, isRead: !notification.isRead }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({ ...notification, isRead: true }))
    );
  };

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Notifications</h2>
      <div className='w-full lg:w-1/2 flex flex-col p-4 bg-white rounded-lg shadow-lg'>
        <div className='flex justify-end'>
          <div className='form-control'>
            <label className='label cursor-pointer'>
              <input
                type='checkbox'
                onChange={() => markAllAsRead()}
                className='toggle toggle-primary tooltip'
                data-tip='Mark All as Read'
              />
            </label>
          </div>
        </div>
        {notifications.map((notification) => (
          <div
            key={notification.notificationID}
            className={`p-1 rounded-lg mb-1 hover:bg-gray-300 ${notification.isRead ? 'bg-gray-100' : 'bg-white'}`}
          >
            <div className='flex justify-between items-center mb-1'>
              <span>{notification.message}</span>
              <div className='form-control'>
                <label className='label cursor-pointer'>
                  <input
                    type='checkbox'
                    onChange={() => markAsRead(notification.notificationID)}
                    className='toggle toggle-primary tooltip'
                    data-tip='Mark as Read'
                    checked={!notification.isRead}
                  />
                </label>
              </div>
            </div>
            <div className='text-gray-500 text-sm'>
              {format(notification.createdAt as Date, 'dd/MM/yyyy HH:mm:ss')}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Notifications;
