import ACTION_TYPES from "../actions/actionTypes";
import { produce } from "immer";

const initialStates = {
  user: null,
  currentChat: [],
  error: null,
  chatList: [],
  isFetching: false,
};

function reducer(state = initialStates, action) {
  // Pure function!
  console.log(action);
  switch (action.type) {
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
    case ACTION_TYPES.GET_USER_CHATS_LIST_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        chatList: action.payload,
      };
    }
    case ACTION_TYPES.GET_USER_DATA_ERROR:
    case ACTION_TYPES.GET_USER_CHATS_LIST_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    case ACTION_TYPES.GET_USER_DATA_REQUEST:
    case ACTION_TYPES.GET_USER_CHATS_LIST_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case ACTION_TYPES.GET_USER_DATA_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        user: action.payload,
      };
    }
    default:
      return state;
  }
}
export default reducer;
