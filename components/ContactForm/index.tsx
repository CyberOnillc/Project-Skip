'use client'
import { AlertCircle, Mail, PlaneIcon, Send } from "lucide-react";
import React, { useEffect, useState } from 'react';
import { LoadingCircle } from "../shared/icons";
import Balancer from "react-wrap-balancer";
import { coursesInterested } from "data/sampleData";
function ContactForm() {
  const [showForm, setShowForm] = useState(true);
  const [showThanks, setShowThanks] = useState(false);
  const [showError, setShowError] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]); // Use an array of strings to store selected interests
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const handleInterestClick = (interest: string) => {
    // Check if the interest is already selected, if yes, remove it; otherwise, add it.
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(
        selectedInterests.filter((item) => item !== interest),
      );
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Convert the array of selected interests to a comma-separated string
    const selectedInterestString = selectedInterests.join(", ");
alert( selectedInterestString);
    console.log("Form submitted:", {
      selectedInterest: selectedInterestString,
      name,
      email,
      message,
    });

    if (name && email && message) {
      let res = await fetch(`/api/marketing/contact`, {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          subject: selectedInterestString, // Use the converted string here
          message,
        }),
      });
      setShowForm(false);
      if (res.status === 200) {
        setShowThanks(true);
      } else {
        setShowError(true);
      }
    }
  };


  return (
    <div className="mx-auto h-fit w-full rounded-lg bg-neutral-300 p-6 shadow-lg">
      {showForm && isClient && (
        <form
          className="flex h-full w-full flex-col justify-center p-6 lg:block"
          onSubmit={handleSubmit}
        >
          <div className="mb-4 h-2/6">
            <p className="mb-2 h-1/6 text-center font-bold lg:text-left">
              I am interested in ...
            </p>
            <div className="flex h-5/6 flex-wrap justify-center gap-5 lg:justify-start">
              <div className="flex flex-wrap justify-start gap-2">
                {coursesInterested.map((interest, index) => (
                  <button
                    key={index}
                    onClick={() => handleInterestClick(interest)}
                    className={`h-fit w-fit rounded-lg border-2 border-purple-800 border-opacity-30 px-4 py-2 focus:outline-none ${
                      selectedInterests.includes(interest)
                        ? "bg-[#A91079] text-white"
                        : "bg-transparent text-purple-800 text-opacity-30 hover:bg-blue-200"
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mb-4 h-1/6">
            <label
              htmlFor="name"
              className="text-sm text-gray-500 transition-all duration-300 ease-in-out"
            >
              Name :
            </label>
            <input
              type="text"
              id="name"
              className="autofill-neutral w-full  border-0 border-b-2 bg-transparent p-2 outline-none  ring-0 focus:border-[#A91079] focus:border-transparent focus:outline-none"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block">
              Your Email:
            </label>
            <input
              type="email"
              id="email"
              className="autofill-neutral w-full  border-0 border-b-2 bg-transparent p-2 ring-0  focus:border-[#A91079] focus:border-transparent focus:outline-none"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="mb-2 block">
              Message:
            </label>
            <textarea
              id="message"
              rows={4}
              className="foucs:ring-0 autofill-neutral  w-full border-0 border-b-2 bg-transparent p-2 focus:border-b-2 focus:border-none focus:border-[#A91079] focus:outline-none"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center rounded-lg bg-[#A91079] px-8 py-4 text-white hover:bg-blue-900"
          >
            <Send color="white" className="mx-2" />
            <span className="mx-2">Send Message</span>
          </button>
        </form>
      )}

      {!showForm && !showThanks && !showError && (
        <>
          <LoadingCircle></LoadingCircle>
        </>
      )}

      {showThanks && (
        <>
          <div className="flex w-full flex-col items-center justify-center p-10 text-center">
            <Mail />
            <Balancer>Check you email</Balancer>
          </div>
        </>
      )}

      {showError && (
        <>
          <div className="flex w-full flex-col items-center justify-center p-10 text-center">
            <AlertCircle color="red" />
            <Balancer>An error occurred</Balancer>
          </div>
        </>
      )}
    </div>
  );
}

export default ContactForm;
