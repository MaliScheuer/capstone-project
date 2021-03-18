import mongoose from 'mongoose';

const mentorsSchema = new mongoose.Schema({
    mentor_name: {
        type: String, required: true
    },
    competence: {
        type: String, required: true
    },
    buzzwords: [{
        type: String, required: true
    }],
    email: {
        type: String, required: true
    },
    phone: {
        type: String, required: true
    },
    about: {
        type: String, required: true
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



