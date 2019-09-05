import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

// Using local storage to persist reducers
export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'yobetit',
      storage,
      whitelist: ['auth', 'user', 'country'],
    },
    reducers
  );

  return persistedReducer;
};
