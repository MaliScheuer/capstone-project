import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as BurgerIcon } from "../../icons/burger.svg";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";
import { ReactComponent as HeartIcon } from "../../icons/heart.svg";

export default function Header({ open, setOpen, headline }) {
  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <Wrapper open={open}>
      <PseudoButton onClick={openMenu} data-testid="burgermenu">
        <BurgerIcon />
      </PseudoButton>

      <IconsWrapper>
        <Link to="/search-mentors" data-testid="search">
          <SearchIcon />
        </Link>
        <Link to="/favourites" data-testid="favourites">
          <HeartIcon />
        </Link>
      </IconsWrapper>
      <h1>{headline}</h1>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--petrol);
  height: 22vh;
  padding-top: 2rem;
  padding-left: 1.5rem;
  color: white;
  opacity: ${({ open }) => (open ? "40%" : "100%")};

  @media (min-width: 600px) {
    height: 15vh;
  }

  @media (min-width: 1025px) {
    height: 25vh;
  }

  h1 {
    margin-top: 0.4rem;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    font-size: 1.3rem;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.3rem;
  padding-right: 1rem;

  a {
    margin-left: 0.3rem;
  }
`;

const PseudoButton = styled.button`
  background: none;
  border: none;
`;

Header.propTypes = {
  headline: PropTypes.string,
  setOpen: PropTypes.func,
  open: PropTypes.bool,
};
