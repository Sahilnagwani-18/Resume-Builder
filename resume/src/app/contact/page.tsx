import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <div className="relative max-w-7xl mx-auto py-10 px-6">
     
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('your-background-image-url.jpg')" }}></div>

      <div className="relative z-10 bg-black bg-opacity-40 backdrop-blur-lg rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-white drop-shadow-md">Contact Us</h1>
        <p className="text-lg text-center text-gray-200 mb-8">Reach out to us with any questions or concerns. We're here to assist you!</p>
        
        <form className="space-y-6">
          <div>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="block w-full p-3 border rounded-lg bg-black/50 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div>
            <input 
              type="email" 
              placeholder="Your Email" 
              className="block w-full p-3 border rounded-lg bg-black/50 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div>
            <textarea 
              placeholder="Your Message" 
              className="block w-full p-3 border rounded-lg bg-black/50 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
          <div>
            <button 
              type="submit" 
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Team Section */}
      <div className="mt-16 bg-black bg-opacity-30 backdrop-blur-lg rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-white drop-shadow-md">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-black/50 text-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <img 
              src="https://via.placeholder.com/300x300.png?text=Member+1" 
              alt="Team Member 1" 
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Team Member 1</h3>
              <p className="text-lg text-gray-200 mb-4">Role</p>
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/member1" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl text-blue-600 hover:text-blue-700" />
                </a>
                <a href="https://www.instagram.com/member1" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl text-pink-600 hover:text-pink-700" />
                </a>
                <a href="https://github.com/member1" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-600 hover:text-gray-700" />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-black/50 text-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <img 
              src="https://via.placeholder.com/300x300.png?text=Member+2" 
              alt="Team Member 2" 
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Team Member 2</h3>
              <p className="text-lg text-gray-200 mb-4">Role</p>
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/member2" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl text-blue-600 hover:text-blue-700" />
                </a>
                <a href="https://www.instagram.com/member2" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl text-pink-600 hover:text-pink-700" />
                </a>
                <a href="https://github.com/member2" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-600 hover:text-gray-700" />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="bg-black/50 text-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <img 
              src="https://via.placeholder.com/300x300.png?text=Member+3" 
              alt="Team Member 3" 
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Team Member 3</h3>
              <p className="text-lg text-gray-200 mb-4">Role</p>
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/member3" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl text-blue-600 hover:text-blue-700" />
                </a>
                <a href="https://www.instagram.com/member3" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl text-pink-600 hover:text-pink-700" />
                </a>
                <a href="https://github.com/member3" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-600 hover:text-gray-700" />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="bg-black/50 text-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <img 
              src="https://via.placeholder.com/300x300.png?text=Member+4" 
              alt="Team Member 4" 
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Team Member 4</h3>
              <p className="text-lg text-gray-200 mb-4">Role</p>
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/member4" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl text-blue-600 hover:text-blue-700" />
                </a>
                <a href="https://www.instagram.com/member4" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl text-pink-600 hover:text-pink-700" />
                </a>
                <a href="https://github.com/member4" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-600 hover:text-gray-700" />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 5 */}
          <div className="bg-black/50 text-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <img 
              src="https://via.placeholder.com/300x300.png?text=Member+5" 
              alt="Team Member 5" 
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Team Member 5</h3>
              <p className="text-lg text-gray-200 mb-4">Role</p>
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/member5" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl text-blue-600 hover:text-blue-700" />
                </a>
                <a href="https://www.instagram.com/member5" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl text-pink-600 hover:text-pink-700" />
                </a>
                <a href="https://github.com/member5" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-600 hover:text-gray-700" />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 6 */}
          <div className="bg-black/50 text-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            <img 
              src="https://via.placeholder.com/300x300.png?text=Member+6" 
              alt="Team Member 6" 
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Team Member 6</h3>
              <p className="text-lg text-gray-200 mb-4">Role</p>
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/member6" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl text-blue-600 hover:text-blue-700" />
                </a>
                <a href="https://www.instagram.com/member6" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl text-pink-600 hover:text-pink-700" />
                </a>
                <a href="https://github.com/member6" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-600 hover:text-gray-700" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
