/// Показуємо юзеру signIn/signUp форму входу у додаток
import React, { useState, useEffect } from "react";
import SignInForm from "../../components/SignInForm";
import SignUpForm from "../../components/SignUpForm";
import styles from "./Home.module.css";

const Home = (props) => {
  const [formView, setView] = useState(true);

  const changeView = () => {
    setView(!formView);
  };

  const sendData = (data) => {
    console.log(data);
    props.setUser(data);
  };

  const btnText = formView ? "Sign Up" : "Sign In";

  return (
    <main>
      <button onClick={changeView}>{btnText}</button>
      <section className={styles["form-container"]}>
        {formView ? (
          <SignInForm sendCallback={sendData} />
        ) : (
          <SignUpForm sendCallback={sendData} />
        )}
      </section>
    </main>
  );
};

export default Home;
