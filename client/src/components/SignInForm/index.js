import React from 'react';
 import { Field, Form, useFormik } from 'formik';
 import CustomField from '../CustomField/index';
 
 const SignInForm = () => {
     const formik = useFormik({
         initialValues: {
             email: '',
             password: ''
         },
         onSubmit: values => {
             console.log(values);
         }
     });
 
 
 
     return (
         <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
 
             <CustomField type="text" name="email" formik={formik}/>
             <CustomField type="text" name="password" formik={formik}/>
             <button type="submit">Submit form</button>
         </form>
     );
 }
 
 export default SignInForm;