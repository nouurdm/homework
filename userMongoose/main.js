const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Date of birth is required"],
    },
    role: {
      type: String,
      enum: {
        values: ["User", "Admin"],
        message: "{VALUE} is not a valid role, choose either 'User' or 'Admin'.",
      },
      default: "User",
      required: [true, "Role is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Provide a valid email address"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password needs to be at least 8 characters long"],
      select: false,
    },
  },
  
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);