import mongoose from 'mongoose';

const mentorsSchema = {
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
        { type: String }
};
const Mentors = mongoose.model("mentor", mentorsSchema);



export default Mentors;



