import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Buzzwords from './Buzzwords';
import isValidMentor from '../lib/validateFunctions';

export default function Form({ submitFunction, open }) {
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
    const [valid, setValid] = useState(false)

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
            setValid(true);
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
        <>
            <FormWrapper open={open} valid={valid} onSubmit={submitForm}>
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
                    value={newMentor.competence}>

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
                    type='tel'
                    name='phone'
                    placeholder='Enter your phone number'
                    onChange={handleChange}
                    value={newMentor.phone} />

                <label>About</label>
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


                <label>Add image
            </label>
                <input

                    type='file'
                    name='image'
                    placeholder='Add image'
                    onChange={handleChange}
                    value={newMentor.image}
                />

                <CtaButton valid={valid} type='submit'> Create Profile</CtaButton>


            </FormWrapper>
            {valid && <SuccessMessage> <p>Thanks for sharing your experience! Now your profile is part of our mentors network!</p>
                <a href='/search-mentors'>  <ProfileButton>Checkout other profiles</ProfileButton></a></SuccessMessage>}
        </>
    )
}



const FormWrapper = styled.form`
display:flex;
flex-direction: column;
margin: 1.2rem 2.3rem;
gap: 0.2rem;
opacity: ${({ open, valid }) => open || valid ? '40%' : '100%'};


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

/*input:valid, 
select:valid, 
textarea:valid{
  box-shadow: 0 0 5px 1px var(--petrol);
}*/

textarea{
    height: 6rem;
    padding: 0.8rem;
}

label{
    margin-left: 0.5rem;
    color: var(--petrol);
}
`

const CtaButton = styled.button`
background: ${({ valid }) => !valid ? 'var(--red)' : 'var(--lightgrey)'};
padding: 1rem;
border-radius: 0.4rem;
border: none;
color: white;
text-transform: uppercase;
box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 35%);
cursor: pointer;
width: 230px;
font-size: 1.1rem;
align-self: center;
`

const SuccessMessage = styled.div`
background: var(--petrol);
color: white;
padding: 1rem;
margin: 2rem;
position: relative;
border-radius: 0.3rem;
`

const ProfileButton = styled.button`
border: none; 
outline: none;
border-radius: 0.3rem;
color: var(--petrol);
padding: 0.5rem;
margin-top: 1rem;
background: var(--lightgrey);
letter-spacing: 0.1rem;
font-size: 0.7rem;
text-transform: uppercase;
cursor: pointer;
`

Form.propTypes = {
    submitFunction: PropTypes.func
}

