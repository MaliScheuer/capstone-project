import express from "express";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { dirname } from "./lib/pathHelpers.js";
import imageUploadRoutes from "./routes/imageUploadRoutes.routes.js";
import mentorsRoutes from "./routes/mentorsRoutes.routes.js";
import newMentorsRoutes from "./routes/newMentorRoutes.routes.js";

const __dirname = dirname(import.meta.url);

dotenv.config();
const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(fileUpload({ createParentPath: true }));

const connectionString = process.env.mongoUrl;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => console.log("mongodb is connected"));

server.use([imageUploadRoutes, mentorsRoutes, newMentorsRoutes]);

server.use(express.static("./server/public"));
server.use(express.static(path.join(__dirname, "../../client/build")));
server.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
});

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`Server listens on port ${port}.`));
