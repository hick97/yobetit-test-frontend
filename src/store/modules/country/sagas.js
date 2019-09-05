import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import {
  getAllCountriesSuccess,
  getCountriesFailure,
  getCountriesByNameSuccess,
  getCountriesFromArraySuccess,
} from './actions';

export function* getAllCountries() {
  try {
    const response = yield call(api.get, '/country/all');

    yield put(getAllCountriesSuccess(response.data));
  } catch (err) {
    toast.error('Failed to load countries');
    yield put(getCountriesFailure());
  }
}
export function* getCountryByName({ payload }) {
  try {
    const { name } = payload;
    const response = yield call(api.get, `/country/name/${name}`);

    yield put(getCountriesByNameSuccess([response.data]));
  } catch (err) {
    toast.error('Failed to load country');
    yield put(getCountriesFailure());
  }
}
export function* getCountriesFromArray({ payload }) {
  const { names } = payload;
  try {
    const response = yield call(api.post, '/country/names', {
      names,
    });

    const result = [];

    response.data.map(c => {
      result.push(...c);
    });

    yield put(getCountriesFromArraySuccess(result));
  } catch (err) {
    toast.error('Failed to load countries');
    yield put(getCountriesFailure());
  }
}

export default all([
  takeLatest('@country/GET_ALL_COUNTRIES_REQUEST', getAllCountries),
  takeLatest('@country/GET_COUNTRIES_BY_NAME_REQUEST', getCountryByName),
  takeLatest(
    '@country/GET_COUNTRIES_FROM_ARRAY_REQUEST',
    getCountriesFromArray
  ),
]);
