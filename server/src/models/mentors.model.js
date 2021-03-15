import mongoose from 'mongoose';

const mentorsSchema = {
    name: {
        type: String, required: true
    },
    email:
        { type: String, required: true }
};
const Mentors = mongoose.model("mentor", mentorsSchema);



export default Mentors;

