import ContactCollection from "../collections/ContactCollection";
import { ContactRequest } from "../interactors/requests/ContactRequest";
import Contact from "../models/contact";

interface ContactRepositoryContract{
    createContact: (contactRequest: ContactRequest) => Promise<Contact>;
    getAllContacts: () => Promise<ContactCollection>;
}

export default ContactRepositoryContract;