import produce from 'immer';

const INITIAL_STATE = {
  spin_result: {
    spin: ['banana', 'cherry', 'apple'],
    coins_won: 0,
    winner: true,
  },
  loading: false,
};

export default function machine(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@machine/GET_SPIN_RESULT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@machine/GET_SPIN_RESULT_SUCCESS': {
        draft.spin_result = action.payload.data;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.spin_result.winner = true;
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
