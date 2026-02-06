"use client";

import { FormEvent, useMemo, useState } from "react";
import { Button, Card, CardBody, Divider } from "@nextui-org/react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";
import InputFields from "./inputFields";
import { BeatLoader } from "react-spinners";
import { HiArrowRight } from "react-icons/hi";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type Status =
  | { type: "idle" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const ContactSection = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormData, string>> = {};

    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim()) e.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Please enter a message.";

    return e;
  }, [form]);

  const hasErrors = Object.keys(errors).length > 0;

  const updateField = (key: keyof FormData) => (e: any) => {
    setStatus({ type: "idle" }); // clear status as soon as user edits
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate first (fast)
    if (hasErrors) {
      setStatus({ type: "error", message: "Please fix the highlighted fields." });
      return;
    }

    // Then do recaptcha
    if (!executeRecaptcha) {
      setStatus({
        type: "error",
        message: "reCAPTCHA isn’t ready. Please refresh and try again.",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: "idle" });

    try {
      const gRecaptchaToken = await executeRecaptcha("contact");

      const response = await axios.post("/api/email", {
        ...form,
        gRecaptchaToken,
      });

      if (response.data?.success) {
        setStatus({ type: "success", message: response.data.message ?? "Sent!" });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: response.data?.message ?? "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4">
      <div className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left copy */}
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-2">
              Contact <HiArrowRight />
            </h2>
            <p className="mt-3 opacity-80 max-w-md">
              Want to chat about full-stack work, identity, or building reliable services?
              Send me a message and I’ll get back to you.
            </p>

            {/* Status */}
            <div
              className="mt-6 min-h-[28px]"
              aria-live="polite"
              aria-atomic="true"
            >
              {status.type !== "idle" ? (
                <p
                  className={`text-sm font-medium ${
                    status.type === "error" ? "text-red-700" : "text-green-700"
                  }`}
                >
                  {status.message}
                </p>
              ) : null}
            </div>
          </div>

          {/* Form */}
          <Card className="rounded-2xl border border-white/10">
            <CardBody className="p-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <InputFields
                    type="text"
                    labelText="Full Name"
                    inputName={form.name}
                    onChange={updateField("name")}
                    textarea={false}
                  />
                  {errors.name ? (
                    <p className="mt-1 text-sm text-red-700">{errors.name}</p>
                  ) : null}
                </div>

                <div>
                  <InputFields
                    type="email"
                    labelText="Email"
                    inputName={form.email}
                    onChange={updateField("email")}
                    textarea={false}
                  />
                  {errors.email ? (
                    <p className="mt-1 text-sm text-red-700">{errors.email}</p>
                  ) : null}
                </div>

                <div>
                  <InputFields
                    type="text"
                    labelText="Message"
                    inputName={form.message}
                    onChange={updateField("message")}
                    textarea
                  />
                  {errors.message ? (
                    <p className="mt-1 text-sm text-red-700">{errors.message}</p>
                  ) : null}
                </div>

                <Divider />

                <Button
                  color="warning"
                  type="submit"
                  className="font-semibold"
                  isDisabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <BeatLoader color="#ffffff" loading size={8} />
                      Sending…
                    </span>
                  ) : (
                    "Send message"
                  )}
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;