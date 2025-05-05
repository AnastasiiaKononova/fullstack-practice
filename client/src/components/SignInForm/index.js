import React from "react";
import { Field, Form, useFormik } from "formik";
import { connect } from "react-redux";
import CustomField from "../CustomField/index";
import styles from "../../pages/Home/Home.module.css";
import {signInRequest} from '../../actions/actionCreators';
// import {signIn} from '../../api/index';
const SignInForm = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // signIn(values).then((res) => {
      //   props.sendCallback(res);
      // });
      // ТЕПЕР НАМ ТРЕБА ТІЛЬКИ ВІДПРАВИТИ ЕКШН
      props.signInRequest(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      onReset={formik.handleReset}
      className={styles.form}
    >
      <CustomField
        type="text"
        name="email"
        formik={formik}
        placeholder="Type your email"
      />
      <CustomField
        type="text"
        name="password"
        formik={formik}
        placeholder="Type your password"
      />
      <button type="submit">Submit form</button>
    </form>
  );
};

const mapDispatch = {
  signInRequest
}

export default connect(null, mapDispatch)(SignInForm);