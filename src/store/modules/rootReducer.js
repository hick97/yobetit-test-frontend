import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import country from './country/reducer';
import machine from './machine/reducer';

export default combineReducers({
  auth,
  user,
  country,
  machine,
});
