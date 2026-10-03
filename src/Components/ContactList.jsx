import React from "react";

export default function ContactList({ contactList, setContactList, search }) {
  const filteredContacts = contactList.filter(
    (contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.contact.toString().includes(search),
  );
  return (
    <div className="contact">
      {filteredContacts.map((contact) => (
        <div key={contact.id}>
          <p>{contact.name}</p>
          <p>{contact.contact}</p>
          <button
            onClick={() => {
              setContactList(
                contactList.filter((item) => item.id !== contact.id),
              );
            }}
          >
            Delete
          </button>
        </div>
      ))}
      {contactList.length > 0 && (
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
