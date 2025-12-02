

import { Schema, model, Document } from "mongoose";

export interface IUser {
  email: string;
  password?: string;
  googleId?: string;
  isNewUser?: boolean;
  profileCompleted: boolean;
  name?: string;
  phone?: string;
}

export type IUserDocument = IUser & Document;

const userSchema = new Schema<IUserDocument>({
  email: { type: String, required: true, unique: true },
  password: String,
  googleId: String,
  isNewUser:{ type: Boolean, default: true},
  profileCompleted: { type: Boolean, default: false },
  name: String,
  phone: String,
});

export default model<IUserDocument>("User", userSchema);
