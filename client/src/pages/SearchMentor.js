import { useState, useEffect } from 'react';
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

    if (mentorsApi._id === mentorId) {
      const remainingFavourites = favourites.filter((mentor) => mentor._id !== mentorId)
      setFavourites(remainingFavourites)
    } else {
      setFavourites([...favourites, ...selectedFavourite]);
    }
    console.log(favourites)
  }


  return (
    <>

      {
        mentorsApi.map((mentor, index) => (
          <MentorsCard onAddToFavourite={isFavouriteMentor} open={open} key={index} mentor={mentor}></MentorsCard>))
      }
    </>

  )

}


