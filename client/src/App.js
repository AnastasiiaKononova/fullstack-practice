import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import {
  unstable_HistoryRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import UserContext from './contexts/UserContext';
import history from "./history";
import "./reset.css";
import { connect } from "react-redux";
import { getUserData } from "./api";

function App(props) {
  useEffect(() => {
    if (!props.user && localStorage.getItem("accessToken")) {
      // ідемо за юзером.
      // якщо отримуємо її - кладемо у стейт
      console.log("getUserData");
      getUserData()
        .then(({ data: { data } }) => {
          // у нас є в пропсах функція dispatch
          console.log(data);
          const action = {
            type: "GET_USER_DATA",
            payload: data,
          };
          props.dispatch(action);
        })
        .catch((error) => {
          const action = {
            type: "USER_DATA_ERROR_FETCHING",
            error,
          };
          props.dispatch(action);
        });
    }
  }, []);

  return (
    <>
      <Router history={history}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path='/messenger' element={<Dashboard />} /> */}
        </Routes>
      </Router>
      {props.error && <p>Ooops, something goes wrong</p>}
    </>
  );
}

const mapStateToProps = ({ user, error }) => ({ user, error });
// визначає, яка частина стора нам потрібна тут!

export default connect(mapStateToProps)(App);

/// NEED refactor: чому ми провалились в безкінечний цикл?
