"use client";

import React, { useState } from "react";
import './styles.css';
import axios from "axios";



export default function CreateResume() {
  const [formData, setFormData] = useState({
    name: "",
    degree: "",
    course: "",
    institute: "Sardar Vallabhbhai National Institute of Technology,Surat.",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    profileLink: "",
    cgpa: "",
    graduationYear: "",
    skills: [{ heading: "", content: "" }],
    coreSubjects: "",
    experience: [
      {
        name: "",
        dateStart: "",
        dateEnd: "",
        role: "",
        points: ["", "", ""],
      },
    ],
    projects: [
      {
        name: "",
        toolsUsed: "",
        date: "",
        repoLink: "",
        points: ["", "", "", ""],
      },
    ],
    achievements: ["", "", "", "", ""],
    responsibilities: ["", "", ""],
  });
  

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleNestedChange = (section: string, index: number, field: string, value: any) => {
    setFormData((prevData) => {
      const updatedSection = [...prevData[section]];
      if (field === "points") {
        updatedSection[index][field] = value; 
      } else {
        updatedSection[index][field] = value; 
      }
      return {
        ...prevData,
        [section]: updatedSection, 
      };
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Resume saved successfully!");
        setFormData({
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
          skills: [{ heading: "", content: "" }],
          coreSubjects: "",
          experience: [
            {
              name: "",
              dateStart: "",
              dateEnd: "",
              role: "",
              points: ["", "", ""],
            },
          ],
          projects: [
            {
              name: "",
              toolsUsed: "",
              date: "",
              repoLink: "",
              points: ["", "", "", ""],
            },
          ],
          achievements: ["", "", "", "", ""],
          responsibilities: ["", "", ""],
        });
      } else {
        console.error("Failed to save resume.");
        alert("Failed to save resume. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const addSectionItem = (section: string, newItem: any) => {
    setFormData((prevData) => {
      const updatedSection = [...prevData[section], newItem];
      return {
        ...prevData,
        [section]: updatedSection,
      };
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-black text-white py-4 shadow-md">
        <div className="max-w-7xl mx-auto text-size-500 px-4">
          <h1 className="text-3xl font-bold text-center">Create Your Resume</h1>
        </div>
      </header>

      <main className="flex-grow py-10">
        <div className="max-w-4xl mx-auto shadow-lg rounded-lg p-6 md:p-8">
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Resume Builder</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Degree and Course */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Degree</label>
                <select
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select Degree</option>
                  <option value="BTech">BTech</option>
                  <option value="MSc">MSc</option>
                  <option value="Integrated">Integrated</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Course</label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Email and LinkedIn */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
                <input
                  type="text"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            {/* GitHub and Profile Link */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">GitHub</label>
                <input
                  type="text"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Profile Link</label>
                <input
                  type="text"
                  name="profileLink"
                  value={formData.profileLink}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Skills</h3>
              {formData.skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Skill Heading</label>
                    <input
                      type="text"
                      value={skill.heading}
                      onChange={(e) => {
                        const updatedSkills = [...formData.skills];
                        updatedSkills[index].heading = e.target.value;
                        setFormData({ ...formData, skills: updatedSkills });
                      }}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Skill Content</label>
                    <input
                      type="text"
                      value={skill.content}
                      onChange={(e) => {
                        const updatedSkills = [...formData.skills];
                        updatedSkills[index].content = e.target.value;
                        setFormData({ ...formData, skills: updatedSkills });
                      }}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    ...formData,
                    skills: [...formData.skills, { heading: "", content: "" }],
                  })
                }
                className="mt-2 bg-indigo-600 text-white py-1 px-3 rounded-md hover:bg-indigo-700"
              >
                Add Skill
              </button>
            </div>
             {/* Projects Section */}
             <div>
              <h3 className="text-lg font-bold">Projects</h3>
              {formData.projects.map((project, index) => (
                <div key={index} className="space-y-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Project Name</label>
                    <input
                      type="text"
                      value={project.name}
                      onChange={(e) =>
                        handleNestedChange("projects", index, "name", e.target.value)
                      }
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Tools Used</label>
                    <input
                      type="text"
                      value={project.toolsUsed}
                      onChange={(e) =>
                        handleNestedChange("projects", index, "toolsUsed", e.target.value)
                      }
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Project Date</label>
                    <input
                      type="date"
                      value={project.date}
                      onChange={(e) =>
                        handleNestedChange("projects", index, "date", e.target.value)
                      }
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Project Repository Link</label>
                    <input
                      type="url"
                      value={project.repoLink}
                      onChange={(e) =>
                        handleNestedChange("projects", index, "repoLink", e.target.value)
                      }
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Project Points</label>
                    {project.points.map((point, idx) => (
                      <input
                        key={idx}
                        type="text"
                        value={point}
                        onChange={(e) =>
                          handleNestedChange("projects", index, "points", [
                            ...project.points.slice(0, idx),
                            e.target.value,
                            ...project.points.slice(idx + 1),
                          ])
                        }
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    ))}
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  addSectionItem("projects", {
                    name: "",
                    toolsUsed: "",
                    date: "",
                    repoLink: "",
                    points: ["", "", "", ""],
                  })
                }
                className="mt-2 bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600"
              >
                Add Project
              </button>
            </div>

            <div>
              <h3 className="text-lg font-bold">Experience</h3>
              {formData.experience.map((exp, index) => (
                <div key={index} className="space-y-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      value={exp.name}
                      onChange={(e) =>
                        handleNestedChange("experience", index, "name", e.target.value)
                      }
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Start Date</label>
                    <input
                      type="date"
                      value={exp.dateStart}
                      onChange={(e) =>
                        handleNestedChange("experience", index, "dateStart", e.target.value)
                      }
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">End Date</label>
                    <input
                      type="date"
                      value={exp.dateEnd}
                      onChange={(e) =>
                        handleNestedChange("experience", index, "dateEnd", e.target.value)
                      }
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Role</label>
                    <input
                      type="text"
                      value={exp.role}
                      onChange={(e) =>
                        handleNestedChange("experience", index, "role", e.target.value)
                      }
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Experience Points</label>
                    {exp.points.map((point, idx) => (
                      <input
                        key={idx}
                        type="text"
                        value={point}
                        onChange={(e) =>
                          handleNestedChange("experience", index, "points", [
                            ...exp.points.slice(0, idx),
                            e.target.value,
                            ...exp.points.slice(idx + 1),
                          ])
                        }
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    ))}
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  addSectionItem("experience", {
                    name: "",
                    dateStart: "",
                    dateEnd: "",
                    role: "",
                    points: ["", "", ""],
                  })
                }
                className="mt-2 bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600"
              >
                Add Experience
              </button>
            </div>

            <div>
              <h3 className="text-lg font-bold">Achievements</h3>
              <textarea
                name="achievements"
                value={formData.achievements.join(", ")}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    achievements: e.target.value.split(", "),
                  })
                }
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>




            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700"
              >
                Submit Resume
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}