import ACTION_TYPES from "../actions/actionTypes";
import { produce } from "immer";
import { combineReducers } from "redux";
import userReducer from "./userReducer";
import chatListReducer from "./chatListReducer";
import currentChatReducer from "./currentChatReducer";
import errorReducer from "./errorReducer";
import fetchingReducer from "./fetchingReducer";

const initialStates = {
  user: null,
  currentChat: null,
  error: null,
  chatList: [],
  isFetching: false,
};

const rootReducer = combineReducers({
  user: userReducer,
  chatList: chatListReducer,
  currentChat: currentChatReducer,
  error: errorReducer,
  isFetching: fetchingReducer,
});

// function reducer(state = initialStates, action) {
//   // Pure function!
//   console.log(action);

//   switch (action.type) {
//     case ACTION_TYPES.ADD_NEW_MESSAGE_SUCCESS: {
//       const nextState = produce(state, (draft) => {
//         draft.currentChat.messages.push(action.payload);
//       });
//       return nextState;

//       // return {
//       //   ...state,
//       //   currentChat: {
//       //     ...state.currentChat,
//       //     messages: [...state.currentChat.messages, action.payload]

//       //   }
//       // }
//     }
//     case ACTION_TYPES.GET_USER_CHATS_LIST_SUCCESS: {
//       return {
//         ...state,
//         isFetching: false,
//         chatList: action.payload,
//       };
//     }
//     case ACTION_TYPES.SIGN_IN_ERROR:
//     case ACTION_TYPES.SIGN_UP_ERROR:
//     case ACTION_TYPES.ADD_NEW_MESSAGE_ERROR:
//     case ACTION_TYPES.GET_USER_DATA_ERROR:
//     case ACTION_TYPES.GET_USER_CHATS_LIST_ERROR: {
//       return {
//         ...state,
//         isFetching: false,
//         error: action.error,
//       };
//     }

//     case ACTION_TYPES.GET_USER_DATA_REQUEST:
//     case ACTION_TYPES.GET_USER_CHATS_LIST_REQUEST: {
//       return {
//         ...state,
//         isFetching: true,
//       };
//     }
//     case ACTION_TYPES.GET_USER_DATA_SUCCESS: {
//       return {
//         ...state,
//         isFetching: false,
//         user: action.payload,
//       };
//     }
//     case ACTION_TYPES.SIGN_UP_SUCCESS:
//     case ACTION_TYPES.SIGN_IN_SUCCESS: {
//       return {
//         ...state,
//         user: action.payload,
//       };
//     }
//     case ACTION_TYPES.GET_CURRENT_CHAT_SUCCESS: {
//       const currentChat = action.payload;
//       const userMap = new Map();
//       currentChat.members.forEach((user) => {
//         userMap.set(user._id, user);
//       });

//       const mapped = currentChat.messages.map((message) => {
//         message.author = userMap.get(message.author);
//         return message;
//       });
//       return {
//         ...state,
//         currentChat: {
//           ...currentChat,
//           messages: mapped,
//         },
//       };
//       /// Ось тут в редьюсері ми можемо робити будь-які СИНХРОННІ перетворення даних
//     }
//     default:
//       return state;
//   }
// }

export default rootReducer;

/*
 currentChat = {
     members: [],
     messages: []
 }
 Треба пройтись циклом по messages і в поле author "всадити" об'єкт members, який відповідає цьому автору
 
   */
