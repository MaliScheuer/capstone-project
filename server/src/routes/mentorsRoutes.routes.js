import {
  getMentors,
  getMentor,
  editMentor,
} from "../controller/mentors.controller.js";

import express from "express";

const router = express.Router();

router.get("/mentors", getMentors);
router.get("/mentors/:mentorId", getMentor);
router.put("/mentors/:mentorId", editMentor);

export default router;
