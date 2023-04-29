export const home = (req, res) => res.render("home", { pageTitle: "Home" });
export const sales = (req, res) => res.send("All center Sales");
export const locker = (req, res) => res.send("One Center Lockers");
export const accounting = (req, res) => res.send("One Center Accounting");
