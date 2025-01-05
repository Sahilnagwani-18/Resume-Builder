"use client";
import Link from "next/link";
import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faBlog,
  faBriefcase,
  faInfoCircle,
  faEnvelope,
  faShieldAlt,
  faFileContract,
  faQuestionCircle,
  faHandsHelping,
  faBars,
  faTimes,
  faSignOutAlt, // Logout icon
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const { data: session } = useSession(); // Get the session data (user info)
  const router = useRouter(); // Initialize the router
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  const handleLogout = async () => {
    await signOut({ redirect: false }); // Sign out without automatic redirect
    router.push("/login"); // Redirect to the login page after signing out
  };

  const menuItems = [
    { name: "Resume", icon: faFileAlt, link: "/resume" },
    { name: "Blog", icon: faBlog, link: "/blog" },
    { name: "Careers", icon: faBriefcase, link: "/careers" },
    { name: "About", icon: faInfoCircle, link: "/about" },
    { name: "Contact", icon: faEnvelope, link: "/contact" },
    { name: "Privacy", icon: faShieldAlt, link: "/privacy" },
    { name: "Terms", icon: faFileContract, link: "/terms" },
    { name: "FAQs", icon: faQuestionCircle, link: "/faqs" },
    { name: "Help", icon: faHandsHelping, link: "/help" },
  ];

  return (
    <nav className="bg-cover bg-center backdrop-blur-md text-white py-2 shadow-lg relative">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <div className="bg-white text-purple-600 px-4 py-2 rounded-lg shadow-md">
            <span className="text-xl font-semibold">Unified</span>
          </div>
          
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl lg:hidden focus:outline-none"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        {/* Navbar Links */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex space-y-4 lg:space-y-0 lg:space-x-6 items-center mt-4 lg:mt-0 text-sm font-medium`}
        >
          {menuItems.map((item, index) => (
            <li key={index} className="flex items-center">
              <FontAwesomeIcon icon={item.icon} className="mr-2" />
              <Link
                href={item.link}
                className="text-white hover:text-gray-200 transition duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}

          {/* Log Out Button (Only when logged in) */}
          {session && (
            <li>
              <button
                onClick={handleLogout}
                className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition duration-300 transform hover:scale-105"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
               
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
