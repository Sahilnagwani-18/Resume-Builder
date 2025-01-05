import mongoose, { Schema, Document } from "mongoose";


interface IExperience {
  name: string;
  dateStart: string;
  dateEnd: string;
  role: string;
  points: string[];
}

interface IProject {
  name: string;
  toolsUsed: string;
  date: string;
  repoLink: string;
  points: string[];
}

interface ISkill {
  heading: string;
  content: string;
}

interface IResume extends Document {
   userId: String;
  _id: string;
  createdAt: Date;    
  updatedAt: Date;    
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
  skills: ISkill[];
  coreSubjects: string;
  experience: IExperience[];
  projects: IProject[];
  achievements: string[];
  responsibilities: string[];
}

const resumeSchema = new Schema<IResume>(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    degree: { type: String, required: true },
    course: { type: String, required: true },
    institute: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    linkedin: { type: String },
    github: { type: String },
    profileLink: { type: String },
    cgpa: { type: String },
    graduationYear: { type: String },
    skills: [
      {
        heading: { type: String },
        content: { type: String },
      },
    ],
    coreSubjects: { type: String },
    experience: [
      {
        name: { type: String },
        dateStart: { type: String },
        dateEnd: { type: String },
        role: { type: String },
        points: [String],
      },
    ],
    projects: [
      {
        name: { type: String },
        toolsUsed: { type: String },
        date: { type: String },
        repoLink: { type: String },
        points: [String],
      },
    ],
    achievements: [String],
    responsibilities: [String],
  },
  { timestamps: true } 
);

export default mongoose.models.Resume || mongoose.model<IResume>("Resume", resumeSchema);
