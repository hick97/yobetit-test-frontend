export function getAllCountriesRequest() {
  return {
    type: '@country/GET_ALL_COUNTRIES_REQUEST',
  };
}

export function getAllCountriesSuccess(data) {
  return {
    type: '@country/GET_ALL_COUNTRIES_SUCCESS',
    payload: { data },
  };
}
export function getCountriesByNameRequest(name) {
  return {
    type: '@country/GET_COUNTRIES_BY_NAME_REQUEST',
    payload: { name },
  };
}

export function getCountriesByNameSuccess(data) {
  return {
    type: '@country/GET_COUNTRIES_BY_NAME_SUCCESS',
    payload: { data },
  };
}

export function getCountriesFromArrayRequest(names) {
  return {
    type: '@country/GET_COUNTRIES_FROM_ARRAY_REQUEST',
    payload: { names },
  };
}

export function getCountriesFromArraySuccess(data) {
  return {
    type: '@country/GET_COUNTRIES_FROM_ARRAY_SUCCESS',
    payload: { data },
  };
}

export function getCountriesFailure() {
  return {
    type: '@country/GET_COUNTRIES_FAILURE',
  };
}
