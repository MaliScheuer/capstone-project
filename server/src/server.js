import express from "express";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";
import Mentors from "./models/mentors.model.js";
import Image from "./models/image.model.js";
import dotenv from "dotenv";
import cors from "cors";

//"mongodb://localhost:27017/mentor-app";
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

server.get("/", (req, res) => res.send("Hello"));

server.get("/mentors", (request, response) => {
  Mentors.find()
    .populate("image")
    .exec((error, mentors) => {
      if (error) response.json(error.message);
      response.json(mentors);
    });
});

server.post("/create-profile", (request, response) => {
  const mentor = new Mentors({
    mentor_name: request.body.mentor_name,
    competence: request.body.competence,
    buzzwords: request.body.buzzwords,
    email: request.body.email,
    phone: request.body.phone,
    about: request.body.about,
    image: request.body.image ? request.body.image._id : null,
    isActive: request.body.isActive,
  });
  mentor
    .save()
    .then((mentor) => response.json(mentor))
    .catch((error) => response.json(error));
});

server.post("/upload", (request, response) => {
  const image = request.files.image;
  image.mv("./client/public/images/" + image.name);

  const imageToSave = new Image({ name: image.name });

  imageToSave
    .save()
    .then((savedImage) => response.json(savedImage))
    .catch((error) => response.json(error));
});

server.put("/mentors/:mentorId", (request, response) => {
  const mentorId = request.params.mentorId;
  const updatedMentor = request.body;

  Mentors.findOneAndUpdate({ _id: mentorId }, updatedMentor, {
    new: true,
  }).then((result) => response.json(result));
});

server.listen(4000);
