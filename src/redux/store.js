import { configureStore } from '@reduxjs/toolkit';
import { drugsReducer } from './drugs/slice';
import { cartReducer } from './cart/slice';
import { ordersReducer } from './orders/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['cart'],
};

export const store = configureStore({
  reducer: {
    drugs: drugsReducer,
    cart: persistReducer(cartPersistConfig, cartReducer),
    orders: ordersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
