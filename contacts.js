const fs = require('fs/promises');
const { nanoid } = require('nanoid');
const path = require('path');

const contactsPath = path.join(__dirname, 'db', 'contacts.json')

async function listContacts() {
    const contactsJSON = await fs.readFile(contactsPath, 'utf-8')
    const parsedContact = JSON.parse(contactsJSON)
    return parsedContact || null;
}

async function getContactById(contactId) {
    const contactsList = await listContacts()
    const contact = contactsList.find(contact => contact.id === contactId)
    return contact || null
}

async function removeContact(contactId) {
    const contactsList = await listContacts()
    const contact = contactsList.find((contact) => contact.id === contactId);
    const filteredContacts = contactsList.filter(contact => contact.id !== contactId)
    fs.writeFile(contactsPath, JSON.stringify(filteredContacts, null, 2));
    return contact || null;
}

 async function addContact(name, email, phone) {
    const contact = {
        id: nanoid(),
        name,
        email,
        phone
    }
     const contactsList = await listContacts()
     const modContacts = [...contactsList,contact]
     fs.writeFile(contactsPath, JSON.stringify(modContacts, null, 2));
     return contact || null;
}

module.exports = { listContacts, getContactById, removeContact, addContact };