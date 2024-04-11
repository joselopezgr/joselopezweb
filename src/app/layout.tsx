"use client";
import "./globals.css";
import Footer from "@/components/footer";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SplashScreen } from "../components/SplashScreen";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

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
              <NextUIProvider>
                <ThemeProvider enableSystem={true} attribute="class">
                  {children}
                </ThemeProvider>
              </NextUIProvider>
            </motion.div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}
