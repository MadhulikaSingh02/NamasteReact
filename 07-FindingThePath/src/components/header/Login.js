/*
Formik is a small group of React components and hooks for building forms in React and React Native.
It helps with the three most annoying parts:
Getting values in and out of form state
Validation and error messages
Handling form submission*/

import { useState } from "react";
import { useFormik } from "formik";

function Login() {
  console.log(useFormik({}));
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "B",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
  });

  return (
    <div className="login-container login">
      <form className="login-form" onSubmit={formik.handleSubmit}>
        <span>Login</span>
        <label htmlFor="firstName">
          <input
            id="firstName"
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </label>

        <label htmlFor="lastName">
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </label>

        <label htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email id"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Login;
