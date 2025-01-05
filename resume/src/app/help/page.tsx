import Link from "next/link";

export default function HelpCenter() {
    return (
        <div className="relative max-w-7xl mx-auto py-10 px-6 text-white">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('your-background-image-url.jpg')" }}></div>
            
            {/* Content */}
            <div className="relative z-10 bg-black bg-opacity-40 backdrop-blur-lg rounded-lg shadow-xl p-6">
                {/* Page Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold mb-4 text-white drop-shadow-md">Help Center</h1>
                    <p className="text-lg font-medium text-gray-200">Have questions? We're here to assist you in any way possible.</p>
                </div>

                {/* Help Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Help Topic 1 */}
                    <div className="p-8 border rounded-lg shadow-xl backdrop-blur-lg bg-black/40 hover:shadow-2xl transition duration-300 w-[90%] mx-auto">
                        <h2 className="text-2xl font-bold text-indigo-300 mb-4">How do I create a resume?</h2>
                        <p className="text-lg text-gray-200 mb-4">
                            Navigate to the "Create Resume" section, fill in the required details, and customize your template. The process is intuitive and allows you to personalize your resume with ease.
                        </p>
                    </div>

                    {/* Help Topic 2 */}
                    <div className="p-8 border rounded-lg shadow-xl backdrop-blur-lg bg-black/40 hover:shadow-2xl transition duration-300 w-[90%] mx-auto">
                        <h2 className="text-2xl font-bold text-indigo-300 mb-4">Can I edit my resume after saving?</h2>
                        <p className="text-lg text-gray-200 mb-4">
                            Yes, absolutely! After saving your resume, you can access the "Edit Resume" section and make changes whenever you need to. You can update your information, change the design, or add new sections.
                        </p>
                    </div>
                </div>

                {/* Additional Help Topics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Help Topic 3 */}
                    <div className="p-8 border rounded-lg shadow-xl backdrop-blur-lg bg-black/40 hover:shadow-2xl transition duration-300 w-[90%] mx-auto">
                        <h2 className="text-2xl font-bold text-indigo-300 mb-4">Can I download my resume in different formats?</h2>
                        <p className="text-lg text-gray-200 mb-4">
                            Yes! Once you’ve finalized your resume, you can download it in various formats such as PDF and Word, ensuring it fits your needs for any job application.
                        </p>
                    </div>

                    {/* Help Topic 4 */}
                    <div className="p-8 border rounded-lg shadow-xl backdrop-blur-lg bg-black/40 hover:shadow-2xl transition duration-300 w-[90%] mx-auto">
                        <h2 className="text-2xl font-bold text-indigo-300 mb-4">Do you offer any resume templates?</h2>
                        <p className="text-lg text-gray-200 mb-4">
                            Yes! We offer a wide range of professional and modern resume templates tailored to various industries. Choose one that best suits your profession and career goals.
                        </p>
                    </div>
                </div>

                {/* Contact Assistance Section */}
                <div className="p-8 border rounded-lg shadow-xl backdrop-blur-lg bg-black/40 hover:shadow-2xl transition duration-300 w-[90%] mx-auto">
                    <h2 className="text-2xl font-bold text-indigo-300 mb-4">Need further assistance?</h2>
                    <p className="text-lg text-gray-200 mb-4">
                        If you need more help, feel free to reach out to us via the <Link href="/contact" className="text-indigo-600 underline">Contact Us</Link> page. Our team is here to provide you with all the support you need.
                    </p>
                </div>
            </div>
        </div>
    );
}
