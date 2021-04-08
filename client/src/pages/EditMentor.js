import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import loadFromLocal from "../lib/loadFromLocal";
import saveToLocal from "../lib/saveToLocal";
import EditForm from "../components/EditForm/EditForm";

export default function EditMentor({ open, activeUser, mentors }) {
  let history = useHistory();

  const activeMentor = mentors.find((mentor) => mentor._id === activeUser);

  const EDITMENTOR_KEY = "mentorToEdit";

  const [editMentor, setEditMentor] = useState(
    loadFromLocal(EDITMENTOR_KEY) ?? activeMentor
  );

  useEffect(() => {
    saveToLocal(EDITMENTOR_KEY, editMentor);
  }, [editMentor]);

  useEffect(() => {
    fetch("/mentors/" + activeUser)
      .then((response) => response.json())
      .then((mentor) => setEditMentor(mentor));
  }, [activeMentor]);

  const updateMentorToApi = (mentor) => {
    fetch("/mentors/" + mentor._id, {
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
      //.then((mentor) => setEditMentor(mentor))
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
        editMentor={editMentor}
        setEditMentor={setEditMentor}
      ></EditForm>
    </>
  );
}

EditMentor.propTypes = {
  open: PropTypes.bool,
  activeUser: PropTypes.string,
  mentors: PropTypes.array,
};
