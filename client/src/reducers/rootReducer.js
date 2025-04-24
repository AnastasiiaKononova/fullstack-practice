const initialStates = {
  user: null,
  currentChat: null,
  error: null,
};

function reducer(state = initialStates, action) {
  // Pure function!
  console.log(action);
  switch (action.type) {
    case "GET_USER_DATA": {
      return {
        ...state,
        user: action.payload,
      };
    }
    case "USER_DATA_ERROR_FETCHING": {
      return {
        ...state,
        error: action.error.message,
      };
    }
    default:
      return state; 
  }
}
export default reducer;
