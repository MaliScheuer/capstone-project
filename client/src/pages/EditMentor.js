import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import EditForm from "../components/EditForm/EditForm";

export default function EditMentor({ open, activeUser, mentors }) {
  let history = useHistory();

  /*const [activeMentor, setActiveMentor] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/mentors/" + activeUser)
      .then((response) => response.json())
      .then((mentor) => setActiveMentor(mentor));
  }, [activeMentor]);*/

  const updateMentorToApi = (mentor) => {
    fetch("http://localhost:4000/mentors/" + mentor._id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mentor_name: mentor.mentor_name,
        competence: mentor.competence,
        buzzwords: mentor.buzzwords,
        email: mentor.email,
        phone: mentor.phone,
        about: mentor.about,
        image: mentor.image,
        isActive: mentor.isActive,
      }),
    })
      .then((response) => response.json())
      .then(() => history.push("/profile"))
      .catch((error) => console.error(error.message));
  };

  return (
    <>
      <EditForm
        open={open}
        mentors={mentors}
        updateMentorToApi={updateMentorToApi}
        activeUser={activeUser}
      ></EditForm>
    </>
  );
}

EditMentor.propTypes = {
  open: PropTypes.bool,
};
