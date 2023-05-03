import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  sex: String,
  date_of_birth: Number,
  phone_number: Number,
  location: String,
  program: {
    title: String,
    date_of_registration: Date,
    date_of_start: Date,
    date_of_end: Date,
    the_person_in_charge: String,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
