import Form from '../components/Form';
import { useState } from 'react';


export default function CreateMentor() {

    const [mentors, setMentors] = useState([]);

    const addMentor = () =>
        setMentors([...mentors]);

    return (
        <Form submitFunction={addMentor}></Form>
    )
}