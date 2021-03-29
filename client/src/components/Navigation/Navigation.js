import { ReactComponent as HomeIcon } from "../../icons/home.svg";
import { ReactComponent as SearchSmallIcon } from "../../icons/search.small.svg";
import { ReactComponent as ProfileIcon } from "../../icons/profile.small.svg";
import { ReactComponent as HeartSmallIcon } from "../../icons/heart.small.svg";
import { ReactComponent as NewProfileIcon } from "../../icons/newprofile.small.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

export default function Navigation({ open, setOpen }) {
  return (
    <StyledNavigation open={open}>
      <PseudoButton open={open} onClick={() => setOpen(!open)}>
        &#10005;
      </PseudoButton>

      <Link to="/home" open={open} onClick={() => setOpen(!open)}>
        <HomeIcon open={open} onClick={() => setOpen(!open)} />
        Home
      </Link>
      <Link to="/search-mentors" open={open} onClick={() => setOpen(!open)}>
        <SearchSmallIcon open={open} onClick={() => setOpen(!open)} />
        Find a mentor
      </Link>
      <Link to="/create-profile" open={open} onClick={() => setOpen(!open)}>
        <NewProfileIcon open={open} onClick={() => setOpen(!open)} />
        Become a mentor
      </Link>
      <Link to="/favourites" open={open} onClick={() => setOpen(!open)}>
        <HeartSmallIcon open={open} onClick={() => setOpen(!open)} />
        Favourites
      </Link>
      <Link to="/profile" open={open} onClick={() => setOpen(!open)}>
        <ProfileIcon open={open} onClick={() => setOpen(!open)} />
        Your Profile
      </Link>
      <Link to="/" open={open} onClick={() => setOpen(!open)}>
        <Logout>Logout</Logout>
      </Link>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  background: var(--petrol);
  display: flex;
  flex-direction: column;
  gap: 1.7rem;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 60vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.4s ease-in-out;
  z-index: 1;

  a {
    text-transform: uppercase;
    text-decoration: none;
    color: white;
    letter-spacing: 0.2rem;
  }

  svg {
    margin-right: 1rem;
  }
`;
const PseudoButton = styled.button`
  background: none;
  border: none;
  text-align: left;
  color: white;
  outline: none;
`;

const Logout = styled.p`
  position: relative;
  top: 5rem;
  color: var(--red);
  font-weight: bold;
`;

Navigation.propTypes = {
  setOpen: PropTypes.func,
  open: PropTypes.bool,
};
