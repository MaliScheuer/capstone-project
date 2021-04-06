import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard";

export default function Profile({ open, activeUser, setMentors }) {
  const [activeMentor, setActiveMentor] = useState();

  useEffect(() => {
    fetch("http://localhost:4000/mentors/" + activeUser)
      .then((response) => response.json())
      .then((mentor) => setActiveMentor(mentor));
  }, [activeMentor]);

  return activeMentor ? (
    <>
      <ProfileCard
        open={open}
        key={activeMentor._id}
        mentor={activeMentor}
        activeUser={activeUser}
        setMentors={setMentors}
      />
    </>
  ) : null;
}

Profile.propTypes = {
  open: PropTypes.bool,
  mentors: PropTypes.array,
  activeUser: PropTypes.string,
};
