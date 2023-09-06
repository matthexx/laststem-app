import mongoose from "mongoose";

// Define user roles
const ROLES = ['admin', 'teacher', 'student'];

// Define the User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ROLES, // Ensures that role can only be one of the defined roles
    default: 'student',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  isVerified:{
    type: Boolean,
    default: false,
  },

  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry:Date
});

const User = mongoose.models.users || mongoose.model("user", userSchema);

export default User;