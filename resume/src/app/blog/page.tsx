import Link from "next/link";

export default function Blog() {
    return (
        <div className="max-w-7xl mx-auto py-10 px-6 text-white backdrop-blur-lg bg-black/30">
            {/* Main Title and Description */}
            <h1 className="text-3xl font-bold mb-4">Blog</h1>
            <p className="text-lg mb-4">
                Discover the latest trends in resume building, career advice, and professional development.
            </p>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {/* Blog Post 1 */}
                <div className="p-4 border rounded-lg shadow-lg backdrop-blur-lg bg-black/20 hover:shadow-2xl transition duration-300">
                    <h2 className="text-xl font-bold mb-2">10 Tips for an Outstanding Resume</h2>
                    <p className="text-sm text-gray-200 mb-2">
                        Learn how to make your resume stand out with these expert tips.
                    </p>
                    <Link href="/blog/10-tips" className="text-indigo-600 underline mt-2 block">
                        Read More
                    </Link>
                </div>

                {/* Blog Post 2 */}
                <div className="p-4 border rounded-lg shadow-lg backdrop-blur-lg bg-black/20 hover:shadow-2xl transition duration-300">
                    <h2 className="text-xl font-bold mb-2">How to Tailor Your Resume for Each Job</h2>
                    <p className="text-sm text-gray-200 mb-2">
                        A step-by-step guide to customizing your resume for every application.
                    </p>
                    <Link href="/blog/tailor-resume" className="text-indigo-600 underline mt-2 block">
                        Read More
                    </Link>
                </div>

                {/* Blog Post 3 */}
                <div className="p-4 border rounded-lg shadow-lg backdrop-blur-lg bg-black/20 hover:shadow-2xl transition duration-300">
                    <h2 className="text-xl font-bold mb-2">How to Write a Compelling Cover Letter</h2>
                    <p className="text-sm text-gray-200 mb-2">
                        Learn the key elements of a cover letter that grabs attention.
                    </p>
                    <Link href="/blog/compelling-cover-letter" className="text-indigo-600 underline mt-2 block">
                        Read More
                    </Link>
                </div>

                {/* Blog Post 4 */}
                <div className="p-4 border rounded-lg shadow-lg backdrop-blur-lg bg-black/20 hover:shadow-2xl transition duration-300">
                    <h2 className="text-xl font-bold mb-2">Building a Strong Professional Network</h2>
                    <p className="text-sm text-gray-200 mb-2">
                        Tips for expanding your professional connections and boosting your career.
                    </p>
                    <Link href="/blog/professional-network" className="text-indigo-600 underline mt-2 block">
                        Read More
                    </Link>
                </div>

                {/* Blog Post 5 */}
                <div className="p-4 border rounded-lg shadow-lg backdrop-blur-lg bg-black/20 hover:shadow-2xl transition duration-300">
                    <h2 className="text-xl font-bold mb-2">The Importance of Keywords in Job Applications</h2>
                    <p className="text-sm text-gray-200 mb-2">
                        Understand how to optimize your resume with the right keywords for ATS.
                    </p>
                    <Link href="/blog/keywords-job-application" className="text-indigo-600 underline mt-2 block">
                        Read More
                    </Link>
                </div>

                {/* Blog Post 6 */}
                <div className="p-4 border rounded-lg shadow-lg backdrop-blur-lg bg-black/20 hover:shadow-2xl transition duration-300">
                    <h2 className="text-xl font-bold mb-2">How to Prepare for a Job Interview</h2>
                    <p className="text-sm text-gray-200 mb-2">
                        Key strategies and tips to confidently ace your job interview.
                    </p>
                    <Link href="/blog/job-interview-prep" className="text-indigo-600 underline mt-2 block">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
}
