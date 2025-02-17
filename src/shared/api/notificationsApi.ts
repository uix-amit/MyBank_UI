import { createApi } from '@reduxjs/toolkit/query/react';

import { UpdateNotificationDto } from '@shared/models';
import { baseQuery } from './baseQuery';

export const notificationsApi = createApi({
  reducerPath: 'notificationsApi',
  baseQuery,
  tagTypes: ['Notification'],
  endpoints: (builder) => ({
    // Get all notifications
    getNotifications: builder.query<UpdateNotificationDto[], void>({
      query: () => '/notifications',
      providesTags: ['Notification'],
    }),

    updateNotification: builder.mutation<UpdateNotificationDto, UpdateNotificationDto>({
      query: (body) => ({
        url: `/notifications/${body.NotificationID}`,
        method: 'PATCH',
        body,
      }),
      onQueryStarted: async (body, { dispatch, queryFulfilled }) => {
        const patchResult = dispatch(
          notificationsApi.util.updateQueryData('getNotifications', undefined, (draft) => {
            const notification = draft.find((n) => n.NotificationID === body.NotificationID);
            if (notification) {
              // Update the notification in the cache
              Object.assign(notification, body);
            }
          })
        );
        try {
          await queryFulfilled; // Wait for the server update to complete
        } catch {
          patchResult.undo(); // Revert the cache update if the server update fails
        }
      },
      invalidatesTags: (_result, _error, { NotificationID }) => [
        { type: 'Notification', id: NotificationID },
      ],
    }),

    toggleNotifications: builder.mutation<
      { notificationIds: string[]; IsRead: boolean },
      { notificationIds: string[]; IsRead: boolean }
    >({
      query: (body) => ({
        url: '/notifications/toggle-read',
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Notification'],
    }),
  }),
});

export default notificationsApi;
