"use client";

import React, { useState } from "react";
type FormData = {
  name: string;
  degree: string;
  course: string;
  institute: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  profileLink: string;
  cgpa: string;
  graduationYear: string;
  skills: { heading: string; content: string }[];
  coreSubjects: string;
  experience: {
    name: string;
    dateStart: string;
    dateEnd: string;
    role: string;
    points: string[];
  }[];
  projects: {
    name: string;
    idea: string;
    toolsUsed: string;
    date: string;
    repoLink: string;
    githubLink: string;
    points: string[];
  }[];
  achievements: string[];
  responsibilities: string[];
};

export default function ResumeFormat() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    degree: "",
    course: "",
    institute: "National Institute of Technology, Surat",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    profileLink: "",
    cgpa: "",
    graduationYear: "",
    skills: [
      { heading: "", content: "" },
      { heading: "", content: "" },
      { heading: "", content: "" },
    ],
    coreSubjects: "",
    experience: [
      { name: "", dateStart: "", dateEnd: "", role: "", points: ["", "", ""] },
    ],
    projects: [
      {
        name: "",
        idea: "",
        toolsUsed: "",
        date: "",
        repoLink: "",
        githubLink: "",
        points: ["", "", "", ""],
      },
    ],
    achievements: ["", "", "", "", ""],
    responsibilities: ["", "", ""],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNestedChange = (
    section: keyof FormData,
    index: number,
    field: string,
    value: string
  ) => {
    setFormData((prevData) => {
      const updatedSection = [...(prevData[section] as any[])];
      updatedSection[index] = { ...updatedSection[index], [field]: value };
      return {
        ...prevData,
        [section]: updatedSection,
      };
    });
  };

  


  const addExperience = () => {
    setFormData((prevData) => ({
      ...prevData,
      experience: [
        ...prevData.experience,
        { name: "", dateStart: "", dateEnd: "", role: "", points: ["", "", ""] },
      ],
    }));
  };

  const addProject = () => {
    setFormData((prevData) => ({
      ...prevData,
      projects: [
        ...prevData.projects,
        {
          name: "",
          idea: "",
          toolsUsed: "",
          date: "",
          repoLink: "",
          githubLink: "",
          points: ["", "", "", ""],
        },
      ],
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resumeData = {
      introduction: {
        name: formData.name,
        degree: formData.degree,
        course: formData.course,
        institute: formData.institute,
        phone: formData.phone,
        email: formData.email,
        linkedin: formData.linkedin,
        github: formData.github,
        profileLink: formData.profileLink,
      },
      education: {
        cgpa: formData.cgpa,
        graduationYear: formData.graduationYear,
        institute: formData.institute,
      },
      skills: formData.skills,
      coreSubjects: formData.coreSubjects,
      experience: formData.experience,
      projects: formData.projects,
      achievements: formData.achievements,
      responsibilities: formData.responsibilities,
    };

    console.log("Resume Data:", resumeData);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-indigo-600 text-white py-6 shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Resume Builder</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100">
        <div className="max-w-3xl mx-auto py-12 px-6">
          <h1 className="text-4xl font-bold text-indigo-600 text-center mb-8">
            Create Your Resume
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-lg p-8 space-y-8"
          >
            {/* Basic Details Section */}
            <section>
              <h2 className="text-xl font-semibold text-gray-700 mb-6">Basic Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="col-span-1">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="col-span-1">
                  <label htmlFor="degree" className="block text-sm font-medium text-gray-700">
                    Degree:
                  </label>
                  <input
                    type="text"
                    name="degree"
                    value={formData.degree}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section>
              <h2 className="text-xl font-semibold text-gray-700 mb-6">Experience</h2>
              {formData.experience.map((exp, index) => (
                <div key={index} className="space-y-4 mb-6 border-b-2 pb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Company Name:
                      </label>
                      <input
                        type="text"
                        value={exp.name}
                        onChange={(e) =>
                          handleNestedChange("experience", index, "name", e.target.value)
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Role:
                      </label>
                      <input
                        type="text"
                        value={exp.role}
                        onChange={(e) =>
                          handleNestedChange("experience", index, "role", e.target.value)
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Start Date:
                      </label>
                      <input
                        type="date"
                        value={exp.dateStart}
                        onChange={(e) =>
                          handleNestedChange("experience", index, "dateStart", e.target.value)
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-700">
                        End Date:
                      </label>
                      <input
                        type="date"
                        value={exp.dateEnd}
                        onChange={(e) =>
                          handleNestedChange("experience", index, "dateEnd", e.target.value)
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addExperience}
                className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition duration-300"
              >
                Add Experience
              </button>
            </section>

            {/* Projects Section */}
            <section>
              <h2 className="text-xl font-semibold text-gray-700 mb-6">Projects</h2>
              {formData.projects.map((proj, index) => (
                <div key={index} className="space-y-4 mb-6 border-b-2 pb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Project Name:
                      </label>
                      <input
                        type="text"
                        value={proj.name}
                        onChange={(e) =>
                          handleNestedChange("projects", index, "name", e.target.value)
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div className="col-span-1">
                      <label className="block text-sm font-medium text-gray-700">
                        Repo Link:
                      </label>
                      <input
                        type="text"
                        value={proj.repoLink}
                        onChange={(e) =>
                          handleNestedChange("projects", index, "repoLink", e.target.value)
                        }
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addProject}
                className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Add Project
              </button>
            </section>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Generate Resume
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
