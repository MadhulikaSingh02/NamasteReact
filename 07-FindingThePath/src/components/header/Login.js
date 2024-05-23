/*
Formik is a small group of React components and hooks for building forms in React and React Native.
It helps with the three most annoying parts:
Getting values in and out of form state
Validation and error messages
Handling form submission*/

import { Formik, useFormik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
function Login() {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted.
  // Note that we have to initialize ALL of fields with values. These could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell at us.
  const navigate = useNavigate();
  const valSchema = Yup.object({
    userName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    password: Yup.string().min(6, "Min 6-digits").required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      // alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      navigate("/restaurants");
    }, 400);
  };

  return (
    <Formik
      initialValues={{ email: "", userName: "", password: "" }}
      validationSchema={valSchema}
      onSubmit={handleSubmit}
    >
      <div className="login-container login">
        <Form className="login-form">
          <span>Login</span>
          <label htmlFor="userName">
            <Field
              name="userName"
              id="userName"
              type="text"
              placeholder="Enter your name"
            />
          </label>
          <div className="login-error">
            <ErrorMessage name="userName" />
          </div>

          <label htmlFor="password">
            <Field
              name="password"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </label>
          <div className="login-error">
            <ErrorMessage name="password" />
          </div>

          <label htmlFor="email">
            <Field
              name="email"
              id="email"
              type="email"
              placeholder="Enter your email id"
            />
          </label>
          <div className="login-error">
            <ErrorMessage name="email" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </div>
    </Formik>
  );
}
export default Login;

//Refer https://formik.org/docs/tutorial
// A custom validation function. This must return an object whose keys are symmetrical to our values/initialValues.
//By default, Formik will validate after each keystroke (change event), each input’s blur event, as well as prior to submission.
//The onSubmit function we passed in useFormik() will be executed only if there are no errors (i.e. if our validate function returns {})

//Q-why are we using onBlur ={formik.handleBlur}
//Though the form works even when using onChange event only, it is not a great user experience.
//Since the validation function validate() runs on each keystroke against the entire form's 'values' , the error object contains all the
//validation errors at any given time. Say I enter an incorrect email id without entering the first name, 2 errors will be displayed.
//That means, errors are displayed for fields that are not visited also.
//Solution : Formik keeps track of which fields are visited. This information is stored in an object called 'touched'. The key is the field name,
//value is either true/false. Use 'touched' property alongwith onBlur={formik.handleBlur} to each input.

//BoilerPlate code is removed using formik.getFieldProps(fieldname)
//{...formik.getFieldProps("firstName")} replaces the below
// onChange={formik.handleChange}
// onBlur={formik.handleBlur}
// value={formik.values.firstName}
