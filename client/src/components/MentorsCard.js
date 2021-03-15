import { useState } from 'react';
import styled from 'styled-components';
import CtaButton from './CtaButton';
import { ReactComponent as HeartIconPetrol } from '../icons/heart.petrol.svg'

export default function MentorsCard({ mentor, open }) {

    const [details, setDetails] = useState(false)

    return (
        <>
            <Section open={open}>
                <IconWrapper><HeartIconPetrol /></IconWrapper>
                <ProfileImg src='https://images.unsplash.com/photo-1541535881962-3bb380b08458?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80'></ProfileImg>
                <p>{mentor.image}</p>
                <h2>{mentor.mentor_name}</h2>
                <Competence>{mentor.competence}</Competence>
                <h4>About Me</h4>
                <About>{mentor.about}</About>
                <h4>Skills</h4>
                <p>{mentor.buzzwords}</p>
                <Button buttonText='Show more' />
            </Section >
        </>
    )
}

const Section = styled.section`
display:flex;
flex-direction:column;
align-items: center;
opacity: ${({ open }) => open ? '40%' : '100%'};
text-align: center;
margin: 2rem;
border-radius: 1rem;
box-shadow: 0.1rem 0.2rem 0.2rem 0.1rem rgba(0,0,0, 35%);
padding: 1rem;
 

h2, h4{
    text-transform: uppercase;
    letter-spacing: 0.3rem;
 }

`

const ProfileImg = styled.img`
width: 150px;
height: 150px;
object-fit: cover;
border-radius: 5rem;
`

const Competence = styled.h3`
color: var(--petrol);
text-transform: uppercase;
margin: 0.5rem;
letter-spacing: 0.3rem;
`

const About = styled.p`
font-size: 0.8rem;
`

const Button = styled(CtaButton)`
background: var(--petrol);
padding: 0.5rem;
`

const IconWrapper = styled.div`
display: flex;
align-self: flex-end;
margin-top: 0.7rem;
margin-right: 0.5rem;
`