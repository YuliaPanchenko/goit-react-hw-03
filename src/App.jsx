import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import contactList from "../src/data/contactList.json";

function App() {
  const onAddContact = (contact) => {
    console.log(contact);
  };
  return (
    <>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox />
      <ContactList contactList={contactList} />
    </>
  );
}

export default App;
