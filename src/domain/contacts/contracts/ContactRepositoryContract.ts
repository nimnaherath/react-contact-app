import { ContactRequest } from "../interactors/requests/ContactRequest";
import Contact from "../models/contact";

interface ContactRepositoryContract {
  createContact: (contactRequest: ContactRequest) => Promise<Contact>;
}

export default ContactRepositoryContract;
