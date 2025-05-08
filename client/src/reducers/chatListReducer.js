import ACTION_TYPES from "../actions/actionTypes";

const initialStates = [];

function chatListReducer(state = initialStates, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_USER_CHATS_LIST_SUCCESS: {
      return action.payload;
    }
    case ACTION_TYPES.CREATE_NEW_CHAT_SUCCESS: {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
}

export default chatListReducer;
