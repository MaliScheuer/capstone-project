import { useState } from "react";
import PropTypes from "prop-types";
import Form from "../components/Form/Form";

export default function CreateMentor({
  open,
  activeUser,
  editMode,
  setEditMode,
  mentors,
}) {
  const [postMentor, setPostMentor] = useState([]);
  console.log(activeUser, 111);

  //function updateBackend() {
  //if (activeUser === "") {
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
      .then((mentor) => setPostMentor(mentor))
      .catch((error) => console.error(error.message));
  };
  /*addToMentors();
    } else {
      const updateMentor = (mentor) => {
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
              .then((mentors) => setPostMentor(mentors))
              .catch((error) => console.error(error.message))
          )
          .catch((error) => console.error(error.message));
      };
      updateMentor();
    }
  }*/

  return (
    <Form
      editMode={editMode}
      setEditMode={setEditMode}
      open={open}
      mentors={mentors}
      postNewMentorToApi={addToMentors}
      activeUser={activeUser}
    ></Form>
  );
}

CreateMentor.propTypes = {
  open: PropTypes.bool,
};
