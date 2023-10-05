import express from "express";
import booksRoute from ".././routes/booksRoute.js";

const router = express.Router();

// Use the booksRoute router for the /books route
router.use("/books", booksRoute);

export default router;
