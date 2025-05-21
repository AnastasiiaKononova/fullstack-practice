import ACTION_TYPES from "./actionTypes";
import { createAction } from "@reduxjs/toolkit";
import constants from "../constants";

/* Auth/UserData actions */

//// refactor to createAction

// export const getUserDataRequest = () => ({
//   type: ACTION_TYPES.GET_USER_DATA_REQUEST,
// });

// export const getUserDataSuccess = (payload) => ({
//   type: ACTION_TYPES.GET_USER_DATA_SUCCESS,
//   payload,
// });

// export const getUserDataError = (error) => ({
//   type: ACTION_TYPES.GET_USER_DATA_ERROR,
//   error,
// });

export const getUserDataRequest = createAction('GET_USER_DATA_REQUEST');
export const getUserDataSuccess = createAction(ACTION_TYPES.GET_USER_DATA_SUCCESS);
export const getUserDataError = createAction(ACTION_TYPES.GET_USER_DATA_ERROR);



export const signInRequest = (payload) => ({
  type: ACTION_TYPES.SIGN_IN_REQUEST,
  payload,
});

export const signInSuccess = (payload) => ({
  type: ACTION_TYPES.SIGN_IN_SUCCESS,
  payload,
});

export const signInError = (error) => ({
  type: ACTION_TYPES.SIGN_IN_ERROR,
  error,
});

export const signUpRequest = (payload) => ({
  type: ACTION_TYPES.SIGN_UP_REQUEST,
  payload,
});

export const signUpSuccess = (payload) => ({
  type: ACTION_TYPES.SIGN_UP_SUCCESS,
  payload,
});

export const signUpError = (error) => ({
  type: ACTION_TYPES.SIGN_UP_ERROR,
});

/* Chat actions */
// export const addNewMessageRequest = (payload) => ({
//   type: ACTION_TYPES.ADD_NEW_MESSAGE_REQUEST,
//   payload,
// });

// export const addNewMessageSuccess = (payload) => ({
//   type: ACTION_TYPES.ADD_NEW_MESSAGE_SUCCESS,
//   payload,
// });

// export const addNewMessageError = (error) => ({
//   type: ACTION_TYPES.ADD_NEW_MESSAGE_ERROR,
//   error,
// });

export const addNewMessageRequest = createAction(ACTION_TYPES.ADD_NEW_MESSAGE_REQUEST);

// export const addNewMessageSuccess = createAction(ACTION_TYPES.ADD_NEW_MESSAGE_SUCCESS);

// export const addNewMessageError = createAction(ACTION_TYPES.ADD_NEW_MESSAGE_ERROR);


// export const addMessage = (payload) => ({
//   type: constants.ADD_MESSAGE_TO_CHAT,
//   payload,
// })

export const addMessage = createAction(constants.ADD_MESSAGE_TO_CHAT);
export const getUserChatList = () => ({
  type: ACTION_TYPES.GET_USER_CHATS_LIST_REQUEST,
});

export const getUserChatListSuccess = (payload) => ({
  type: ACTION_TYPES.GET_USER_CHATS_LIST_SUCCESS,
  payload,
});

export const getUserChatListError = (error) => ({
  type: ACTION_TYPES.GET_USER_CHATS_LIST_ERROR,
  error,
});

// export const getCurrentChatRequest = (payload) => ({
//   type: ACTION_TYPES.GET_CURRENT_CHAT_REQUEST,
//   payload,
// });

// export const getCurrentChatSuccess = (payload) => ({
//   type: ACTION_TYPES.GET_CURRENT_CHAT_SUCCESS,
//   payload,
// });

// export const getCurrentChatError = (error) => ({
//   type: ACTION_TYPES.GET_CURRENT_CHAT_ERROR,
//   error,
// });

export const getCurrentChatRequest = createAction(ACTION_TYPES.GET_CURRENT_CHAT_REQUEST);

export const getCurrentChatSuccess = createAction(ACTION_TYPES.GET_CURRENT_CHAT_SUCCESS);

export const getCurrentChatError = createAction(ACTION_TYPES.GET_CURRENT_CHAT_ERROR);

export const createNewChatRequest = (payload) => ({
  type: ACTION_TYPES.CREATE_NEW_CHAT_REQUEST,
  payload,
});

export const createNewChatSuccess = (payload) => ({
  type: ACTION_TYPES.CREATE_NEW_CHAT_SUCCESS,
  payload,
});

export const createNewChatError = (error) => ({
  type: ACTION_TYPES.CREATE_NEW_CHAT_ERROR,
  error,
});



/*

const actionType = 'ACTION_TYPE';

const actionCreator = (payload) => ({
    type: actionType,
    payload
});


const action = createAction(actionType); // action - це функція, яка очікує на виклик з корисним навантаженням, аби повернути action-об'єкт з типом і payload
action(payload);

function customActionCreator (type) {
    return function (payload) {
        return {
            type,
            payload
        }
    }
}

*/

