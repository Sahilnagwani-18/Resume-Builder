import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  email: string;
  password?: string;
}

const userSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model<IUser>("User", userSchema);
