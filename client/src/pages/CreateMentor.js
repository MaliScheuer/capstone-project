import { useState } from 'react';
import Form from '../components/Form';


export default function CreateMentor({ open }) {

    const [mentors, setMentors] = useState([]);

    /*const addMentor = () => {
        setMentors([...mentors])
    };*/

    const addToMentors = (mentor) => {
        fetch('http://localhost:4000/create-profile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                mentor_name: mentor.mentor_name,
                competence: mentor.competence,
                buzzwords: mentor.buzzwords,
                email: mentor.email,
                phone: mentor.phone,
                about: mentor.about,
                image: mentor.image
            })
        })
            .then(result => result.json())
            .then(mentor => console.log(mentor))
            .catch(error => console.error(error.message));
    }


    return (
        <Form open={open} submitFunction={addToMentors}></Form>
    )
}
