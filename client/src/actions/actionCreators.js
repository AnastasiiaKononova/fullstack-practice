import ACTION_TYPES from "./actionTypes";


/* Auth/UserData actions */

export const getUserDataRequest = () => ({
  type: ACTION_TYPES.GET_USER_DATA_REQUEST
})

export const getUserDataSuccess = (payload) => ({
  type: ACTION_TYPES.GET_USER_DATA_SUCCESS,
  payload
})

export const getUserDataError = (error) => ({
  type: ACTION_TYPES.GET_USER_DATA_ERROR,
  error
})


/* Chat actions */
export const addNewMessageRequest = (payload) => ({
  type: ACTION_TYPES.ADD_NEW_MESSAGE_REQUEST,
  payload
})

export const addNewMessageSuccess = (payload) => ({
  type: ACTION_TYPES.ADD_NEW_MESSAGE_SUCCESS,
  payload
})

export const addNewMessageError = (error) => ({
  type: ACTION_TYPES.ADD_NEW_MESSAGE_ERROR,
  error
})

export const getUserChatList = () => ({
  type: ACTION_TYPES.GET_USER_CHATS_LIST_REQUEST
})

export const getUserChatListSuccess = (payload) => ({
  type: ACTION_TYPES.GET_USER_CHATS_LIST_SUCCESS,
  payload
});

export const getUserChatListError = (error) => ({
  type: ACTION_TYPES.GET_USER_CHATS_LIST_ERROR,
  error
});

export const getgetCurrentChatRequest = (payload) => ({
  type: ACTION_TYPES.GET_CURRENT_CHAT_REQUEST,
  payload
});

export const getCurrentChatSuccess = (payload) => ({
  type: ACTION_TYPES.GET_CURRENT_CHAT_SUCCESS,
  payload
});

export const getCurrentChatError = (error) => ({
  type: ACTION_TYPES.GET_CURRENT_CHAT_ERROR,
  error
})