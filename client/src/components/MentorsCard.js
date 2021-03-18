import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ReactComponent as HeartIconPetrol } from '../icons/heart.petrol.svg';
import { ReactComponent as PhoneIcon } from '../icons/phone.svg';
import { ReactComponent as MailIcon } from '../icons/mail.svg';
import background from '../images/graphicblue.png';
import CtaButton from './CtaButton';

export default function MentorsCard({ mentor, open, onAddToFavourites, isFavourite }) {

    const [details, setDetails] = useState(false);


    return (
        <Wrapper open={open}>
            <Section >
                <IconWrapper isFavourite={isFavourite}><HeartIconPetrol onClick={onAddToFavourites} /></IconWrapper>
                <ProfileImg src='https://images.unsplash.com/photo-1541535881962-3bb380b08458?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80'></ProfileImg>
                <WrapperContact details={details}>
                    <PhoneMail><a href='tel:'><PhoneIcon /></a><p>{mentor.phone}</p></PhoneMail>
                    <PhoneMail><a href='mailto:'><MailIcon /></a><p>{mentor.email}</p></PhoneMail>
                </WrapperContact>
                <h2>{mentor.mentor_name}</h2>
                <Competence>{mentor.competence}</Competence>
                <Subline>About Me</Subline>
                <About details={details}>{mentor.about}</About>
                <Subline>Skills</Subline>
                <WrapperBuzzwords details={details}>
                    {mentor.buzzwords.map((buzzword, index) => (
                        <Buzzwords key={index}>{buzzword}</Buzzwords>
                    ))}
                </WrapperBuzzwords>
                <Button clickHandler={() => setDetails(!details)} buttonText={details ? 'Show less' : 'Show more'} />
            </Section >
        </Wrapper >
    )
}

const Wrapper = styled.section`
background: url(${background});
opacity: ${({ open }) => open ? '40%' : '100%'};

p{
    margin: 0;
}
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

const WrapperContact = styled.section`
height: ${(props) => props.details ? 'auto' : '0'} ;
overflow-y: hidden;
background: var(--petrol-light);
color: white;
border-radius: 0.5rem;
padding: ${(props) => props.details ? '0.7rem 2rem' : '0'};
margin: 1rem auto;


p{
    margin: 0.2rem;
    font-size: 0.8rem;
}
`

const PhoneMail = styled.div`
display:flex;
gap: 1rem;
margin-bottom: 0.5rem;
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
letter-spacing: 0.1rem;
font-size: 1rem;
`

const About = styled.p`
font-size: 0.8rem;
height: ${(props) => props.details ? 'auto' : '2.4rem'} ;
overflow-y: hidden;
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
height: ${(props) => props.details ? 'auto' : '2.4rem'} ;
overflow-y: hidden;
`

const Buzzwords = styled.p`
background: var(--petrol-light);
color: white;
padding: 0.5rem;
border-radius: 0.7rem;
margin: 0;
`

const Subline = styled.h4`
margin: 0.5rem auto;
`

const IconWrapper = styled.button`
display: flex;
align-self: flex-end;
margin-top: 0.7rem;
margin-right: 0.5rem;
background: none;
border:none;
cursor:pointer;
outline: white;

svg{
    path {
    fill: ${(props) => props.isFavourite ? 'var(--petrol)' : 'white'};
}
}
`
MentorsCard.propTypes = {
    mentor: PropTypes.object,
    open: PropTypes.bool,
    onAddToFavourites: PropTypes.func,
    isFavourite: PropTypes.bool
}