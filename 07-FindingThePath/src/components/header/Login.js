/*
Formik is a small group of React components and hooks for building forms in React and React Native.
It helps with the three most annoying parts:
Getting values in and out of form state
Validation and error messages
Handling form submission*/

import { useFormik } from "formik";
import * as Yup from "yup";
function Login() {
  // console.log(useFormik({}));
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted.
  // Note that we have to initialize ALL of fields with values. These could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell at us.
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
    },
    // validate,
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 5));
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
            {...formik.getFieldProps("firstName")}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.firstName}
          />
        </label>
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="login-error">{formik.errors.firstName}</div>
        ) : (
          ""
        )}
        <label htmlFor="lastName">
          <input
            id="lastName"
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            {...formik.getFieldProps("lastName")}
          />
        </label>
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="login-error">{formik.errors.lastName}</div>
        ) : (
          ""
        )}
        <label htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email id"
            {...formik.getFieldProps("email")}
          />
        </label>
        {formik.touched.email && formik.errors.email ? (
          <div className="login-error">{formik.errors.email}</div>
        ) : (
          ""
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// A custom validation function. This must return an object whose keys are symmetrical to our values/initialValues.
//By default, Formik will validate after each keystroke (change event), each input’s blur event, as well as prior to submission.
//The onSubmit function we passed in useFormik() will be executed only if there are no errors (i.e. if our validate function returns {})
const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export default Login;
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
