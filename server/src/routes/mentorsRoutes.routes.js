import express from "express";

const router = express.Router();

router.get("/mentors");
router.get("/mentors/:mentorId");
