// models/User.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  image?: string;
}

const UserSchema = new Schema<IUser>({
  name: String,
  email: { type: String, required: true, unique: true },
  password: String,
  image: String,
});

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
