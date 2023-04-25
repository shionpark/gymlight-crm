import express from "express";

const centerRouter = express.Router();

const handleSalesCenter = (req, res) => res.send("Sales");

centerRouter.get("/:id/sales", handleSalesCenter);

export default centerRouter;
