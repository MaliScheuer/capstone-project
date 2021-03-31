import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
      <Link to="/profile">
        <GoBack onClick={handleNoEditMode}>Go back</GoBack>
      </Link>

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

const GoBack = styled.button`
  margin: 1rem;
  border: none;
  background: none;
  box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 35%);
  border-radius: 0.3rem;
  color: var(--petrol);
  padding: 0.3rem 1rem;
  font-size: 0.7rem;
  font-weight: bold;
  position: fixed;
  top: 19vh;
  left: 0;
`;

CreateMentor.propTypes = {
  open: PropTypes.bool,
};
