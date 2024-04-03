import { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import "./style.css";
import { ThemeContext } from "../../themeContext/ThemeContext";

const EmailJsForm = () => {
  const theme = useContext(ThemeContext).theme;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => emailjs.init("mZ_ccWYQyh2FdB5Er"), []);

  const handleSubmit = async (values, { setSubmitting }) => {
    const serviceId = "service_ghumrkn";
    const templateId = "template_gbu7gpt";
    setLoading(true);
    try {
      await emailjs.send(serviceId, templateId, {
        name: values.name,
        email: values.email,
        message: values.message,
      });
      setLoading(false);
      setError(null);
      alert("Email successfully sent. Check your inbox.");
    } catch (error) {
      setLoading(false);
      setError(error);
      console.log("FAILED...", error);
    } finally {
      setSubmitting(false);
      setLoading(false);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  return (
    <section style={{ backgroundColor: theme ? "#667" : "#f8f9fa" }}>
      <aside></aside>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className='for'>
            <div className='form_group'>
              <label
                style={{ color: theme ? "white" : "black" }}
                htmlFor='name'
              >
                Name
              </label>
              <Field
                id='name'
                name='name'
                placeholder='Enter your name'
                className={theme ? "dark-mode-input" : ""}
              />
              <ErrorMessage
                name='name'
                component='div'
                className='error-message'
              />
            </div>
            <div className='form_group'>
              <label
                style={{ color: theme ? "white" : "black" }}
                htmlFor='email'
              >
                Email
              </label>
              <Field
                id='email'
                name='email'
                type='email'
                placeholder='Enter your email'
                className={theme ? "dark-mode-input" : ""}
              />
              <ErrorMessage
                name='email'
                component='div'
                className='error-message'
              />
            </div>
            <div className='form-group'>
              <label
                style={{ color: theme ? "white" : "black" }}
                htmlFor='message'
              >
                Message
              </label>
              <Field
                className={theme ? "dark-mode-input" : ""}
                id='message'
                name='message'
                as='textarea'
                placeholder='Enter your message'
              />
              <ErrorMessage
                name='message'
                component='div'
                className='error-message'
              />
            </div>
            <button type='submit' className='btn' disabled={loading}>
              Send
            </button>
          </Form>
        )}
      </Formik>
      {loading && <div className='loader'></div>}
      {error && <p className='error-message'>Error: {error}</p>}
    </section>
  );
};

export default EmailJsForm;
