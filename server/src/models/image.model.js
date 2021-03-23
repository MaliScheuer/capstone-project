import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    name: { type: String }
})

const Image = mongoose.model("image", imageSchema);

export default Image;
