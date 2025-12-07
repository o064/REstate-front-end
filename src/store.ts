import { configureStore } from '@reduxjs/toolkit';
import wishListReducer from "./store/wishListSlice"
import { PropertyApi } from './store/likeApi';
const store = configureStore({
  reducer: {
    [PropertyApi.reducerPath]: PropertyApi.reducer,
    wishList: wishListReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(PropertyApi.middleware)
})
export default store;


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

