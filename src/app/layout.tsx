"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SplashScreen } from "../components/others/SplashScreen";
import { NextUIProvider } from "@nextui-org/react";
import GoogleCaptchaWrapper from "@/components/googleCaptcha/googleCaptchaWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showSplashScreen, setShowSplashScreen] = useState(false);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  useEffect(() => {
    if (!localStorage.getItem('splashScreenShown')) {
      setShowSplashScreen(true);
      localStorage.setItem('splashScreenShown', 'true');
    }
  }, []);

  return (
    <html lang="en">
      <body className={`root-body overflow-auto`}>
        {" "}
        <AnimatePresence mode="wait">
          {isLoading && isHome ? (
            // Wrap SplashScreen in motion.div to apply animations
            <motion.div
              key="splash-screen"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
            <SplashScreen finishedLoading={() => setIsLoading(false)} />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-screen overflow-visible"
            >
              <GoogleCaptchaWrapper>
                <NextUIProvider>{children}</NextUIProvider>
              </GoogleCaptchaWrapper>
            </motion.div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}
