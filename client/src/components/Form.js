import styled from 'styled-components';
import CtaButton from './CtaButton'
import { useState } from 'react';

export default function Form() {
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




    return (
        <FormWrapper>


            <input
                type='text'
                name='product_name'
                placeholder='Enter your full name'
                //onChange={handleChange}
                value={newMentor.mentor_name} />


            <select
                type='text'
                name='competence'
                //onChange={handleChange}
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

            <BuzzwordWrapper>
                <input

                    type='text'
                    name='buzzwords'
                    placeholder='Enter skill or buzzword'
                    //onChange={handleChange}
                    value={newMentor.buzzwords} />
                <button>Add</button>
            </BuzzwordWrapper>

            <input
                type='email'
                name='email'
                placeholder='Enter your email'
                //onChange={handleChange}
                value={newMentor.email} />

            <input
                type='text'
                name='phone'
                placeholder='Enter your phone number'
                //onChange={handleChange}
                value={newMentor.phone} />

            <label>About</label>
            <textarea
                minLength="250"
                maxlength="1000"
                type='text'
                name='about'
                placeholder='Tell the world about yourself,
                why you wanna become a mentor
                and in which areas you can help
                (use 250 -1.000 characters)'
                //onChange={handleChange}
                value={newMentor.about} />


            <label> Add image
                <input

                    type='file'
                    name='image'
                    placeholder='Add image'
                    //onChange={handleChange}
                    value={newMentor.image}


                />


            </label>

            <CtaButton buttonText='Create Profile'></CtaButton>

        </FormWrapper>
    )
}

const FormWrapper = styled.form`
display:flex;
flex-direction: column;
margin: 1.2rem 2.3rem;
gap: 0.7rem;


input, select, textarea{
margin-bottom: 1rem;
border-radius: 1rem;
box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0, 35%);
border: none;
padding: 0.8rem;
background: white;
color: var(--petrol);
}
`

const BuzzwordWrapper = styled.section`
display:grid;
grid-template-columns: 4fr 1fr;
gap: 1rem;

button{
    border: none;
    background: var(--petrol-light);
    color: white;
    box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0, 35%);
    border-radius: 1rem;
    height: 70%;
}
`