"use client"; // Required for React hooks in Next.js 13+

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthForm({ isLoginMode }: { isLoginMode: boolean }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Only for Register
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoginMode) {
      console.log("Login:", { email, password });
    } else {
      console.log("Register:", { email, password, confirmPassword });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        {/* Website Name */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-indigo-700">
            Astroverse
          </h1>
          <p className="text-gray-600 mt-2">
            {isLoginMode ? "Welcome back!" : "Join the Astroverse family!"}
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          {!isLoginMode && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-medium mb-2"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            {isLoginMode ? "Login" : "Register"}
          </button>
        </form>

        {/* Toggle Option */}
        <div className="text-center mt-4">
          <p className="text-gray-700">
            {isLoginMode
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <button
              onClick={() =>
                router.push(isLoginMode ? "/register" : "/login")
              }
              className="text-indigo-500 hover:text-indigo-600 font-medium underline"
            >
              {isLoginMode ? "Register here" : "Login here"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
