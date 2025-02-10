import { createSlice } from '@reduxjs/toolkit';
import { UpdateNotificationDto } from '@shared/models';

const initialState: UpdateNotificationDto[] = [];

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    loadNotifications: (_, action) => action.payload,
    toggleNotificationStatus: (state, action) =>
      state.map((notification) =>
        notification.NotificationID === action.payload.NotificationID
          ? { ...notification, IsRead: !notification.IsRead }
          : notification
      ),
  },
  selectors: {
    getAllNotifications: (state) => state,
  },
});

export const { loadNotifications, toggleNotificationStatus } = notificationsSlice.actions;
export const { getAllNotifications } = notificationsSlice.selectors;

export default notificationsSlice.reducer;
