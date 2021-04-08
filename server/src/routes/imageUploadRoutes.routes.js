import { postImage } from "../controller/imageUpload.controller";
import express from "express";

const router = express.Router();

router.post("/upload", postImage);

export default router;
