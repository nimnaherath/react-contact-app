import ContactRepository from "../repositories/ContactRepository";

class GetAllContactIntercator {
  constructor(protected contactRepository: ContactRepository) {}

  public async execute() {
    return this.contactRepository.getAllContacts();
  }
}

export default GetAllContactIntercator;
