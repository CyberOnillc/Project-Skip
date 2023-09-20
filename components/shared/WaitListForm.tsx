import { addToMailChimp } from "@/lib/externalRequest/mailChimp"
import { revalidatePath } from "next/cache"
import React from 'react'
import { redirect } from 'next/navigation'
export default function WaitListForm({ cities }: { cities: string[] }) {
    async function create(formData: FormData) {
        'use server'
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
            console.log(name, email, city)
            await addToMailChimp({ city, email, firstName, lastName })
        } catch (error) {
            console.log(error)
            return { message: (error as Error).message }
        }
    }

    return (
        <>
            <form
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
                <div className="mt-3 sm:ml-3 sm:mt-0">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-cyan-500 px-4 py-3 font-medium text-white shadow hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                        Join Waitlist
                    </button>
                </div>
            </form>
        </>
    )
}

