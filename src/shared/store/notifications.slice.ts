import { createSlice } from '@reduxjs/toolkit';

import { UpdateNotificationDto } from '@shared/models';

const initialState: UpdateNotificationDto[] = [];

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    loadNotifications: (_, action) => action.payload,
    addNotification: (state, action) => [action.payload, ...state],
    toggleNotificationStatus: (state, action) =>
      state.map((notification) =>
        notification.NotificationID === action.payload.NotificationID
          ? { ...notification, IsRead: !notification.IsRead }
          : notification
      ),
    toggleAllNotificationsStatus: (state, action) =>
      state.map((notification) => ({ ...notification, IsRead: action.payload })),
  },
  selectors: {
    getAllNotifications: (state) => state,
    isAllNotificationsRead: (state) => state.every(({ IsRead }) => IsRead),
  },
});

export const {
  loadNotifications,
  addNotification,
  toggleNotificationStatus,
  toggleAllNotificationsStatus,
} = notificationsSlice.actions;
export const { getAllNotifications, isAllNotificationsRead } = notificationsSlice.selectors;

export default notificationsSlice.reducer;
