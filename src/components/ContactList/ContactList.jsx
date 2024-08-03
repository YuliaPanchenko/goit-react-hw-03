import React from "react";
import css from "../ContactList/ContactList.module.css";
import { Contact } from "../Contact/Contact";

const ContactList = ({ contactList }) => {
  return (
    <ul className={css.contactList}>
      {contactList.map((contact) => {
        return (
          <li className={css.contactItem} key={contact.id}>
            <Contact name={contact.name} number={contact.number} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
