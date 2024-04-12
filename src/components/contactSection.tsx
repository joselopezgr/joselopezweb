"use client";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { FC, useState } from "react";
import { Button } from "@nextui-org/react";
import axios from "axios";
import GoogleCaptchaWrapper from "./googleCaptchaWrapper";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const WrappedContactSection: FC = () => {
  return(
  <GoogleCaptchaWrapper>
    <ContactSection />
  </GoogleCaptchaWrapper>
)}

const ContactSection: FC = () => {
  // const { register, handleSubmit } = useForm<FormData>();

  // function onSubmit(data: FormData) {
  //   sendEmail(data);
  // }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [notification, setNotification] = useState('');

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmitForm = function (e: any) {
    e.preventDefault();
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not available yet");
      setNotification(
        "Execute recaptcha not available yet likely meaning key not set"
      );
      return;
    }
    executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
      submitEnquiryForm(gReCaptchaToken);
    });
  };

  const submitEnquiryForm = (gReCaptchaToken : string) => {
    async function goAsync() {
      const response = await axios({
        method: "post",
        url: "/api/email",
        data: {
          firstName: name,
          email: email,
          message: message,
          gRecaptchaToken: gReCaptchaToken,
        },
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });

      if (response?.data?.success === true) {
        setNotification(`Success with score: ${response?.data?.score}`);
      } else {
        setNotification(`Failure with score: ${response?.data?.score}`);
      }
    }
    goAsync().then(() => {}); // suppress typescript error
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6">
      <div className="my-12 pb-16 md:my-16 md:pb-20 lg:my-20 lg:pb-24 xl:my-24 xl:pb-28">
        <div className="contact-container flex flex-col space-y-10 mt-12 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <form onSubmit={handleSubmitForm} className="max-w-md w-full">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-neutral"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e?.target?.value)}
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
                name="email"
                value={email}
                onChange={(e) => setEmail(e?.target?.value)}
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
                name="message"
                value={message}
                onChange={(e) => setMessage(e?.target?.value)}
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-gray-300 opacity-80 py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
              ></textarea>
            </div>
              <Button color="warning" type="submit">Submit</Button>
              {notification && <p className="mt-3 text-info">{notification}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default WrappedContactSection;