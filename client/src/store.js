import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers/rootReducer";

const enhancer = composeWithDevTools();

const store = createStore(reducer, enhancer);

export default store;

/*
 1. Винести створення стору в окремий файл
 2. Прикрутити до нього devTools
 
 */
