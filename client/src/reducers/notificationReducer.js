import ACTION_TYPES from "../actions/actionTypes";
import { createReducer } from "@reduxjs/toolkit";

const initialState = null;

const notificationReducer = createReducer(initialState, (builder) => {
  builder.addCase(
    ACTION_TYPES.NEW_NOTIFICATION,
    (state, action) => action.payload
  );
});

export default notificationReducer;
