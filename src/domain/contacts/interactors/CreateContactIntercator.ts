import ContactRepository from "../repositories/ContactRepository";

class CreateContactIntercator {
  constructor(protected contactRepository: ContactRepository) {}

  public async execute() {}
}

export default CreateContactIntercator;
