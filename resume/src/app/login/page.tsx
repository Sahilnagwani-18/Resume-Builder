"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";


const loginContainer =
  "flex min-h-screen flex-col items-center justify-center py-16 bg-cover bg-center bg-[url('/images/login.jpeg')]"; // Replace with your image path
const loginForm =
  "backdrop-blur-lg bg-white/30 p-6 rounded shadow-lg w-96 max-w-sm border border-white/20"; // Glass effect
const loginTitle = "text-2xl text-center font-semibold mb-6 text-white";
const loginInput =
  "w-full border border-gray-300 text-gray-700 rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200";
const loginButton =
  "w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out";
const errorMessage = "text-red-600 text-sm mt-2";
const githubButton =
  "w-full bg-gray-800 text-white py-3 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out mt-4";
const orSeparator = "text-center text-gray-200 mt-4";
const registerLink =
  "block text-center text-blue-200 hover:underline mt-2 transition duration-300 ease-in-out";

const Login = () => {
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

      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError("Invalid email or password");
        setIsLoading(false);
      } else {
        setError("");
        router.replace("/dashboard"); // Redirect on success
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("An error occurred during login. Please try again.");
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
        className={loginContainer}
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className={loginForm}
        >
          <h1 className={loginTitle}>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className={loginInput}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className={loginInput}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className={loginButton}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Sign In"}
            </button>
            {error && <p className={errorMessage}>{error}</p>}
          </form>
          <button
            className={githubButton}
            onClick={() => signIn("github")}
          >
            Sign In with Github
          </button>
          <div className={orSeparator}>- OR -</div>
          <Link href="/register" className={registerLink}>
            Register Here
          </Link>
        </motion.div>
      </motion.div>
    )
  );
};

export default Login;
