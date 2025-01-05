"use client";
import React from "react";
import { useSession } from "next-auth/react"; // Import the useSession hook
import Link from "next/link"; // Import Link for navigation
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFileAlt,
  faEdit,
  faPlusCircle,
  faChartBar,
  faHistory,
  faBell,
} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  const { data: session } = useSession(); // Get session data (logged-in status)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className=" shadow-lg text-white py-3 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Profile Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FontAwesomeIcon icon={faUser} className="text-3xl mb-4 text-blue-600" />
            <h2 className="text-xl font-bold mb-4 text-black">Profile</h2>
            {session ? (
              <>
                <p className="text-black">Email: {session.user?.email}</p>
                <p className="text-green-500">Status: Logged In</p>
              </>
            ) : (
              <>
                <p className="text-red-500">Status: Free User</p>
                <Link href="/login">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Previous Resume Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FontAwesomeIcon icon={faFileAlt} className="text-3xl mb-4 text-green-600" />
            <h2 className="text-xl font-bold mb-4 text-black">Previous Resume</h2>
            <Link href="/previous-resume">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
                View Resume
              </button>
            </Link>
          </div>

          {/* Edit/Review Resume Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FontAwesomeIcon icon={faEdit} className="text-3xl mb-4 text-purple-600" />
            <h2 className="text-xl font-bold mb-4 text-black">Edit/Review Resume</h2>
            <Link href="/edit-review-resume">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700">
                Edit Now
              </button>
            </Link>
          </div>

          {/* Create a New Resume Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FontAwesomeIcon icon={faPlusCircle} className="text-3xl mb-4 text-indigo-600" />
            <h2 className="text-xl font-bold mb-4 text-black">Create a New Resume</h2>
            <Link href="/create-resume">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700">
                Get Started
              </button>
            </Link>
          </div>

          {/* View Analytics Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FontAwesomeIcon icon={faChartBar} className="text-3xl mb-4 text-teal-600" />
            <h2 className="text-xl font-bold mb-4 text-black">View Analytics</h2>
            <Link href="/analytics">
              <button className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700">
                Check Now
              </button>
            </Link>
          </div>

          {/* Recent Activities Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FontAwesomeIcon icon={faHistory} className="text-3xl mb-4 text-orange-600" />
            <h2 className="text-xl font-bold mb-4 text-black">Recent Activities</h2>
            <p className="text-black">No recent activity yet.</p>
          </div>

          {/* Notifications Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FontAwesomeIcon icon={faBell} className="text-3xl mb-4 text-yellow-600" />
            <h2 className="text-xl font-bold mb-4 text-black">Notifications</h2>
            <p className="text-black">You have no new notifications.</p>
          </div>
        </div>
      </main>

      {/* Footer Section */}
     
    </div>
  );
}
