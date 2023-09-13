"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navigation.module.css';
import { useRouter } from 'next/router';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const router = useRouter();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`${styles.navigation} bg-gray-140`}>
      <div className={`container mx-auto p-4 flex justify-between items-center`}>
        <div className="flex items-center space-x-4">
          <Link href="/">
            <strong className={`text-2xl font-bold ${styles.logoLink}`}>Last-STEM</strong>
          </Link>
        </div>

        <div className="hidden md:flex space-x-4">
          <ul className={`flex space-x-16 text-gray-600`}>
            <li>
              <Link href="/">
                <span
                  className={`${
                    useRouter.pathname === '/' ? styles.activeNavLink : styles.navLink
                  }`}
                >
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <span
                  className={`${
                    useRouter.pathname === '/pricing' ? styles.activeNavLink : styles.navLink
                  }`}
                >
                  Pricing
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span
                  className={`${
                    useRouter.pathname === '/about' ? styles.activeNavLink : styles.navLink
                  }`}
                >
                  About Us
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span
                  className={`${
                    useRouter.pathname === '/contact' ? styles.activeNavLink : styles.navLink
                  }`}
                >
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>

      <div className={styles.buttons}>
      <Link href="/login">
        <span className={`hidden lg:inline-block ${styles.loginButton}`}>
          Login
        </span>
      </Link>
      <Link href="/signup">
        <span className={`hidden lg:inline-block ${styles.signupButton}`}>
          Signup
        </span>
      </Link>
    </div>


        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`${
              mobileMenuOpen ? 'text-blue-600' : 'text-gray-600'
            } hover:text-blue-600 focus:outline-none`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className={`container mx-auto p-4 mt-2 md:hidden bg-white`}>
          <li>
            <Link href="/">
              <span
                className={`block py-2 ${
                  useRouter.pathname === '/' ? 'text-blue-600' : 'text-gray-600'
                } hover:text-blue-600`}
              >
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/pricing">
              <span
                className={`block py-2 ${
                  useRouter.pathname === '/pricing' ? 'text-blue-600' : 'text-gray-600'
                } hover:text-blue-600`}
              >
                Pricing
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span
                className={`block py-2 ${
                  useRouter.pathname === '/about' ? 'text-blue-600' : 'text-gray-600'
                } hover:text-blue-600`}
              >
                About Us
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span
                className={`block py-2 ${
                  useRouter.pathname === '/contact' ? 'text-blue-600' : 'text-gray-600'
                } hover:text-blue-600`}
              >
                Contact
              </span>
            </Link>
          </li>
          {/* Login and Signup Buttons */}
          <li>
            <Link href="/login">
              <span
                className={`block py-2 ${
                  useRouter.pathname === '/login' ? 'text-blue-600' : 'text-gray-600'
                } hover:text-blue-600`}
              >
                Login

                </span>
            </Link>
          </li>
          <li>
            <Link href="/signup">
              <span
                className={`block py-2 ${
                  useRouter.pathname === '/signup' ? 'text-blue-600' : 'text-gray-600'
                } hover:text-blue-600`}
              >
                Signup
              </span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;

             
