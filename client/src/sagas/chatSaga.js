import { put } from "redux-saga/effects";
import { getUserChats } from "../api/index";
import {
  getUserChatListSuccess,
  getUserChatListError,
} from "../actions/actionCreators";

export function* getUserChatSaga() {
  try {
    const result = yield getUserChats();
    // якщо запит був успішний - маємо згенерувати action з успішним статусом і результатом запиту
    const action = getUserChatListSuccess(result.data.data);
    // відправляємо екшн в редьюсер
    yield put(action);
  } catch (error) {
    // якщо запит був не успішний - маємо згенерувати action з статусом помилки і об'єктом помилки всередині
    const errorAction = getUserChatListError(error);
    yield put(errorAction);
  }
}
