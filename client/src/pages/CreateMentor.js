import Form from '../components/Form';
import { useState } from 'react';


export default function CreateMentor({ open }) {

    const [mentors, setMentors] = useState([]);

    const addMentor = () =>
        setMentors([...mentors]);

    return (
        <Form open={open} submitFunction={addMentor}></Form>
    )
}
