import ACTION_TYPES from "../actions/actionTypes";
import {produce} from 'immer';

const initialStates = {
  user: null,
  currentChat: [],
  error: null,
  chatList: []
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
    case ACTION_TYPES.ADD_NEW_MESSAGE: {
      const nextState = produce(state, (draft) => {
        draft.currentChat.push(action.payload);
      });
      return nextState;
      
      // return {
      //   ...state,
      //   currentChat: {
      //     ...state.currentChat,
      //     messages: [...state.currentChat.messages, action.payload]
        
      //   }
      // }
    }
    default:
      return state; 
  }
}
export default reducer;
