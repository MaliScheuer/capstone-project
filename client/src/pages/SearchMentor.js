import PropTypes from 'prop-types';
import MentorsCard from '../components/MentorsCard';
import Searchbar from '../components/Searchbar';


export default function SearchMentor({ open, mentors, addToFavouriteMentor, favourites}) {

  /*const { search } = window.location;
const query = new URLSearchParams(search).getAll('competence', 'search' );*/


const params = new URLSearchParams(window.location.search.substring(1));
const competence = params.get("competence");
const buzzwords = params.get("buzzwords");
console.log(competence);
console.log(buzzwords)

function filterMentors(mentors, competence, buzzwords) {
  if(!competence && !buzzwords) {
    return mentors
  }
return mentors.filter((mentor) => {
    const mentorBuzzwordsLower = mentor.buzzwords.toLocaleString().toLowerCase().split(',')
    const mentorBuzzwordsUpper = mentor.buzzwords.toLocaleString().toUpperCase().split(',')
    const mentorCompetence = mentor.competence

    return mentorCompetence.includes(competence) ||mentorBuzzwordsLower.includes(buzzwords) ||mentorBuzzwordsUpper.includes(buzzwords)
});
}

const filteredMentors = filterMentors(mentors, competence, buzzwords);

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