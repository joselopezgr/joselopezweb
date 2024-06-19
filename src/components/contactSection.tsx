"use client";
import { FormEvent, useState } from "react";
import { Button } from "@nextui-org/react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";
import InputFields from "./inputFields";
import { BeatLoader } from "react-spinners";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactSection = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submit, setSubmit] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    setLoading(true);
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

    if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
      setSubmit("An error occurred. Please fill in all fields.");
      setTimeout(() => {
        setLoading(false);
        setSubmit("");
      }, 2000);
      return;
    }

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
    setTimeout(() => {
      setLoading(false);
      setSubmit("");
    }, 2000);
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6">
      <div className="my-8 pb-16 md:my-9 md:pb-20 lg:my-14 lg:pb-24 xl:my-16 xl:pb-28">
        <div className="contact-container flex flex-col min-h-[600px] items-center space-y-10 mt-12 justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="">
            <h2 className="text-3xl font-bold text-center">Contact Me</h2>
          </div>
          <form onSubmit={handleSubmit} className="max-w-md w-full border-2 border-gray-500 p-4 rounded">
            <div className="mb-5">
              <InputFields
                type="text"
                labelText="Full Name"
                inputName={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                textarea={false}
              />
            </div>
            <div className="mb-5">
              <InputFields
                type="email"
                labelText="Email"
                inputName={email}
                onChange={(e) => setEmail(e.target.value)}
                textarea={false}
              />
            </div>
            <div className="mb-5">
              <InputFields
                onChange={(e) => setMessage(e.target.value)}
                labelText="Message"
                inputName={message}
                type="text"
                textarea
              />
            </div>
            <Button color="warning" type="submit">
              {loading ? (
                <BeatLoader color="#ffffff" loading={loading} size={10} />
              ) : (
                "Submit"
              )}
            </Button>
          </form>
          {submit && (
            <p
              className={`text-lg text-center ${
                submit.includes("error") ? "text-red-700" : "text-green-700"
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
