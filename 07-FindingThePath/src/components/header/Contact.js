import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from "react";

import * as Yup from "yup";

export default Contact = () => {
  const [message, setMessage] = useState(false);
  const valSchema = Yup.object({
    userName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    phone: Yup.string(), //.matches(/^d{9}$/, "Invalid Phone number"),
    userFeedback: Yup.string().required("Required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 400);

    setMessage(true);
  };
  return (
    <Formik
      initialValues={{ userName: "", email: "", phone: "", userFeedback: "" }}
      validationSchema={valSchema}
      onSubmit={handleSubmit}
    >
      <div className="contact-container contact">
        {/* {({ isSubmitting }) => ( */}
        <Form className="contact-form">
          <span>Contact</span>
          <label htmlFor="userName">
            <Field
              name="userName"
              id="userName"
              type="text"
              placeholder="Enter your name"
            />
          </label>
          <div className="contact-error">
            <ErrorMessage name="userName" />
          </div>

          <label htmlFor="phone">
            <Field
              name="phone"
              id="phone"
              type="text"
              placeholder="Enter your phone number"
            />
          </label>
          <div className="contact-error">
            <ErrorMessage name="phone" />
          </div>

          <label htmlFor="email">
            <Field
              name="email"
              id="email"
              type="email"
              placeholder="Enter your email id"
            />
          </label>
          <div className="contact-error">
            <ErrorMessage name="email" />
          </div>
          <Field
            as="textarea"
            name="userFeedback"
            className="form-textarea"
            placeholder="Type your message here... "
          />
          <div className="contact-error">
            <ErrorMessage name="userFeedback" />
          </div>
          <button type="submit">Submit</button>
          {message && (
            <p className="contact-message">Thank you for contacting us!!</p>
          )}
        </Form>
        {/* )} */}
      </div>
    </Formik>
  );
};
