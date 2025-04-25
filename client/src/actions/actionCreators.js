import ACTION_TYPES from "./actionTypes";
export const addNewMessage = (payload) => ({
  type: ACTION_TYPES.ADD_NEW_MESSAGE,
  payload,
});
