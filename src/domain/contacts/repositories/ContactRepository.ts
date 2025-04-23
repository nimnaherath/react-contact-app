import ContactRepositoryContract from "../contracts/ContactRepositoryContract";
import Contact from "../models/contact";

class ContactRepository implements ContactRepositoryContract {
  createContact = async (contact: Contact): Promise<Contact> => {
    return contact;
  };
}

export default ContactRepository;
