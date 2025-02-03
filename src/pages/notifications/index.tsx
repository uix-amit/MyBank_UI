import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { UpdateNotificationDto } from '@shared/models';
import { setTitle } from '@shared/store/header.slice';
import { AppDispatch } from '@shared/store/rootStore';
import axiosInstance from '@utils/axiosInstance';

function Notifications() {
  const dispatch = useDispatch<AppDispatch>();
  const [notifications, setNotifications] = useState<UpdateNotificationDto[]>([]);
  const [isAllRead, setIsAllRead] = useState<boolean>(false);

  useEffect(() => {
    dispatch(setTitle('Notifications'));
  }, [dispatch]);

  useEffect(() => {
    axiosInstance
      .get('/notifications')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((data: any) => {
        setNotifications(data);
        setIsAllRead(data.every(({ IsRead }: { IsRead: boolean }) => IsRead));
      })
      .catch(console.error);
  }, []);

  const markAsRead = (selectedNotification: UpdateNotificationDto) => {
    axiosInstance
      .patch(`/notifications/${selectedNotification.NotificationID}`, selectedNotification)
      .then(() => {
        const updatedNotifications = notifications.map((notification) =>
          notification.NotificationID === selectedNotification.NotificationID
            ? selectedNotification
            : notification
        );

        setNotifications(updatedNotifications);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setIsAllRead(updatedNotifications.every(({ IsRead }: any) => IsRead));
      })
      .catch(console.error);
  };

  const markAllAsRead = () => {
    axiosInstance
      .patch('/notifications/toggle-read', {
        notificationIds: notifications.map(({ NotificationID }) => NotificationID),
        IsRead: !isAllRead,
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((data: any) => {
        setNotifications(data);
        setIsAllRead(data.every(({ IsRead }: { IsRead: boolean }) => IsRead));
      })
      .catch(console.error);
  };

  return (
    <>
      <h2 className='text-xl font-bold mb-4'>Notifications</h2>
      <div className='flex justify-end'>
        <div className='form-control'>
          <label className='label cursor-pointer'>
            <input
              type='checkbox'
              onChange={() => markAllAsRead()}
              checked={!isAllRead}
              className='toggle toggle-primary tooltip'
              data-tip={`Mark All as ${!isAllRead ? 'Read' : 'Unread'}`}
            />
          </label>
        </div>
      </div>
      <div className='w-full lg:w-full flex flex-col p-4 bg-white rounded-lg shadow-lg'>
        {notifications.map((notification) => (
          <div
            key={notification.NotificationID}
            className={`p-1 rounded-lg mb-1 hover:bg-gray-300 ${notification.IsRead ? 'bg-gray-100' : 'bg-white'}`}
          >
            <div className='flex justify-between items-center mb-1'>
              <span>{notification.Message}</span>
              <div className='form-control'>
                <label className='label cursor-pointer'>
                  <input
                    type='checkbox'
                    onChange={() => markAsRead({ ...notification, IsRead: !notification.IsRead })}
                    className='toggle toggle-primary tooltip'
                    data-tip={`Mark All as ${!notification.IsRead ? 'Read' : 'Unread'}`}
                    checked={!notification.IsRead}
                  />
                </label>
              </div>
            </div>
            <div className='text-gray-500 text-sm'>
              {format(notification.CreatedAt as Date, 'dd/MM/yyyy HH:mm:ss')}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Notifications;
