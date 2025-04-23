import Contact from "../models/contact";

class ContactCollection {
  public contacts: Contact[];

  constructor(contacts: Contact[]) {
    this.contacts = contacts;
  }
}

export default ContactCollection;
