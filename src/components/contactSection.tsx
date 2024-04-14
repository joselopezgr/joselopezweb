"use client";
import { FormEvent, useState } from "react";
import { Button } from "@nextui-org/react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState("");

 const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      return;
    }

    const gRecaptchaToken = await executeRecaptcha("contact");

    const data: FormData = {
      name,
      email,
      message,
    };

    try {
      const response = await axios.post("/api/email", {
        ...data,
        gRecaptchaToken,
      });

      if (response.data.success) {
        setSubmit(response.data.message);
        setName(name);
        setEmail(email);
        setMessage(message);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      setSubmit("An error occurred. Please try again later.");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6">
      <div className="my-12 pb-16 md:my-16 md:pb-20 lg:my-20 lg:pb-24 xl:my-24 xl:pb-28">
        <div className="contact-container flex flex-col space-y-10 mt-12 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <form onSubmit={handleSubmit} className="max-w-md w-full">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-neutral"
              >
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full rounded-md border border-gray-300 opacity-80 py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-neutral"
              >
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@domain.com"
                className="w-full rounded-md border border-gray-300 py-3 opacity-80 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-neutral"
              >
                Message
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-gray-300 opacity-80 py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
              ></textarea>
            </div>
            <Button color="warning" type="submit">
              Submit
            </Button>
          </form>
          {submit && (
            <p
              className={`text-lg text-center ${
                submit.includes("error") ? "text-red-500" : "text-green-500"
              }`}
            >
              {submit}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
