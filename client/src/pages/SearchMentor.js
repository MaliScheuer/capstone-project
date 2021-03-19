import PropTypes from 'prop-types';
import MentorsCard from '../components/MentorsCard';
import Searchbar from '../components/Searchbar';


export default function SearchMentor({ open, mentors, addToFavouriteMentor, favourites, handleSearch }) {

  const { search } = window.location;
const query = new URLSearchParams(search).get('competence' || 'search');

function filterMentors(mentors, query) {
  if (!query) {
      return mentors;
  }
  return mentors.filter((mentor) => {
      const mentorCompetence = mentor.competence
      const mentorBuzzwords = mentor.buzzwords
      
      return mentorCompetence.includes(query) 
  });
};

const filteredMentors = filterMentors(mentors, query);

  return (
    <>
    <Searchbar 
    open={open}/>
      {
        filteredMentors.map((mentor) => (
          <MentorsCard
            onAddToFavourites={() => addToFavouriteMentor(mentor)}
            open={open}
            key={mentor._id}
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