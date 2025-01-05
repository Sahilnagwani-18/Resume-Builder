"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleTryNow = () => {
    router.push('/dashboard');
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/Home2.jpg')" }}
    >
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center px-8 py-4">
        <h1 className="text-white text-lg font-bold">Unified Resume Builder</h1>
        <ul className="flex space-x-6 text-white">
          <li><Link href="/about">About Us </Link></li>
          <li><Link href="/contact">Contact us</Link></li>
        </ul>
        <button className="text-white border border-white px-4 py-1 rounded hover:bg-white hover:text-blue-900 transition">
          <Link href="/login">Login/Register</Link>
        </button>
      </nav>

     
      <div className="flex flex-col items-center justify-center text-center px-6">
       
        <div className="bg-black/60 backdrop-blur-md rounded-lg p-8 shadow-2xl max-w-lg w-full">
          <h1 className="text-4xl sm:text-4xl font-extrabold text-white drop-shadow-lg mb-4">
            Get Started!!
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 font-light mb-6">
            Discover a seamless experience of Creating and Reviewing Resume. Register or log in to unlock all features!
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white font-semibold px-10  py-2 rounded-md hover:bg-blue-600 transition">
              <Link href="/login">Login</Link>
            </button>
            <button className="bg-blue-500 text-white font-semibold px-10 py-2 rounded-md hover:bg-blue-600 transition">
              <Link href="/register">Register</Link>
            </button>
            <div
              className="relative group"
              onClick={handleTryNow}
            >
              <button className="bg-green-500 text-white font-semibold px-10 py-2 rounded-md hover:bg-green-600 transition">
                Start!!
              </button>
              
              <span className="absolute left-0 right-0 top-full mt-2 text-sm text-red-700 bg-black/70 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition">
                You can explore the dashboard, but downloading resumes requires logging in.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
