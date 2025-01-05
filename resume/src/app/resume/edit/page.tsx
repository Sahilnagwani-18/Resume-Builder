"use client"; // Required for React hooks in Next.js 13+

import { useState } from "react";
import { useRouter } from "next/router";

export default function EditResume() {
  const [id, setId] = useState("");
  const router = useRouter();

  const handleNavigate = () => {
    if (id) {
      router.push(`/resume/edit/${id}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-indigo-600 text-white py-4 shadow">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-xl font-bold">My Website</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100">
        <div className="max-w-xl mx-auto py-10">
          <h1 className="text-4xl font-bold text-indigo-600 text-center mb-6">
            Enter ID to Edit Resume
          </h1>
          <div className="text-center">
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter Resume ID"
              className="px-4 py-2 border border-gray-300 rounded-md"
            />
            <button
              onClick={handleNavigate}
              className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700"
            >
              Go to Edit
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">© 2024 My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
