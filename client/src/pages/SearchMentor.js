import { useState, useEffect } from 'react';
import { Route, Switch, match } from 'react-router-dom';
import Header from '../components/Header';
import MentorsCard from '../components/MentorsCard';


export default function SearchMentor({ open }) {

  const [mentorsApi, setMentorsApi] = useState([]);
  const [favourites, setFavourites] = useState([]);



  useEffect(() => {
    fetch('http://localhost:4000/search-mentors')
      .then(result => result.json())
      .then(mentors => setMentorsApi(mentors))
      .catch(error => console.error(error.message))
  }, []);

  function isFavouriteMentor(mentorId) {
    const selectedFavourite = mentorsApi.filter((mentor) => mentor._id === mentorId)
    setFavourites([...favourites, ...selectedFavourite]);

    if (mentorsApi._id === mentorId) {
      const remainingFavourites = favourites.filter((mentor) => mentor._id !== mentorId)
      setFavourites(remainingFavourites)
    } else {
      setFavourites([...favourites, ...selectedFavourite]);
    }
    console.log(favourites)
  }

  function removeFavourite(idToRemove) {
    const remainingFavourites = favourites.filter((mentor) => mentor._id !== idToRemove)
    setFavourites(remainingFavourites);
  }



  return (
    <>
      {
        mentorsApi.map((mentor, index) => (
          <MentorsCard open={open} key={index} mentor={mentor} onAddToFavourites={() => isFavouriteMentor(mentor._id)}></MentorsCard>))
      }

      {
        favourites.map((mentor, index) => (
          <MentorsCard open={open} key={index} mentor={mentor} onAddToFavourites={() => removeFavourite(mentor._id)}></MentorsCard>))
      }
    </>
  )

}


