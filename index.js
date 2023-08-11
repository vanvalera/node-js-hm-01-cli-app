const argv = require("yargs").argv;
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts().then((contacts) =>
        console.log("List of contacts:", contacts)
      );
      break;

    case "get":
      if (id) {
        getContactById(id).then((contact) => {
          if (contact) {
            console.log("Found contact by ID:", contact);
          } else {
            console.log("Contact not found");
          }
        });
      } else {
        console.log("Please provide a valid ID");
      }
      break;

    case "add":
      if (name && email && phone) {
        addContact(name, email, phone).then((newContact) =>
          console.log("New contact added:", newContact)
        );
      } else {
        console.log("Please provide valid name, email, and phone");
      }
      break;

    case "remove":
      if (id) {
        removeContact(id).then((removedContact) => {
          if (removedContact) {
            console.log("Removed contact:", removedContact);
          } else {
            console.log("Contact not found");
          }
        });
      } else {
        console.log("Please provide a valid ID");
      }
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
