import ContactCollection from "../collections/ContactCollection";
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

  async getAllContacts(): Promise<ContactCollection> {
    return new ContactCollection([
      new Contact("1", "John Doe", "john.doe@example.com", "1234567890"),
      new Contact("2", "Jane Smith", "jane.smith@example.com", "2345678901"),
      new Contact("3", "Michael Johnson", "michael.j@example.com", "3456789012"),
      new Contact("4", "Emily Brown", "emily.b@example.com", "4567890123"),
      new Contact("5", "William Davis", "william.d@example.com", "5678901234"),
      new Contact("6", "Sarah Wilson", "sarah.w@example.com", "6789012345"),
      new Contact("7", "James Taylor", "james.t@example.com", "7890123456"),
      new Contact("8", "Emma Anderson", "emma.a@example.com", "8901234567"),
      new Contact("9", "Robert Martin", "robert.m@example.com", "9012345678"),
      new Contact("10", "Olivia Clark", "olivia.c@example.com", "0123456789"),
      new Contact("11", "David White", "david.w@example.com", "1122334455"),
      new Contact("12", "Sophia Lee", "sophia.l@example.com", "2233445566"),
      new Contact("13", "Daniel Moore", "daniel.m@example.com", "3344556677"),
      new Contact("14", "Isabella King", "isabella.k@example.com", "4455667788"),
      new Contact("15", "Joseph Wright", "joseph.w@example.com", "5566778899"),
      new Contact("16", "Ava Scott", "ava.s@example.com", "6677889900"),
      new Contact("17", "Thomas Green", "thomas.g@example.com", "7788990011"),
      new Contact("18", "Mia Baker", "mia.b@example.com", "8899001122"),
      new Contact("19", "Christopher Hall", "chris.h@example.com", "9900112233"),
      new Contact("20", "Charlotte Adams", "charlotte.a@example.com", "0011223344")
    ]);
  }
}

export default ContactRepository;
