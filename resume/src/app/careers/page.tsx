import Link from "next/link";

export default function Careers() {
  return (
      <div className="max-w-7xl mx-auto py-10 px-6 text-white backdrop-blur-lg bg-black/30">
          {/* Page Header */}
          <h1 className="text-3xl font-bold mb-4">Careers</h1>
          <p className="text-lg mb-6">
              Join our growing team and help us revolutionize the way people build resumes.
          </p>

          {/* Job Opportunities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {/* Job Post 1 */}
              <div className="p-4 border rounded-lg shadow-lg backdrop-blur-lg bg-black/20 hover:shadow-2xl transition duration-300">
                  <h2 className="text-xl font-bold mb-2">Front-End Developer</h2>
                  <p className="text-sm text-gray-200 mb-2">
                      We are looking for a passionate Front-End Developer to build beautiful and responsive UIs for our resume builder platform.
                  </p>
                  <ul className="list-disc pl-6 text-sm text-gray-200">
                      <li>Experience with React.js and Tailwind CSS</li>
                      <li>Knowledge of responsive design principles</li>
                      <li>Attention to detail and UI/UX best practices</li>
                  </ul>
                  <Link href="/careers/front-end" className="text-indigo-600 underline mt-2 block">
                      Learn More
                  </Link>
              </div>

              {/* Job Post 2 */}
              <div className="p-4 border rounded-lg shadow-lg backdrop-blur-lg bg-black/20 hover:shadow-2xl transition duration-300">
                  <h2 className="text-xl font-bold mb-2">Back-End Developer</h2>
                  <p className="text-sm text-gray-200 mb-2">
                      We're seeking a Back-End Developer to create efficient and scalable APIs and services for our platform.
                  </p>
                  <ul className="list-disc pl-6 text-sm text-gray-200">
                      <li>Proficiency in Node.js and Express.js</li>
                      <li>Experience with MongoDB or other NoSQL databases</li>
                      <li>Knowledge of RESTful APIs</li>
                  </ul>
                  <Link href="/careers/back-end" className="text-indigo-600 underline mt-2 block">
                      Learn More
                  </Link>
              </div>

              {/* Job Post 3 */}
              <div className="p-4 border rounded-lg shadow-lg backdrop-blur-lg bg-black/20 hover:shadow-2xl transition duration-300">
                  <h2 className="text-xl font-bold mb-2">UI/UX Designer</h2>
                  <p className="text-sm text-gray-200 mb-2">
                      Join us as a UI/UX Designer and help us create a user-friendly and intuitive experience for our platform.
                  </p>
                  <ul className="list-disc pl-6 text-sm text-gray-200">
                      <li>Experience with design tools like Figma, Adobe XD, or Sketch</li>
                      <li>Strong understanding of user experience design principles</li>
                      <li>Ability to create wireframes, prototypes, and user flows</li>
                  </ul>
                  <Link href="/careers/ui-ux" className="text-indigo-600 underline mt-2 block">
                      Learn More
                  </Link>
              </div>

              {/* Job Post 4 */}
              <div className="p-4 border rounded-lg shadow-lg backdrop-blur-lg bg-black/20 hover:shadow-2xl transition duration-300">
                  <h2 className="text-xl font-bold mb-2">Product Manager</h2>
                  <p className="text-sm text-gray-200 mb-2">
                      We're looking for a Product Manager to oversee the development of our platform and lead cross-functional teams.
                  </p>
                  <ul className="list-disc pl-6 text-sm text-gray-200">
                      <li>Experience in product management or project management</li>
                      <li>Excellent communication and leadership skills</li>
                      <li>Ability to define product roadmaps and prioritize features</li>
                  </ul>
                  <Link href="/careers/product-manager" className="text-indigo-600 underline mt-2 block">
                      Learn More
                  </Link>
              </div>

              {/* Job Post 5 */}
              <div className="p-4 border rounded-lg shadow-lg backdrop-blur-lg bg-black/20 hover:shadow-2xl transition duration-300">
                  <h2 className="text-xl font-bold mb-2">Marketing Specialist</h2>
                  <p className="text-sm text-gray-200 mb-2">
                      We are seeking a Marketing Specialist to help grow our brand and reach more users.
                  </p>
                  <ul className="list-disc pl-6 text-sm text-gray-200">
                      <li>Experience in digital marketing and social media campaigns</li>
                      <li>Ability to develop and implement marketing strategies</li>
                      <li>Strong analytical skills and data-driven mindset</li>
                  </ul>
                  <Link href="/careers/marketing-specialist" className="text-indigo-600 underline mt-2 block">
                      Learn More
                  </Link>
              </div>

              {/* Job Post 6 */}
              <div className="p-4 border rounded-lg shadow-lg backdrop-blur-lg bg-black/20 hover:shadow-2xl transition duration-300">
                  <h2 className="text-xl font-bold mb-2">Content Writer</h2>
                  <p className="text-sm text-gray-200 mb-2">
                      We are looking for a skilled Content Writer to create engaging content for our blog and other platforms.
                  </p>
                  <ul className="list-disc pl-6 text-sm text-gray-200">
                      <li>Experience writing for digital platforms</li>
                      <li>Strong writing, editing, and proofreading skills</li>
                      <li>Ability to create SEO-friendly content</li>
                  </ul>
                  <Link href="/careers/content-writer" className="text-indigo-600 underline mt-2 block">
                      Learn More
                  </Link>
              </div>
          </div>

          {/* Join Our Team Section */}
          <div className="mt-10 text-center">
              <h2 className="text-2xl font-semibold mb-4">Why Join Us?</h2>
              <p className="text-lg text-gray-200 mb-4">
                  At our company, we believe in innovation, collaboration, and growth. We offer a dynamic work environment, competitive salaries, and opportunities for career advancement.
              </p>
              <p className="text-lg text-gray-200 mb-4">
                  If you are passionate about helping others build their careers and grow professionally, we would love to hear from you!
              </p>
          </div>
      </div>
  );
}
