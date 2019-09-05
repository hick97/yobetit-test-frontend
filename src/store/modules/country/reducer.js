import produce from 'immer';

const INITIAL_STATE = {
  countries: [],
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@country/GET_ALL_COUNTRIES_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@country/GET_ALL_COUNTRIES_SUCCESS': {
        draft.countries = action.payload.data;
        draft.loading = false;
        break;
      }
      case '@country/GET_COUNTRIES_BY_NAME_REQUEST': {
        draft.countries = [];
        draft.loading = true;
        break;
      }
      case '@country/GET_COUNTRIES_BY_NAME_SUCCESS': {
        draft.countries = action.payload.data;
        draft.loading = false;
        break;
      }
      case '@country/GET_COUNTRIES_FROM_ARRAY_REQUEST': {
        draft.countries = [];
        draft.loading = true;
        break;
      }
      case '@country/GET_COUNTRIES_FROM_ARRAY_SUCCESS': {
        draft.countries = action.payload.data;
        draft.loading = false;
        break;
      }
      case '@country/GET_COUNTRIES_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
