import styled from 'styled-components';
import CtaButton from './CtaButton';
import Buzzwords from './Buzzwords';
import isValidMentor from '../lib/validateFunctions';
import { useState } from 'react';


export default function Form({ submitFunction }) {
    const initialMentor =
    {
        mentor_name: '',
        competence: '',
        buzzwords: [],
        email: '',
        phone: '',
        about: '',
        image: ''
    }

    const [newMentor, setNewMentor] = useState(initialMentor);

    const handleChange = event => {
        const field = event.target;
        const value = field.value;

        setNewMentor({
            ...newMentor,
            [field.name]: value
        })
    }


    function submitForm(event) {
        event.preventDefault();
        if (isValidMentor(newMentor)) {
            submitFunction(newMentor);
            setNewMentor(initialMentor);
        }
    }


    const addBuzzword = buzzword => {
        if (buzzword.length >= 1) {
            setNewMentor({
                ...newMentor,
                buzzwords: [...newMentor.buzzwords, buzzword]
            })
        }
    }

    function deleteBuzzword(buzzwordToDelete) {
        const remainingBuzzwords = newMentor.buzzwords.filter(
            (buzzword) => buzzwordToDelete !== buzzword);
        setNewMentor({ ...newMentor, buzzwords: remainingBuzzwords })
    }

    function deleteLastBuzzword() {
        const remainingBuzzwords = newMentor.buzzwords.filter((_, index) =>
            index !== newMentor.buzzwords.length - 1)
        setNewMentor({
            ...newMentor,
            buzzwords: remainingBuzzwords
        })
    }


    return (
        <FormWrapper onSubmit={submitForm}>
            <input
                type='text'
                name='mentor_name'
                placeholder='Enter your full name'
                onChange={handleChange}
                value={newMentor.mentor_name} />

            <select
                type='text'
                name='competence'
                onChange={handleChange}
                value={newMentor.competence} >

                <option value=''>Choose field of competence</option>
                <option value='Architecture and Engineering'>Architecture and Engineering</option>
                <option value='Agriculture and Food'>Agriculture and Food</option>
                <option value='Arts and Entertainment'>Arts and Entertainment</option>
                <option value='Business, Management and Administration'>Business, Management and Administration</option>
                <option value='Education and Training'>Education and Training</option>
                <option value='Health and Medicine'>Health and Medicine</option>
                <option value='Law and Public Policy'>Law and Public Policy</option>
                <option value='Sales, Marketing and Communications'>Sales, Marketing and Communications</option>
                <option value='Science and Technology'>Science and Technology</option>
            </select>

            <Buzzwords
                buzzwords={newMentor.buzzwords}
                onCreateBuzzword={addBuzzword}
                onDeleteBuzzword={deleteBuzzword}
                onDeleteLastBuzzword={deleteLastBuzzword}>
            </Buzzwords>


            <input
                type='email'
                name='email'
                placeholder='Enter your email'
                onChange={handleChange}
                value={newMentor.email} />

            <input
                type='text'
                name='phone'
                placeholder='Enter your phone number'
                onChange={handleChange}
                value={newMentor.phone} />

            <p><label>About</label></p>
            <textarea
                minLength="250"
                maxLength="750"
                type='text'
                name='about'
                placeholder='Tell the world about yourself,
                why you wanna become a mentor
                and in which areas you can help
                (use 250 - 750 characters)'
                onChange={handleChange}
                value={newMentor.about} />


            <p><label>Add image
            </label></p>
            <input

                type='file'
                name='image'
                placeholder='Add image'
                onChange={handleChange}
                value={newMentor.image}
            />

            <CtaButton type='submit' buttonText='Create Profile'></CtaButton>

        </FormWrapper>
    )
}

const FormWrapper = styled.form`
display:flex;
flex-direction: column;
margin: 1.2rem 2.3rem;
gap: 0.4rem;



input, select, textarea{
margin-bottom: 1rem;
border-radius: 1rem;
box-shadow: 0.1rem 0.2rem 0.2rem 0.1rem rgba(0,0,0, 35%);
border: none;
padding: 0.6rem;
background: white;
outline: none;
font-style: italic;
color: var(--petrol);
}

textarea{
    height: 5rem;
    padding: 0.8rem;
}

label{
    margin-left: 0.5rem;
}
p{
    color: var(--petrol);
    margin: 0.1rem 0;
    }
`

