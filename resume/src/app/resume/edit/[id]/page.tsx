"use client"; // Required for React hooks in Next.js 13+

import { useRouter } from "next/router";

export default function EditResume() {
  const router = useRouter();
  const { id } = router.query;

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
            Edit Resume: {id}
          </h1>
          <p className="text-gray-700 text-center text-lg">
            Form to edit resume data will go here.
          </p>
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
