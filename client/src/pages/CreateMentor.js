import { useState } from "react";
import PropTypes from "prop-types";
import Form from "../components/Form/Form";

export default function CreateMentor({ open }) {
  const [mentors, setMentors] = useState([]);

  const addToMentors = (mentor) => {
    fetch("http://localhost:4000/create-profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mentor_name: mentor.mentor_name,
        competence: mentor.competence,
        buzzwords: mentor.buzzwords,
        email: mentor.email,
        phone: mentor.phone,
        about: mentor.about,
        image: mentor.image,
        isActive: true,
      }),
    })
      .then((result) => result.json())
      .then((mentor) => setMentors(mentor))
      .catch((error) => console.error(error.message));
  };

  return <Form open={open} postNewMentorToApi={addToMentors}></Form>;
}

CreateMentor.propTypes = {
  open: PropTypes.bool,
};
