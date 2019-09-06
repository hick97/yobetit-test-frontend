import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { getSpinResultSuccess, getSpinResultFailure } from './actions';

export function* getSpinResult() {
  try {
    const response = yield call(api.get, 'machine');

    yield put(getSpinResultSuccess(response.data));
  } catch (err) {
    toast.error('Failed in spin execution');
    yield put(getSpinResultFailure());
  }
}

export default all([
  takeLatest('@machine/GET_SPIN_RESULT_REQUEST', getSpinResult),
]);
