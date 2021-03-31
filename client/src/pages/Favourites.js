import PropTypes from "prop-types";
import styled from "styled-components";
import MentorsCard from "../components/MentorsCard/MentorsCard";

export default function Favourites({ favourites, removeFavourite, open }) {
  return (
    <>
      {favourites.map((mentor, index) => (
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
          You haven´t yet nominated any mentors to be part of your favourites.
        </NoFavourites>
      )}
    </>
  );
}

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
