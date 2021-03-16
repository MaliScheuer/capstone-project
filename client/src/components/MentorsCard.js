import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as HeartIconPetrol } from '../icons/heart.petrol.svg';
import background from '../images/graphicblue.png'
import CtaButton from './CtaButton';

export default function MentorsCard({ mentor, open }) {

    const [details, setDetails] = useState(false)

    return (
        <Wrapper open={open}>
            <Section >
                <IconWrapper><HeartIconPetrol /></IconWrapper>
                <ProfileImg src='https://images.unsplash.com/photo-1541535881962-3bb380b08458?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80'></ProfileImg>
                <p>{mentor.image}</p>
                <h2>{mentor.mentor_name}</h2>
                <Competence>{mentor.competence}</Competence>
                <h4>About Me</h4>
                <About details={details}>{mentor.about}</About>
                <h4>Skills</h4>
                <WrapperBuzzwords>
                    {mentor.buzzwords.map((buzzword, index) => (
                        <Buzzwords key={index}>{buzzword}</Buzzwords>
                    ))}
                </WrapperBuzzwords>
                <Button clickHandler={() => setDetails(!details)} buttonText='Show more' />
            </Section >
        </Wrapper>
    )
}

const Wrapper = styled.section`
background: url(${background});
opacity: ${({ open }) => open ? '40%' : '100%'};
`

const Section = styled.section`
background: white;
display:flex;
flex-direction:column;
align-items: center;
text-align: center;
margin: 1.5rem;
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
margin-bottom: 1rem;
letter-spacing: 0.3rem;
`

const About = styled.p`
font-size: 0.8rem;
height: ${(props) => props.details ? 'auto' : '2.4rem'} ;
overflow-y: hidden;
box-shadow: 0 4px 7px -7px rgba(200, 200, 200, 0.6);
`

const Button = styled(CtaButton)`
background: var(--petrol);
`

const WrapperBuzzwords = styled.section`
display:flex;
flex-wrap: wrap;
justify-content: center;
gap: 1rem;
margin-top: 0.5rem;
margin-bottom: 0.8rem;
`

const Buzzwords = styled.p`
background: var(--petrol-light);
color: white;
padding: 0.5rem;
border-radius: 0.7rem;
margin: 0;
`

const IconWrapper = styled.div`
display: flex;
align-self: flex-end;
margin-top: 0.7rem;
margin-right: 0.5rem;
`