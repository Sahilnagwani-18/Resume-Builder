"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";

const registerContainer =
  "flex min-h-screen flex-col items-center justify-center py-16 bg-cover bg-center bg-[url('/images/login.jpeg')]"; // Replace with your image path
const registerForm =
  "backdrop-blur-lg bg-white/30 p-6 rounded shadow-lg w-96 max-w-sm border border-white/20"; // Glass effect
const registerTitle = "text-2xl text-center font-semibold mb-6 text-white";
const registerInput =
  "w-full border border-gray-300 text-gray-700 rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200";
const registerButton =
  "w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out";
const errorMessage = "text-red-600 text-sm mt-2";
const orSeparator = "text-center text-gray-200 mt-4";
const loginLink =
  "block text-center text-blue-200 hover:underline mt-2 transition duration-300 ease-in-out";

const Register = () => {
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!isValidEmail(email)) {
        setError("Email is invalid");
        setIsLoading(false);
        return;
      }

      if (!password || password.length < 8) {
        setError("Password must be at least 8 characters long");
        setIsLoading(false);
        return;
      }

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (res.status === 400) {
        setError("This email is already registered");
        setIsLoading(false);
      } else if (res.status === 200) {
        setError("");
        router.push("/login");
      }
    } catch (err) {
      console.error("Error during registration:", err);
      setError("An error occurred during registration. Please try again.");
      setIsLoading(false);
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={registerContainer}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className={registerForm}
        >
          <h1 className={registerTitle}>Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className={registerInput}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className={registerInput}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className={registerButton}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Register"}
            </button>
            {error && <p className={errorMessage}>{error}</p>}
          </form>
          <div className={orSeparator}>- OR -</div>
          <Link href="/login" className={loginLink}>
            Login with an existing account
          </Link>
        </motion.div>
      </motion.div>
    )
  );
};

export default Register;
