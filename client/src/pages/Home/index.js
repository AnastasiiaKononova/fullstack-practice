/// Показуємо юзеру signIn/signUp форму входу у додаток
import React, { useState, useEffect } from "react";
import SignInForm from "../../components/SignInForm";
import SignUpForm from "../../components/SignUpForm";
import styles from "./Home.module.css";
import history from "../../history";

const Home = (props) => {
  const [formView, setView] = useState(true);

  const changeView = () => {
    setView(!formView);
  };

  // const sendData = (response) => {
  //   console.log(response);
  //   props.setUser(response.data.data);

  //   // після оновлення даних у стейті App - хочемо автоматично перенаправити користувача на дашборд
  //   history.push("/messenger");
  // };

  const btnText = formView ? "Sign Up" : "Sign In";

  return (
    <main>
      <button onClick={changeView}>{btnText}</button>
      <section className={styles["form-container"]}>
        {formView ? (
          <SignInForm />
        ) : (
          <SignUpForm />
        )}
      </section>
    </main>
  );
};

export default Home;
