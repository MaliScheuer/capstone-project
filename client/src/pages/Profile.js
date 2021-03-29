import PropTypes from "prop-types";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import loadFromLocal from "../lib/loadFromLocal";

export default function Profile({ open, mentors, activeUser }) {
  /*const ACTIVE_USER_KEY = "activeUser";

  const [activeUser, setActiveUser] = useState(
    loadFromLocal(ACTIVE_USER_KEY) ?? {}
  );
  console.log(activeUser);*/

  //const active = loadFromLocal("activeUser");

  //console.log(active.id);

  const activeUserId = activeUser;
  //localStorage.getItem("activeUserTest");
  console.log(activeUserId, 111);
  //console.log(mentors[1]._id, 222);
  //const activeMentor = mentors.filter((mentor) => mentor._id === activeUserId);
  //console.log(activeMentor);

  function isActiveMentor(mentorList) {
    const active = mentorList.filter((mentor) => mentor._id === activeUserId);
    return active;
  }
  const activeMentor = isActiveMentor(mentors);

  return (
    <>
      {activeMentor.map((mentor) => (
        <ProfileCard open={open} key={mentor._id} mentor={mentor} />
      ))}
    </>
  );
}

Profile.propTypes = {
  open: PropTypes.bool,
};
