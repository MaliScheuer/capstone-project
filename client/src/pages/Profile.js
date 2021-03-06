import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard";

export default function Profile({
  open,
  activeUser,
  setMentors,
  mentors,
  onReload,
}) {
  const [activeMentor, setActiveMentor] = useState();

  useEffect(() => {
    fetch("mentors/" + activeUser)
      .then((response) => response.json())
      .then((mentor) => setActiveMentor(mentor));
  }, [activeUser]);

  return activeMentor ? (
    <>
      <ProfileCard
        open={open}
        key={activeMentor._id}
        mentor={activeMentor}
        activeUser={activeUser}
        setMentors={setMentors}
        mentors={mentors}
        onReload={onReload}
      />
    </>
  ) : null;
}

Profile.propTypes = {
  open: PropTypes.bool,
  setMentors: PropTypes.func,
  activeUser: PropTypes.string,
};
