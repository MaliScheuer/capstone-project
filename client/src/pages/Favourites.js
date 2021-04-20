import PropTypes from "prop-types";
import styled from "styled-components";
import MentorsCard from "../components/MentorsCard/MentorsCard";

export default function Favourites({ favourites, removeFavourite, open }) {
  const allActiveFavourites = favourites.filter(
    (mentor) => mentor.isActive === true
  );

  return (
    <Wrapper>
      {allActiveFavourites.map((mentor, index) => (
        <MentorsCard
          onAddToFavourites={() => removeFavourite(mentor._id)}
          key={index}
          mentor={mentor}
          isFavourite
          open={open}
        />
      ))}
      {favourites.length === 0 && (
        <NoFavourites>
          You haven´t nominated any mentors to be part of your favourites yet.
        </NoFavourites>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media (min-width: 801px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 501px) and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const NoFavourites = styled.p`
  margin: 2rem;
  color: var(--petrol);
  font-weight: bold;
`;

Favourites.propTypes = {
  favourites: PropTypes.array,
  removeFavourite: PropTypes.func,
  open: PropTypes.bool,
};
