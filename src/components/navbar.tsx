import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { motion, AnimatePresence } from "framer-motion";

interface MenuItem {
  label: string;
  page: string;
}

const MENU_ITEMS: Array<MenuItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Projects",
    page: "projects",
  },
  {
    label: "Contact me",
    page: "contact",
  },
];

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const variants = {
    open: {
      opacity: 1,
      y: 0,
    },
    closed: {
      opacity: 0,
      y: "-100%",
    },
  };

  return (
    <div>
      <button
        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "Close" : "Menu"}
      </button>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black opacity-60 py-6 px-8 rounded-lg shadow-lg z-50"
            initial="closed"
            animate="open"
            exit="closed"
            variants={variants}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center space-y-6">
              {MENU_ITEMS.map((item, idx) => (
                <Link
                  key={idx}
                  to={item.page}
                  className="text-white hover:text-amber-600 transition duration-300 ease-in-out"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
