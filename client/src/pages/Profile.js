import PropTypes from "prop-types";
import { useState } from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard";

export default function Profile({
  open,
  mentors,
  activeUser,
  setMentors,
  editMode,
  setEditMode,
}) {
  const activeMentor = mentors.find((mentor) => mentor._id === activeUser);

  return (
    <>
      <ProfileCard
        open={open}
        key={activeMentor._id}
        mentor={activeMentor}
        activeUser={activeUser}
        mentors={mentors}
        setMentors={setMentors}
        editMode={editMode}
        setEditMode={setEditMode}
      />
    </>
  );
}

Profile.propTypes = {
  open: PropTypes.bool,
  mentors: PropTypes.array,
  activeUser: PropTypes.string,
};
