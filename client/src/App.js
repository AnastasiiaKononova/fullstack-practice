import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import {
  unstable_HistoryRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import UserContext from "./contexts/UserContext";
import history from "./history";
import "./reset.css";
import { getUserData } from "./api";

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
    <Router history={history}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route path="/messenger" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

/*
Розробити метод контроллера, роут на отримання інформації юзера на основі його токена
Компонента App робить запит, якщо в стейті нема юзера, якщо запит провалився - нас має викинути на сторінку авторизації

*/
