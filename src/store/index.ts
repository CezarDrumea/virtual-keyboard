import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import keyboardReducer from './keyboardSlice';

const store = configureStore({
  reducer: {
    keyboard: keyboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): AppDispatch => {
  return useDispatch<AppDispatch>();
};
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
