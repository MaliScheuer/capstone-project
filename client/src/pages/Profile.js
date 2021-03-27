import PropTypes from "prop-types";
import { useState } from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import loadFromLocal from "../lib/loadFromLocal";

export default function Profile({ open, mentors }) {
  /*const ACTIVE_USER_KEY = "activeUser";

  const [activeUser, setActiveUser] = useState(
    loadFromLocal(ACTIVE_USER_KEY) ?? {}
  );

  console.log(activeUser);*/

  const activeUserId = localStorage.getItem("activeUser");
  console.log(activeUserId);

  const activeMentor = mentors.filter((mentor) => mentor._id === activeUserId);

  console.log(activeMentor);

  return (
    <>
      {mentors.map((mentor) => (
        <ProfileCard open={open} key={mentor._id} mentor={mentor} />
      ))}
    </>
  );
}

Profile.propTypes = {
  open: PropTypes.bool,
};
