import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./components/contactForm/ContactForm";
import SearchBox from "./components/searchBox/SearchBox";
import ContactList from "./components/contactList/ContactList";
import contacts from "./Contacts.json";

function App() {
  const [contactList, setContactList] = useState(() => {
    const savedObject = window.localStorage.getItem("contacts");

    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }
    return contacts;
  });
  const [filter, setFilter] = useState("");
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contactList));
  }, [contactList]);

  const newContacts = contactList.filter((contactItem) =>
    contactItem.name.toLowerCase().includes(filter.toLowerCase())
  );
  const addContact = (newContact) => {
    setContactList((prevContact) => {
      const add = [...prevContact, newContact];
      window.localStorage.setItem("contacts", JSON.stringify(add));
      return add;
    });
  };
  const delContact = (id) => {
    setContactList((prevContact) => {
      const del = prevContact.filter((contact) => contact.id !== id);
      window.localStorage.setItem("contacts", JSON.stringify(del));
      return del;
    });
  };

  return (
    <>
      <h1 className="h1-title">Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox filter={filter} setFilter={setFilter} />
      <ContactList contacts={newContacts} delContact={delContact} />
    </>
  );
}

export default App;
