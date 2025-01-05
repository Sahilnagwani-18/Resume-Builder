import Link from "next/link";

export default function About() {
  return (
      <div className="max-w-7xl mx-auto py-10 px-6 text-white backdrop-blur-lg  bg-black bg-opacity-70">
          {/* Page Header */}
          <div className="text-center mb-12">
              <h1 className="text-4xl font-extrabold mb-4 text-white drop-shadow-md">About Us</h1>
              <p className="text-lg font-medium text-gray-200">Empowering job seekers with the tools to build stunning resumes effortlessly.</p>
          </div>

          {/* Company Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 border rounded-lg shadow-xl backdrop-blur-lg bg-black/40 hover:shadow-2xl transition duration-300 w-[90%] mx-auto">
                  <h2 className="text-2xl font-bold text-indigo-300 mb-4">Our Mission</h2>
                  <p className="text-lg text-gray-200">
                      At Unified Resume Builder, we aim to simplify the resume-building process by providing a user-friendly platform that helps you create the perfect resume tailored to your career goals.
                  </p>
              </div>

              <div className="p-8 border rounded-lg shadow-xl backdrop-blur-lg bg-black/40 hover:shadow-2xl transition duration-300 w-[90%] mx-auto">
                  <h2 className="text-2xl font-bold text-indigo-300 mb-4">Our Vision</h2>
                  <p className="text-lg text-gray-200">
                      Our vision is to empower job seekers globally to craft professional resumes that showcase their skills, experiences, and personality, helping them secure their dream job.
                  </p>
              </div>
          </div>

          {/* Our Values */}
          <div className="mb-12">
              <h2 className="text-3xl font-semibold text-center text-indigo-300 mb-6">Our Values</h2>
              <ul className="space-y-4 text-lg text-gray-200" >
                  <li className="flex items-center space-x-3">
                      <span className="text-indigo-300">✨</span>
                      <p>Innovation: Constantly improving our platform with new features.</p>
                  </li>
                  <li className="flex items-center space-x-3">
                      <span className="text-indigo-300">✨</span>
                      <p>Quality: Providing a seamless, high-quality experience for every user.</p>
                  </li>
                  <li className="flex items-center space-x-3">
                      <span className="text-indigo-300">✨</span>
                      <p>Empowerment: Giving job seekers the tools they need to succeed.</p>
                  </li>
                  <li className="flex items-center space-x-3">
                      <span className="text-indigo-300">✨</span>
                      <p>Accessibility: Ensuring that our platform is accessible to everyone.</p>
                  </li>
              </ul>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold text-indigo-300 mb-6">Why Choose Us?</h2>
              <p className="text-lg text-gray-200 mb-6">
                  With Unified Resume Builder, you don’t just create a resume — you create your professional brand. Our platform is built with advanced features to ensure that your resume not only stands out but is also optimized for success in today's job market.
              </p>
              <ul className="list-disc pl-6 text-lg text-gray-200 mb-6">
                  <li>Effortlessly build a custom resume in minutes</li>
                  <li>ATS-friendly templates designed to get noticed</li>
                  <li>Multiple formatting options to suit your industry</li>
                  <li>Real-time preview to ensure your resume looks perfect</li>
              </ul>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-12">
              <h2 className="text-2xl font-semibold text-indigo-300 mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-gray-200 mb-6">
                  Don’t wait for your dream job — build your perfect resume today and take the first step toward a successful career.
              </p>
              <Link href="/start" className="bg-indigo-600 text-white text-lg px-6 py-3 rounded-lg shadow-xl hover:bg-indigo-700 transition duration-300">
                  Start Creating
              </Link>
          </div>
      </div>
  );
}
