import { postMentor } from "../controller/newMentor.controller.js";

import express from "express";

const router = express.Router();

router.post("/create-profile", postMentor);

export default router;
