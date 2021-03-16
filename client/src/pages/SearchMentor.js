import { useState, useEffect } from 'react';
import MentorsCard from '../components/MentorsCard';


export default function SearchMentor({ open }) {

  const [mentorsApi, setMentorsApi] = useState([]);


  useEffect(() => {
    fetch('http://localhost:4000/search-mentors')
      .then(result => result.json())
      .then(mentors => setMentorsApi(mentors))
      .catch(error => console.error(error.message))
  }, []);



  return (
    <>

      {
        mentorsApi.map((mentor, index) => (
          <MentorsCard open={open} key={index} mentor={mentor}></MentorsCard>))
      }
    </>

  )

}


