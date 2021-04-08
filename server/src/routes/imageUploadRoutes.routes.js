import { postImage } from "../controller/imageUpload.controller.js";
import express from "express";

const router = express.Router();

router.post("/upload", postImage);

export default router;
