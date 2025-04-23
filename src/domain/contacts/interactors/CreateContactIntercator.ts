import ContactRepository from "../repositories/ContactRepository";
import {
  ContactRequest,
  ContactRequestSchema,
} from "./requests/ContactRequest";

class CreateContactIntercator {
  constructor(protected contactRepository: ContactRepository) {}

  public async execute(contactRequst: ContactRequest) {
    this.validateRequest(contactRequst);

    return this.contactRepository.createContact(contactRequst);
  }

  protected validateRequest(contactRequst: ContactRequest) {
    return ContactRequestSchema.safeParse(contactRequst);
  }
}

export default CreateContactIntercator;
