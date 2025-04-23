import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactRequest, ContactRequestSchema } from "../domain/contacts/interactors/requests/ContactRequest";
import CreateContactIntercator from "../domain/contacts/interactors/CreateContactIntercator";
import ContactRepository from "../domain/contacts/repositories/ContactRepository";
import { useNavigate } from "react-router";
import { NavigateFunction } from "react-router";
import toast from 'react-hot-toast';
import App from "../App";


function CreateContact() {

    const navigate: NavigateFunction = useNavigate()


    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm<ContactRequest>({
        resolver: zodResolver(ContactRequestSchema),
    })

    const onSubmit: SubmitHandler<ContactRequest> = async (
        contactRequest: ContactRequest,
    ) => {
        try {
            const createPostInteractor = new CreateContactIntercator(
                new ContactRepository(),
            )
            await createPostInteractor.execute(contactRequest)

            navigate("/")

            toast.success("Contact created successfully")

        } catch {
            console.log("Error creating contact")
        }
    }

    return (
        <App>
            <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 w-1/3 bg-gray-100 p-8 mx-auto">
                    <div className="relative px-4 py-10 bg-white shadow rounded-3xl sm:p-10">
                        <div className="mx-auto">
                            <div className="flex items-center space-x-5">
                                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                    <h1 className="leading-relaxed">Create Contact</h1>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="mb-4 space-y-2">
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="name"
                                        >
                                            Name
                                        </label>
                                        <input
                                            {...register("name")}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="name"
                                            type="text"
                                            placeholder="Enter name"
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-xs italic">
                                                {errors.name.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className="mb-4 space-y-2">
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            {...register("email")}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            placeholder="Enter email"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-xs italic">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className="mb-6 space-y-2">
                                        <label
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                            htmlFor="phone"
                                        >
                                            Phone
                                        </label>
                                        <input
                                            {...register("phone")}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="phone"
                                            type="tel"
                                            placeholder="Enter phone number"
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-xs italic">
                                                {errors.phone.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className="pt-4">
                                        <button
                                            disabled={isSubmitting}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-150 ease-in"
                                            type="submit"
                                        >
                                            Create Contact
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    );
}

export default CreateContact;
