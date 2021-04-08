import { Mentors } from "../models/mentors.model";

function postMentor(request, response) {
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
}

export { postMentor };
