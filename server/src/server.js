import express from 'express';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';
import Mentors from './models/mentors.model.js';
import Image from './models/image.model.js'
import cors from 'cors';


const connectionString = "mongodb://localhost:27017/mentor-app";

const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}))
server.use(fileUpload({ createParentPath: true }))

mongoose.connect(connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true });

server.get('/', (req, res) => res.send('Hello'))


server.get('/search-mentors', (request, response) => {
    Mentors.find().populate('image').exec((error, mentors) => {
        if (error) response.json(error.message)
        response.json(mentors);
    });
    
})

server.post('/create-profile', (request, response) => {
    const mentor = new Mentors({
        mentor_name: request.body.mentor_name,
        competence: request.body.competence,
        buzzwords: request.body.buzzwords,
        email: request.body.email,
        phone: request.body.phone,
        about: request.body.about,
        image: request.body.image ? request.body.image._id : null,
        isActive: request.body.isActive
    })
    mentor.save()
        .then(mentor => response.json(mentor))
        .catch(error => response.json(error))
})

server.post('/upload', (request, response) => {
    const image = request.files.image;
    image.mv('./client/public/images/' + image.name)

    const imageToSave = new Image({ name: image.name});

    imageToSave
        .save()
        .then(savedImage => response.json(savedImage))
        .catch(error => response.json(error))
})

server.listen(4000);

