import ACTION_TYPES from "../actions/actionTypes";

const initialStates = null;
function userReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_USER_DATA_SUCCESS:
    case ACTION_TYPES.SIGN_IN_SUCCESS:
    case ACTION_TYPES.SIGN_UP_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export default userReducer;
