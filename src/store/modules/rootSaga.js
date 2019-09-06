import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import country from './country/sagas';
import machine from './machine/sagas';

export default function* rootSaga() {
  return yield all([auth, user, country, machine]);
}
