export const see = (req, res) => res.send("See All Center Trainers");
export const search = (req, res) => res.send("Search Trainers");
export const attendance = (req, res) => res.send("Trainers Attendance");
export const schedule = (req, res) => res.send("Trainers Schedule");
export const oneSee = (req, res) => res.render("One Center Trainers");
export const oneSearch = (req, res) => res.send("One Center Search Trainers");
export const oneAttendance = (req, res) =>
  res.send("One Center Trainers Attendance");
export const oneSchedule = (req, res) =>
  res.send("One Center Trainers Schedule");
