import { useState } from "react";
import PropTypes from "prop-types";
import Form from "../components/Form/Form";

export default function CreateMentor({ open, activeUser, mentors }) {
  const [postMentor, setPostMentor] = useState([]);

  const addToMentors = (mentor) => {
    fetch("/create-profile", {
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
      .then((mentor) => setPostMentor(mentor))
      .catch((error) => console.error(error.message));
  };

  return (
    <>
      <Form
        open={open}
        mentors={mentors}
        postNewMentorToApi={addToMentors}
        activeUser={activeUser}
      ></Form>
    </>
  );
}

CreateMentor.propTypes = {
  open: PropTypes.bool,
  activeUser: PropTypes.string,
  mentors: PropTypes.array,
};
