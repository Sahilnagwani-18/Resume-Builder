export default function TermsOfService() {
  return (
    <div className="text-white min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto py-10 px-6 bg-opacity-60 backdrop-blur-md rounded-lg bg-black">
        <h1 className="text-3xl font-bold mb-8 text-center">Terms of Service</h1>

        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">General Terms</h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>You must be at least 13 years old to use our Service.</li>
              <li>
                All user-generated content must adhere to our guidelines:
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your content must not violate laws or contain offensive material.</li>
                  <li>Unauthorized sharing of templates is prohibited.</li>
                </ul>
              </li>
              <li>We reserve the right to suspend accounts in violation of these terms.</li>
            </ol>
          </div>
          <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
            <img
              src="/images/img1TOS.jpg" 
              alt="Example Resume"
              className="rounded-lg shadow-md object-cover w-full h-[300px] sm:h-[250px] md:h-[300px] lg:h-[350px]" 
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 md:pr-6 mt-6 md:mt-0">
            <img
              src="/images/img2TOS.png" 
              alt="Example Resume"
              className="rounded-lg shadow-md object-cover w-full h-[300px] sm:h-[250px] md:h-[300px] lg:h-[350px]" 
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Privacy and Data Usage</h2>
            <p>
              Your use of the Service is governed by our <a href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</a>. Please review it to understand how we collect, use, and protect your data.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>We may collect anonymized data to improve the Service.</li>
              <li>Your personal information will never be sold to third parties.</li>
              <li>Ensure your account credentials are kept confidential.</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Prohibited Activities</h2>
            <p className="mb-4">
              Unauthorized activities include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Attempting to gain unauthorized access to our systems.</li>
              <li>Distributing malware or engaging in malicious activities.</li>
              <li>Reverse engineering or tampering with the Service.</li>
            </ul>
          </div>
          <div className="md:w-1/2 md:pl-6 mt-6 md:mt-0">
            <img
              src="/images/img3TOS.jpg" 
              alt="Example Resume"
              className="rounded-lg shadow-md object-cover w-full h-[300px] sm:h-[250px] md:h-[300px] lg:h-[350px]"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-6 mt-6 md:mt-0">
            <img
              src="/images/img4TOS.jpg" 
              alt="Example Resume"
              className="rounded-lg shadow-md object-cover w-full h-[300px] sm:h-[250px] md:h-[300px] lg:h-[350px]" 
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions or concerns regarding these terms, feel free to reach out to us:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: support@unifiedresumebuilder.com</li>
              <li>Phone: +1-800-123-4567</li>
              <li>Address: 123 Resume Lane, Creativity City, USA</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
