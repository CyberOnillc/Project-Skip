'use client'
import { revalidatePath } from "next/cache"
import React, { useRef, useState, useEffect } from 'react'
import { redirect } from 'next/navigation'
import { addToSendGrid, contactForm, sendMailHtml } from "@/lib/externalRequest/sendgrid"
import Modal from "./modal"
import ModalMessage from "./ModalMessage"
import { coursesInterested } from "data/sampleData"
import { submit } from "@/app/waitlist/submit"
export default function WaitListForm({ cities }: { cities: string[] }) {
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(true);
  const [message, setMessage] = useState("");
  const form = useRef<HTMLFormElement>(null)
  const [isClient, setIsClient] = useState(false);

  const gender = ['Male', 'Female']
  const ageRange = ['under 18', '18-25', '25-30', '30+']
  const ethinicity = ["Asian", "African-American", "Hispanic"]
  const education = ['High School', 'Under-Graduate', 'Post-graduate']

  useEffect(() => {
    setIsClient(true);
  }, []);


  async function create(formData: FormData) {
    try {
      console.log(formData);
      const response = await submit(formData);

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
      {isClient && (
        <form
          ref={form}
          className="z-30 sm:mx-auto sm:max-w-xl lg:mx-0"
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
                return (
                  <option value={value} key={index}>
                    {value}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-600"
            >
              Interest
            </label>
            <select
              id="interest"
              name="interest"
              required
              className="mt-2 w-full rounded-md border p-3"
              placeholder="What are you interested in learning?"
            >
              {coursesInterested.map((value, index) => (
                <option value={value} key={index}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-600"
            >
              What is your age range?
            </label>
            <select
              id="age"
              name="ageRange"
              required
              className="mt-2 w-full rounded-md border p-3"
              placeholder="What are you interested in learning?"
            >
              <option value={''}  selected disabled className="text-gray-500">Age</option>

              {ageRange.map((value, index) => (
                <option value={value} key={index}>
                  {value}
                </option>
              ))}

            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-600"
            >
              What is your gender?
            </label>
            <select
              id="gender"
              name="gender"
              required
              className="mt-2 w-full rounded-md border p-3"
              placeholder="What are you interested in learning?"
            >
              <option  value={''} selected disabled className="text-gray-500">Gender</option>
              {gender.map((value, index) => (
                <option value={value} key={index}>
                  {value}
                </option>
              ))}
              <option value={'opted-out'} >Opt Out</option>

            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-600"
            >
              What is your highest level of education completed?
            </label>
            <select
              id="edu"
              name="edu"
              required
              className="mt-2 w-full rounded-md border p-3"
              placeholder=""
            >
              <option value={''}  selected disabled className="text-gray-500">Education</option>

              {education.map((value, index) => (
                <option value={value} key={index}>
                  {value}
                </option>
              ))}

            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="ethnicity"
              className="block text-sm font-medium text-gray-600"
            >
              What is your ethnicity?
            </label>
            <select
              id="ethnicity"
              name="ethnicity"
              required
              className="mt-2 w-full rounded-md border p-3 "
              placeholder="What are you interested in learning?"
            >
              <option value={''} selected disabled className="text-gray-500">Ethinicity</option>

              {ethinicity.map((value, index) => (
                <option value={value} key={index}>
                  {value}
                </option>
              ))}
              <option value={'opted-out'} >Opt Out</option>

            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              How did you hear about us
            </label>
            <input
              type="text"
              id="referral"
              name="referral"
              required
              className="mt-2 w-full rounded-md border p-3"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="mb-2 block">
              Do you have any questions or comments for us:
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="foucs:ring-0  rounded-lg w-full border-b-2 bg-transparent p-2  focus:border-b-2 focus:border-none focus:border-[#A91079] focus:outline-none"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <div className="my-7 flex items-center gap-4 dark:text-gray-200">
            <input
              type="checkbox"
              name="emailLetter"
              className="rounded bg-gray-50"
            //checked= {formData.terms}
            />
            <p className="text-gray-800">
              Would you like to receive updates and news about Project SKIP?
            </p>
          </div>
          <div className="my-7 flex items-center gap-4 dark:text-gray-200">
            <input
              type="checkbox"
              name="volunteering"
              className="rounded bg-gray-50"
            //checked= {formData.terms}
            />
            <p className="text-gray-800">Are you interested in volunteering with Project SKIP?</p>
          </div>
          <div className="mt-3 sm:ml-3 sm:mt-0 lg:ml-0">
            <button
              type="submit"
              className="block w-full rounded-md bg-cyan-500 px-4 py-3 font-medium text-white shadow hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Join Waitlist
            </button>
          </div>
        </form>
      )}
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ModalMessage
          onClose={() => setShowModal(false)}
          message={message}
          isSuccess={success}
        ></ModalMessage>
      </Modal>
    </>
  );
}

