import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

export default function ContactForm({ addContact }) {
  const nameId = useId();
  const numberId = useId();

  const initialValues = {
    name: "",
    number: "",
    id: Date.now(),
  };

  const handleSubmit = (values, actions) => {
    addContact(values);
    actions.resetForm();
  };

  const feedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/[0-9]{3}-[0-9]{2}-[0-9]{2}/, {
        message: <span>Invalid password</span>,
      })
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={feedbackSchema}
    >
      <Form className={css.container}>
        <div className={css.innerContainer}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} className={css.input} />
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={css.innerContainer}>
          <label htmlFor={numberId}>Number</label>
          <Field
            type="text"
            name="number"
            id={numberId}
            className={css.input}
          />
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit" className={css.submit}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
