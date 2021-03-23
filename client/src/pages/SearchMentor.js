import PropTypes from 'prop-types';
import MentorsCard from '../components/MentorsCard';
import Searchbar from '../components/Searchbar';


export default function SearchMentor({ open, mentors, addToFavouriteMentor, favourites}) {

const params = new URLSearchParams(window.location.search);
const competenceInput = params.get("competence");
const buzzwordsInput = params.get("buzzwords");

function filterMentors(mentors, competence, buzzwords) {
  if(!competence && !buzzwords) {
    return mentors
  }
  return mentors.filter((mentor) => {
    const mentorBuzzwords = mentor.buzzwords.toString().toLowerCase()
    const mentorCompetence = mentor.competence

    if(competence === '') {
      return mentorBuzzwords.includes(buzzwords.toLowerCase())
    }
    if (buzzwords === '') {
      return mentorCompetence.includes(competence)
    }
    else {
    return mentorCompetence.includes(competence) ||  mentorBuzzwords.includes(buzzwords.toLowerCase())
    }
});
}

const filteredMentors = filterMentors(mentors, competenceInput, buzzwordsInput);

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