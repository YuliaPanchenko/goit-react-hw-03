import React from "react";
import { Formik, Form, Field } from "formik";
import css from "../ContactForm/ContactForm.module.css";

const INITIAL_VALUES = {
  newContact: "",
  phoneNumber: "",
};

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    const contactObj = {
      name: values.newContact,
      number: values.phoneNumber,
    };

    onAddContact(contactObj);
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className={css.formWrap}>
      <h1>Phonebook</h1>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label className={css.label}>
            <span className={css.phoneName}>Name</span>
            <Field
              className={css.field}
              type="text"
              name="newContact"
              placeholder=""
              required
            />
          </label>
          <label className={css.label}>
            <span className={css.phoneName}>Number</span>
            <Field
              className={css.field}
              type="tel"
              name="phoneNumber"
              placeholder=""
              required
            />
          </label>
          <button className={css.submitBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
