import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  // status: String,
  name: String,
  sex: String,
  age: {
    years: Number,
    birthDay: Number,
  },
  phoneNumber: Number,
  paymentProduct: {
    program: String,
    months: Number,
  },
  registrationDate: Date,
  reRegistrationDate: Date,
  startDate: Date,
  endDate: Date,
  remainingDays: Number,
  // lastVisitDate: Date,
  // attendanceNumber: Number,
  // visitPath: String,
  purposeOfExercise: String,
  personInCharge: String,
  location: String,
});

const User = mongoose.model("User", userSchema);

export default User;
