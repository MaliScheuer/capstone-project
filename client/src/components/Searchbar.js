import styled from 'styled-components';
import CtaButton from './CtaButton';

export default function Searchbar({open}) {


    return(
        <>
        <SearchWrapper open={open} >
            <select
                    type='text'
                    name='competence'>
                    <option value='Choose field of competence'>Choose field of competence</option>
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

                <input
                id='header-search'
                type='text'
                name='buzzwords'
                placeholder='Enter skill or buzzword...'
                 />
            <CtaButton
                buttonText='Find your mentor'
            />
        </SearchWrapper>

        <Result>Results</Result>
        </>
    )
}

const SearchWrapper = styled.form`
display:flex;
flex-direction: column;
align-items: center;
margin: 1.2rem 2.3rem;
gap: 0.2rem;
opacity: ${({ open, valid }) => open || valid ? '40%' : '100%'};
background: var(--petrol-light);
box-shadow: 0.1rem 0.1rem 0.2rem 0.1rem rgba(0,0,0, 35%);
border-radius: 1rem;
padding: 1rem 2rem; 


input, select{
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

input{
    padding-right: 8.8rem;
}
`

const Result = styled.p`
color: var(--petrol);
margin-left: 2rem;
letter-spacing: 0.25rem;
font-weight: bold;
`