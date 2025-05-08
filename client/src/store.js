import { createStore, applyMiddleware} from "redux";
import {configureStore, current} from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas/rootSaga";
import chatListReducer from "./reducers/chatListReducer";
import currentChatReducer from "./reducers/currentChatReducer";
import errorReducer from "./reducers/errorReducer";
import fetchingReducer from "./reducers/fetchingReducer";
import userReducer from "./reducers/userReducer";

const sagaMiddleware = createSagaMiddleware();

// const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

// const store = createStore(reducer, enhancer);



const store = configureStore({
    reducer: {
        user: userReducer,
        chatList: chatListReducer,
        currentChat: currentChatReducer,
        error: errorReducer,
        isFetching: fetchingReducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({thunk: false}), sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;

/*
 Синхронний Redux:
 
 1. State зі стора передається в пропси компоненті.
 2. Компонента відправляє action за допомогою функції dispatch в редьюсер
 3. Редьюсер приймає state, action і повертає новий об'єкт стану в стор
 4. Оновлення стану в сторі призводить до оновлення пропсів в компонентах.
 
 
 Асинхронний Redux:
 1. State зі стора передається в пропси компоненті.
 2. Компонента відправляє action за допомогою функції dispatch в редьюсер   
     2.1. Action ПЕРЕХОПЛЮЄТЬСЯ проміжним прошарком логіки (middleware), який перевіряє тип action на співпадіння заздалегідь визначеному типу
     Якщо перед нами action потрібного типу - виконуємо побічний ефект і дочікуємось результату.
     Коли результат буде відомо - генеруємо новий об'єкт action і несемо його в редьюсер
 3. Редьюсер приймає state, action і повертає новий об'єкт стану в стор
 4. Оновлення стану в сторі призводить до оновлення пропсів в компонентах.
 
 
 */
