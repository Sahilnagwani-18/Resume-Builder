import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faWhatsapp,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBuilding,
  faEnvelope,
  faBriefcase,
  faUserShield,
  faQuestionCircle,
  faFileContract,
  faPenNib,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (!email.trim() || !validateEmail(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing! A confirmation email has been sent.');
        setEmail('');
      } else {
        setMessage('Failed to send confirmation email. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-8 lg:py-12 mt-6 lg:mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="flex items-center hover:text-blue-400">
                  <FontAwesomeIcon icon={faBuilding} className="mr-2" /> About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="flex items-center hover:text-blue-400">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact Us
                </a>
              </li>
              <li>
                <a href="/careers" className="flex items-center hover:text-blue-400">
                  <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> Careers
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="flex items-center hover:text-blue-400">
                  <FontAwesomeIcon icon={faUserShield} className="mr-2" /> Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/help" className="flex items-center hover:text-blue-400">
                  <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" /> Help Center
                </a>
              </li>
              <li>
                <a href="/terms" className="flex items-center hover:text-blue-400">
                  <FontAwesomeIcon icon={faFileContract} className="mr-2" /> Terms of Service
                </a>
              </li>
              <li>
                <a href="/blog" className="flex items-center hover:text-blue-400">
                  <FontAwesomeIcon icon={faPenNib} className="mr-2" /> Blog
                </a>
              </li>
              <li>
                <a href="/faqs" className="flex items-center hover:text-blue-400">
                  <FontAwesomeIcon icon={faClipboardList} className="mr-2" /> FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" className="hover:text-blue-600">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com" className="hover:text-blue-400">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com" className="hover:text-pink-600">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com" className="hover:text-blue-700">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="https://www.youtube.com" className="hover:text-red-600">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="https://www.whatsapp.com" className="hover:text-green-400">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a href="https://www.pinterest.com" className="hover:text-red-500">
                <FontAwesomeIcon icon={faPinterestP} />
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-sm mb-4">Stay updated with the latest news and offers.</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 mb-4 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Subscribe
              </button>
            </form>
            {message && <p className="mt-4 text-sm">{message}</p>}
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-gray-800 py-4 mt-8 text-center">
        <p className="text-sm">© 2024 Unified Resume Builder. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
