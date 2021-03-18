import mongoose from 'mongoose';

const mentorsSchema = new mongoose.Schema({
    mentor_name: {
        type: String
    },
    competence: {
        type: String
    },
    buzzwords: [{
        type: String
    }],
    email: {
        type: String
    },
    phone: {
        type: String
    },
    about: {
        type: String
    },
    image:
    {
        type: String
    },
    isActive: {
        type: Boolean
    }
});
const Mentors = mongoose.model("mentor", mentorsSchema);



export default Mentors;



