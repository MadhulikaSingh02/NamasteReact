import { Formik, useFormik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
function Login() {
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
