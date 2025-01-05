"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';  // Ensure axios is installed

const ResumePreviewPage = () => {
  interface IResume {
    _id: string;
    userId: string;
    name: string;
    degree: string;
    createdAt: string;
    updatedAt: string;
  }
  const [resumes, setResumes] = useState<IResume[]>([]);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await axios.get('/api/resumes/route.tsx');
        console.log(response.data); 
        setResumes(response.data);
      } catch (error) {
        console.error('Error fetching resumes:', error);
      }
    };

    fetchResumes();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-semibold mb-4">Resume Previews</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2 bg-gray-100">Resume ID</th>
            <th className="border px-4 py-2 bg-gray-100">Name</th>
            <th className="border px-4 py-2 bg-gray-100">Created At</th>
            <th className="border px-4 py-2 bg-gray-100">Updated At</th>
          </tr>
        </thead>
        <tbody>
          {resumes.map((resume) => (
            <tr key={resume._id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{resume._id}</td>
              <td className="border px-4 py-2">{resume.name}</td>
              <td className="border px-4 py-2">{new Date(resume.createdAt).toLocaleString()}</td>
              <td className="border px-4 py-2">{new Date(resume.updatedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResumePreviewPage;


