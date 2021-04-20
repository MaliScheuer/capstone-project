import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MentorsCard from "../components/MentorsCard/MentorsCard";
import Searchbar from "../components/Searchbar/Searchbar";

export default function SearchMentor({
  open,
  mentors,
  addToFavouriteMentor,
  favourites,
}) {
  const allActiveMentors = mentors.filter((mentor) => mentor.isActive === true);

  const initialSearchTerms = {
    competence: "",
    buzzwords: "",
  };

  const [searchterm, setSearchterm] = useState(initialSearchTerms);

  const handleChange = (event) => {
    event.preventDefault();
    const field = event.target;
    const value = field.value;

    setSearchterm({
      ...searchterm,
      [field.name]: value,
    });
  };

  function filterMentors(mentors, competence, buzzwords) {
    if (!competence && !buzzwords) {
      return mentors;
    }

    return mentors.filter((mentor) => {
      const mentorBuzzwords = mentor.buzzwords.join(",").toLowerCase();
      const mentorCompetence = mentor.competence;

      if (competence === "") {
        return mentorBuzzwords.includes(buzzwords.toLowerCase());
      }
      if (buzzwords === "") {
        return mentorCompetence.includes(competence);
      } else {
        return (
          mentorCompetence.includes(competence) ||
          mentorBuzzwords.includes(buzzwords.toLowerCase())
        );
      }
    });
  }

  const filteredMentors = filterMentors(
    allActiveMentors,
    searchterm.competence,
    searchterm.buzzwords
  );

  function showAll() {
    setSearchterm(initialSearchTerms);
  }

  const searchResults = filteredMentors.length;

  return (
    <>
      <Searchbar
        open={open}
        searchterm={searchterm}
        onhandleChange={handleChange}
        onShowAll={showAll}
      />

      <Result>Results: {searchResults}</Result>
      <Wrapper>
        {filteredMentors.map((mentor) => (
          <MentorsCard
            onAddToFavourites={() => addToFavouriteMentor(mentor)}
            open={open}
            key={mentor._id}
            mentor={mentor}
            isFavourite={favourites.some(
              (favourite) => mentor._id === favourite._id
            )}
          />
        ))}
      </Wrapper>

      {filteredMentors.length === 0 && (
        <NoResult>
          Your search term didn´t match any mentor. Please choose another field
          of competence or add a buzzword to expand your search.
        </NoResult>
      )}
    </>
  );
}

const Wrapper = styled.div`
  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 501px) and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const NoResult = styled.p`
  color: var(--petrol);
  margin: 2rem;
  font-weight: bold;
  border: solid 0.1rem var(--petrol);
  padding: 1rem;
  border-radius: 0.3rem;
  box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 35%);
`;

const Result = styled.p`
  color: var(--petrol);
  margin-left: 2rem;
  letter-spacing: 0.25rem;
  font-weight: bold;
`;

SearchMentor.propTypes = {
  open: PropTypes.bool,
  mentors: PropTypes.array,
  addToFavouriteMentor: PropTypes.func,
  favourites: PropTypes.array,
};
