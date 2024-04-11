"use client";

import { FC } from "react";
import { sendEmail } from "@/utils/sendEmail";
import { useForm } from "react-hook-form";
import { Fade } from "react-awesome-reveal";
import { Button } from "@nextui-org/react";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactSection: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6">
      <div className="my-12 pb-16 md:my-16 md:pb-20 lg:my-20 lg:pb-24 xl:my-24 xl:pb-28">
        <div className="contact-container flex flex-col space-y-10 mt-12 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-md w-full">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-neutral"
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-md border border-gray-300 opacity-80 py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register("name", { required: true })}
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
                placeholder="example@domain.com"
                className="w-full rounded-md border border-gray-300 py-3 opacity-80 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register("email", { required: true })}
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
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-gray-300 opacity-80 py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md"
                {...register("message", { required: true })}
              ></textarea>
            </div>
            <div>
              <Button color="warning">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
