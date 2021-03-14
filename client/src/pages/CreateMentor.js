import { useState } from 'react';
import Form from '../components/Form';


export default function CreateMentor({ open }) {

    const [mentors, setMentors] = useState([]);

    const addMentor = () =>
        setMentors([...mentors]);

    return (
        <Form open={open} submitFunction={addMentor}></Form>
    )
}
