import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
//import cors from 'cors';


const connectionString = "mongodb://localhost:27017/mentor-app";

const server = express();
server.use(bodyParser.json());
//server.use(cors());

server.get('/', (req, res) => res.send('Hello'))

mongoose.connect(connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true });

server.listen(4000);