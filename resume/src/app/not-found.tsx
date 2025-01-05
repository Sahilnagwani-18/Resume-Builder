// app/not-found.tsx
"use client";
import React from "react";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 to-indigo-400 text-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md space-y-6 animate__animated animate__fadeIn">
        <h1 className="text-7xl font-extrabold text-indigo-600 animate__animated animate__bounceIn">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-gray-700">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-500">
          The page you're looking for might have been moved or no longer exists.
        </p>
        <div className="mt-6">
          <button
            onClick={() => router.push("/dashboard")}
            className="w-full py-3 px-6 text-lg font-semibold text-white bg-indigo-700 rounded-lg shadow-md hover:bg-indigo-800 transform transition-transform duration-200 hover:scale-105 focus:outline-none"
          >
            Go Back to Home
          </button>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-400">
            Or check out our{" "}
            <a
              href="/help"
              className="text-indigo-600 hover:underline"
            >
              Help Center
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
