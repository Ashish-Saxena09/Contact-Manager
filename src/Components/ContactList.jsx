import React from "react";

export default function ContactList({ Contacts, setContactList }) {
  return (
    <div className="contact">
      {Contacts.map((contact) => (
        <div key={contact.id}>
          <p>{contact.name}</p>
          <p>{contact.contact}</p>
          <button
            onClick={() => {
              setContactList(Contacts.filter((item) => item.id !== contact.id));
            }}
          >
            Delete
          </button>
        </div>
      ))}
      {Contacts.length > 0 && (
        <button
          onClick={() => {
            setContactList([]);
          }}
        >
          Clear
        </button>
      )}
    </div>
  );
}
