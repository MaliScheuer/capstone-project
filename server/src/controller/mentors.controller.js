import { Mentors } from "../models/mentors.model";

function getMentors(request, response) {
  Mentors.find()
    .populate("image")
    .exec((error, mentors) => {
      if (error) response.json(error.message);
      response.json(mentors);
    });
}

function getMentor(request, response) {
  const mentorId = request.params.mentorId;
  Mentors.findOne({ _id: mentorId })
    .populate("image")
    .then((mentor) => response.json(mentor))
    .catch((error) => console.error(error.message));
}

function editMentor(request, response) {
  const mentorId = request.params.mentorId;
  const updatedMentor = request.body;

  Mentors.findOneAndUpdate({ _id: mentorId }, updatedMentor, {
    new: true,
  }).then((result) => response.json(result));
}

export { getMentors, getMentor, editMentor };
