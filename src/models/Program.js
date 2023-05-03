import mongoose from "mongoose";

const programSchema = new mongoose.Schema({
  title: String,
  days_of_program: Number,
  counts_of_program: Number,
  options_locker: Boolean,
  options_clothes: Boolean,
  options_ot: Boolean,
  options_miracle: Boolean,
});

const Program = mongoose.model("Program", programSchema);

export default Program;
