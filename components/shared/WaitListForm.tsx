'use client'
import { revalidatePath } from "next/cache"
import React, { useRef, useState , useEffect} from 'react'
import { redirect } from 'next/navigation'
import { addToSendGrid } from "@/lib/externalRequest/sendgrid"
import Modal from "./modal"
import ModalMessage from "./ModalMessage"

export default function WaitListForm({ cities }: { cities: string[] }) {
    const [showModal, setShowModal] = useState(false);
    const [success, setSuccess] = useState(true);
    const [message, setMessage] = useState("");
    const form = useRef<HTMLFormElement>(null)
    const [isClient, setIsClient] = useState(false);


    useEffect(() => {
        setIsClient(true);
    }, []);
    async function create(formData: FormData) {
        try {
            const name = formData.get('name') as string
            const email = formData.get('email') as string
            const city = formData.get('city') as string
            let firstName, lastName = '';
            if (name.split(' ').length > 1) {
                firstName = name.split(' ')[0]
                lastName = name.split(' ')[1];
            } else {
                firstName = name.split(' ')[0]
            }
            const response = await addToSendGrid({ city, email, firstName, lastName })
            //console.log(response)
            if (response === 202) {
                setShowModal(true)
                setSuccess(true)
                setMessage("Added successfully Check your Email")

            } else {
                setShowModal(true)
                setSuccess(false)
                setMessage("Server Error try again later")
            }
            form.current?.reset()


        } catch (error) {
            console.log(error)
            return { message: (error as Error).message }
        }
    }

    return (
        <>
            {isClient && <form
                ref={form}
                className="sm:mx-auto sm:max-w-xl lg:mx-0 z-30"
                action={create}
            >
                {/* Name Field */}
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-600"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="mt-2 w-full rounded-md border p-3"
                        placeholder="Enter your name"

                    />
                </div>
                {/* Email Field */}
                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-600"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-2 w-full rounded-md border p-3"
                        placeholder="Enter your email"
                        suppressHydrationWarning={true}

                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-600"
                    >
                        City
                    </label>
                    <select
                        id="city"
                        name="city"
                        required
                        className="mt-2 w-full rounded-md border p-3"
                        placeholder="Enter City Name"

                    >
                        {cities.map((value, index) => {
                            return <option value={value} key={index}>{value}</option>
                        })}

                    </select>
                </div>
                <div className="mt-3 lg:ml-0 sm:ml-3 sm:mt-0">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-cyan-500 px-4 py-3 font-medium text-white shadow hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                        Join Waitlist
                    </button>
                </div>
            </form>}
            <Modal showModal={showModal} setShowModal={setShowModal} >
                <ModalMessage onClose={() => setShowModal(false)} message={message} isSuccess={success}></ModalMessage>
            </Modal>
        </>
    )
}

