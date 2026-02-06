"use client";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import GoogleCaptchaWrapper from "@/components/googleCaptcha/googleCaptchaWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="root-body overflow-x-hidden">
        <NextUIProvider>
          <GoogleCaptchaWrapper>{children}</GoogleCaptchaWrapper>
        </NextUIProvider>
      </body>
    </html>
  );
}