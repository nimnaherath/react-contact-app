import { Link } from "react-router"
import App from "../App"
import { useEffect, useState } from "react"
import ContactCollection from "../domain/contacts/collections/ContactCollection"
import GetAllContactIntercator from "../domain/contacts/interactors/GetAllContactIntercator "
import ContactRepository from "../domain/contacts/repositories/ContactRepository"
import Contact from "../domain/contacts/models/contact"
import ContactCard from "../components/ContactCard"

function ListContacts() {

    const [contacts, setContacts] = useState<ContactCollection>()

    useEffect(() => {
        const getAllContactsInteractor = new GetAllContactIntercator(
            new ContactRepository()
        )

        getAllContactsInteractor
            .execute()
            .then((contacts: ContactCollection) => {
                console.log("Contacts fetched successfully:", contacts)

                setContacts(contacts)
            }).catch((error) => {
                console.error("Error fetching contacts:", error)
            })
    }, []);



    return (
        <App>
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Contact Management</h1>
                    <Link to="/create-contact" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-medium transition-colors">
                        Create New Contact
                    </Link>
                </div>
                <div>
                    <div>
                        <h2 className="text-xl font-semibold mt-4">All Contacts</h2>
                        <div className="border-b border-gray-300 mb-4"></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {contacts?.all().map((contact: Contact) => (
                                <div key={contact.id} className="mb-4">
                                    <ContactCard
                                        id={contact.id}
                                        name={contact.name}
                                        email={contact.email}
                                        phone={contact.phone}
                                    />
                                </div>
                            )
                            )}
                        </div>
                    </div>


                </div>
            </div>
        </App>
    )
}

export default ListContacts
