import ContactRepositoryContract from "../contracts/ContactRepositoryContract";
import { ContactRequest } from "../interactors/requests/ContactRequest";
import Contact from "../models/contact";

class ContactRepository implements ContactRepositoryContract {
  async createContact(contactRequest: ContactRequest): Promise<Contact> {
    return new Contact(
      "1",
      contactRequest.name,
      contactRequest.email,
      contactRequest.phone
    );
  }
}

export default ContactRepository;
