import React, { useState, useEffect } from "react";
// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
// import {
//   unstable_HistoryRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
// import UserContext from "./contexts/UserContext";
// import history from "./history";
// import "./reset.css";
// import { getUserData } from "./api";
import MyComponent from "./MyComponent";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialStates = {
  count: 0,
  step: 0,
  anotherValue: "super-impotant-value",
};

const ACTION_TYPES = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  STEP_CHANGE: "STEP_CHANGE",
};

const store = createStore(reducer);

function reducer(state = initialStates, action) {
  // Pure function!
  console.log(action);
  switch (action.type) {
    case ACTION_TYPES.INCREMENT: {
      return {
        ...state,
        count: state.count + state.step,
      };
    }
    case ACTION_TYPES.DECREMENT: {
      return {
        ...state,
        count: state.count - state.step,
      };
    }
    case ACTION_TYPES.STEP_CHANGE: {
      return {
        ...state,
        step: Number(action.value),
      };
    }
  }
  return state;
}

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {

  //   if (!user) {
  //     // ідемо за юзером.
  //     // якщо отримуємо її - кладемо у стейт
  //     console.log('getUserData')
  //     getUserData().then(({data: {data}}) => {
  //       setUser(data)
  //     })
  //   }
  // }, []);

  return (
    <Provider store={store}>
      {/* Provider має огортати весь додаток, 
    щоб роздавати значення стора нижче по дереву компонент */}
      <MyComponent />
    </Provider>

    /* // <Router history={history}>
    //   <UserContext.Provider value={user}>
    //   <Routes>
    //     <Route path='/' exact element={<Home setUser={setUser}/>} />
    //     <Route path='/messenger' element={<Dashboard />} />
    //   </Routes>
    //   </UserContext.Provider>
    // </Router> */
  );
}

export default App;

/*
Розробити метод контроллера, роут на отримання інформації юзера на основі його токена
Компонента App робить запит, якщо в стейті нема юзера, якщо запит провалився - нас має викинути на сторінку авторизації

*/
