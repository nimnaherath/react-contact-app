import Contact from "../models/contact";

interface ContactRepositoryContract{
    createContact: (contact: Contact) => Promise<Contact>;
}

export default ContactRepositoryContract;