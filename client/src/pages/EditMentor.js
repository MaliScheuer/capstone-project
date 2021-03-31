import { useState } from "react";
import PropTypes from "prop-types";
import EditForm from "../components/Form/EditForm";

export default function CreateMentor({
  open,
  activeUser,
  editMode,
  setEditMode,
  mentors,
  handleNoEditMode,
}) {
  const [updateMentor, setUpdateMentor] = useState([]);

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
      .then(
        fetch("http://localhost:4000/mentors")
          .then((result) => result.json())
          .then((mentors) => setUpdateMentor(mentors))
          .catch((error) => console.error(error.message))
      )
      .catch((error) => console.error(error.message));
  };

  return (
    <>
      <EditForm
        editMode={editMode}
        setEditMode={setEditMode}
        open={open}
        mentors={mentors}
        postNewMentorToApi={updateMentorToApi}
        activeUser={activeUser}
      ></EditForm>
    </>
  );
}

CreateMentor.propTypes = {
  open: PropTypes.bool,
};
