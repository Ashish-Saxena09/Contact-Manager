import React, { useState } from "react";
import ContactList from "./ContactList";

export default function Contacts() {
  const [contactList, setContactList] = useState([]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  return (
    <div className="container">
        <h1>Contact Manager</h1>
      <input
        type="text"
        placeholder="Write a contact name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        maxLength={10}
        placeholder="Write a contact number"
        value={contact}
        onChange={(e) => {
          setContact(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (name.trim() === "" || contact <= 0) {
            alert("Fill the credentials");
            return;
          }
          const newContacts = {
            id: Date.now(),
            name: name,
            contact: Number(contact),
          };
          setContactList([...contactList, newContacts]);
          setName("");
          setContact("");
        }}
      >
        Add Conatct
      </button>
      <ContactList Contacts={contactList} setContactList={setContactList} />
    </div>
  );
}
