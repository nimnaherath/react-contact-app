import Contact from "../models/contact";

class ContactCollection {
  public contacts: Contact[];

  constructor(contacts: Contact[]) {
    this.contacts = contacts;
  }

  public all(): Contact[] {
    return this.contacts;
  }
}

export default ContactCollection;
