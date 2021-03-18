import PropTypes from 'prop-types';
import MentorsCard from '../components/MentorsCard';


export default function SearchMentor({ open, mentors, addToFavouriteMentor, favourites }) {

  return (
    <>
      {
        mentors.map((mentor, index) => (
          <MentorsCard
            onAddToFavourites={() => addToFavouriteMentor(mentor)}
            open={open}
            key={index}
            mentor={mentor}
            isFavourite={favourites.some(favourite => mentor._id === favourite._id)}
          />
          ))
      }
    </>
  )
}

SearchMentor.propTypes = {
  open: PropTypes.bool,
  mentors: PropTypes.array,
  addToFavouriteMentor: PropTypes.func,
  favourites: PropTypes.array
}