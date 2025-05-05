import React from "react";
import { Field, Form, useFormik } from "formik";
import { format } from "date-fns";
import { connect } from "react-redux";
import CustomField from "../CustomField";
import styles from "../../pages/Home/Home.module.css";
// import {signUp} from '../../api/index';
import {signUpRequest} from '../../actions/actionCreators';

const SignUpForm = (props) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      birthday: format(new Date(), "yyyy-MM-dd"),
      imagePath: "",
    },
    onSubmit: (values) => {
      // signUp(values).then((res) => {
      //   props.sendCallback(res);
      // });
      props.signUpRequest(values)
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
        name="firstName"
        formik={formik}
        placeholder="Type your first name"
      />
      <CustomField
        type="text"
        name="lastName"
        formik={formik}
        placeholder="Type your last name"
      />
      <CustomField
        type="email"
        name="email"
        formik={formik}
        placeholder="Type your email"
      />
      <CustomField
        type="password"
        name="password"
        formik={formik}
        placeholder="Type your password"
      />
      <CustomField type="date" name="birthday" formik={formik} />
      <CustomField type="file" name="imagePath" formik={formik} />
      <button type="submit">Submit form</button>
    </form>
  );
};

const mapDispatch = {
  signUpRequest
}

export default connect(null, mapDispatch)(SignUpForm);

/*
 
 firstName - text
 lastName - text
 email - email
 password - password
 birthday - date
 imagePath - file
 
 */
