import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Mentors from './models/mentors.model.js'
import cors from 'cors';


const connectionString = "mongodb://localhost:27017/mentor-app";

const server = express();
server.use(bodyParser.json());
server.use(cors());

mongoose.connect(connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true });

server.get('/', (req, res) => res.send('Hello'))


server.get('/search-mentors', (request, response) => {
    Mentors.find().then(mentors => response.json(mentors))
})

server.post('/create-profile', (request, response) => {
    console.log(request, 'POST HERE')
    const mentor = new Mentors({
        mentor_name: request.body.mentor_name,
        competence: request.body.competence,
        buzzwords: request.body.buzzwords,
        email: request.body.email,
        phone: request.body.phone,
        about: request.body.about,
        image: request.body.image,
        isActive: request.body.isActive
    })
    console.log(mentor)
    mentor.save()
        .then(mentor => response.json(mentor))
        .catch(error => response.json(error))
})



server.listen(4000);

