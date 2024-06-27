import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../reducers/themeSlice';
import userReducer from '../reducers/userSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    // user: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
