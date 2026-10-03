# Contact Manager

A simple Contact Manager made with React.

This project lets you add contacts, delete individual contacts, and clear the complete contact list.

## Features

- Add a contact
- Delete a contact
- Clear all contacts
- Search functionality
- Contact name and phone number validation
- Phone number limited to 10 digits
- Simple and responsive UI

## Tech Used

- React
- JavaScript
- CSS
- Vite

## Project Structure

```text
src/
│
├── Components/
│   ├── Contacts.jsx
│   └── ContactList.jsx
│
├── App.jsx
├── main.jsx
└── Contacts.css
```

## How It Works

The contact list is stored in the `Contacts` component using `useState`.

`ContactList` receives the contact list and functions from `Contacts` through props.

When a contact is added, it is stored in the contact list.

The Delete button removes one contact, while the Clear button removes all contacts.

## Run Locally

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal.

## Purpose

This project was made for practicing React basics, especially:

- useState
- Props
- map()
- filter()
- Conditional rendering
- Updating arrays in React
- Basic form handling
