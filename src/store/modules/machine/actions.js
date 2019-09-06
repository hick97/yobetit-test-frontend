export function getSpinResultRequest() {
  return {
    type: '@machine/GET_SPIN_RESULT_REQUEST',
  };
}

export function getSpinResultSuccess(data) {
  return {
    type: '@machine/GET_SPIN_RESULT_SUCCESS',
    payload: { data },
  };
}

export function getSpinResultFailure() {
  return {
    type: '@machine/GET_SPIN_FAILURE',
  };
}
