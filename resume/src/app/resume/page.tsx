"use client";
import Link from "next/link";

export default function Resume() {
  return (
    <div className="flex flex-col min-h-screen text-gray-700">
      {/* Header */}
      <header className="bg-white bg-opacity-70 py-4 shadow" style={{ backdropFilter: "blur(10px)" }}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">My Website</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-10 px-6 text-white backdrop-blur-lg bg-black/30">
          {/* Page Header */}
          <h1 className="text-3xl font-bold mb-4">Resume Management</h1>
          <p className="text-lg mb-6">
            Manage your resumes, create new ones, and preview or edit existing resumes with ease.
          </p>

          {/* Resume Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Create Resume */}
            <div className="p-6 border border-white rounded-lg shadow-lg bg-white/30 hover:bg-white/50 transition duration-300 transform hover:scale-105 backdrop-blur-none">
              <h2 className="text-2xl font-bold mb-2">Create Resume</h2>
              <p className="text-sm text-gray-200 mb-4">
                Start building your resume with our easy-to-use resume builder.
              </p>
              <Link
                href="/resume/create"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-teal-400 to-teal-500 text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-teal-500 hover:to-teal-400"
              >
                Create Now
              </Link>
            </div>

            {/* Edit Resume */}
            <div className="p-6 border border-white rounded-lg shadow-lg bg-white/30 hover:bg-white/50 transition duration-300 transform hover:scale-105 backdrop-blur-none">
              <h2 className="text-2xl font-bold mb-2">Edit Resume</h2>
              <p className="text-sm text-gray-200 mb-4">
                Edit an existing resume with updated information or formatting.
              </p>
              <Link
                href="/resume/edit/1"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-blue-400"
              >
                Edit Now
              </Link>
            </div>

            {/* Preview Resume */}
            <div className="p-6 border border-white rounded-lg shadow-lg bg-white/30 hover:bg-white/50 transition duration-300 transform hover:scale-105 backdrop-blur-none">
              <h2 className="text-2xl font-bold mb-2">Preview Resume</h2>
              <p className="text-sm text-gray-200 mb-4">
                Preview your resume before finalizing it to ensure everything looks great.
              </p>
              <Link
                href="/resume/preview"
                className="inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-400 to-indigo-500 text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:from-indigo-500 hover:to-indigo-400"
              >
                Preview Now
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
    </div>
  );
}
