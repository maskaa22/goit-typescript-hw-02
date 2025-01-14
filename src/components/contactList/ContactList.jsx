import css from "./ContactList.module.css";
import Contact from "../contact/Contact";

export default function ContactList({ contacts, delContact }) {
  return (
    <div className={css.list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} delContact={delContact} />
      ))}
    </div>
  );
}
