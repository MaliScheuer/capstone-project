import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { ReactComponent as PhoneIcon } from '../icons/phone.svg';
import { ReactComponent as MailIcon } from '../icons/mail.svg';
import background from '../images/rectangle-petrol.png';

export default function ProfileCard({open}) {

    const [toggle, setToggle] = useState(true);
    const triggerToggle= () => {
        setToggle(!toggle)
    }

    return (

            <Section toggle={toggle} open={open} >
              <div>
                <SwitchIcon className={toggle ? 'active' : ''}>
                    <input onChange={triggerToggle} type="checkbox"/>
                    <Slider className={toggle ? 'active' : ''}/>
                </SwitchIcon>
                </div>
                <WrapperImageContact>
                <ProfileImg src='https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2017&q=80'></ProfileImg>
                <Name>Lisa Musterfrau</Name>
                <WrapperContact>
                    <PhoneMail><a href='tel:'><PhoneIcon /></a><p>0176 3965 2184</p></PhoneMail>
                    <PhoneMail><a href='mailto:'><MailIcon /></a><p>lisa.mustermann@gmail.com</p></PhoneMail>
                    </WrapperContact>
                </WrapperImageContact>
                <Subline>Field of Competence</Subline>
                <Competence>Finance and Taxes</Competence>
                <Subline>About Me</Subline>
                <About>Bavaria ipsum dolor sit amet da Kini Radi woaß Haberertanz und sei. Mim i sog ja nix, i red ja bloß liberalitas Bavariae nimmds, blärrd: Wolln Watschnpladdla a ganze Steckerleis Sauakraud unbandig resch hi sog i ghupft wia gsprunga auffi. Kummd und sei singd sowos wui.</About>
                <Subline>Skills</Subline>
                <WrapperBuzzwords>
                    <Buzzwords>Tax Consultant</Buzzwords>
                    <Buzzwords>Controlling</Buzzwords>
                    <Buzzwords>Income Tax</Buzzwords>
                    <Buzzwords>Corporate Tax</Buzzwords>
                    <Buzzwords>Self Employment</Buzzwords>
                </WrapperBuzzwords>
            </Section >
    )
}

const Section = styled.section`
position: relative;
opacity: ${({ open, toggle }) => open || !toggle ? '40%' : '100%'};
text-align: center;
padding: 1.2rem;
background: url(${background});
background-repeat: no-repeat;
background-size: cover;
height: 110px;
h3, h4{
    text-transform: uppercase;
    letter-spacing: 0.3rem;
 }
 p{
     margin-top: 0.3rem;
 }
`

const SwitchIcon = styled.label`
opacity: 50%;
position: relative;
top: -0.8rem;
left: 38vw;
display: inline-block;
background-color: white;
border-radius: 2rem;
width: 50px;
height: 28px;
input{
    opacity: 0;
    width: 0;
    height: 0;
  }
  &.active{
    opacity: 100%
  }
`
const Slider = styled.span`
position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: .4s;
  border-radius: 34px;
  &:before{
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 4px;
    background-color: var(--petrol);
    border-radius: 50%;
  }
  &.active{
    left: 20px;
  }
`
const WrapperImageContact = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: repeat(3, 1fr);
grid-gap: 0.5rem;
background: var(--petrol-light);
border-radius: 2.5rem;
padding: 1rem;
text-align: left;
`
const Name = styled.h4`
color: white;
align-self: center;
grid-row: span 2;
line-height: 1.5rem;
`

const WrapperContact = styled.section`
color: white;
grid-row: span 2;
p{
    margin: 0.1rem;
    font-size: 0.65rem;
    xfont-weight: bold;
}
`

const PhoneMail = styled.div`
display:flex;
gap: 1rem;
align-items: center;
margin-bottom: 0.5rem;
`

const ProfileImg = styled.img`
width: 140px;
height: 140px;
object-fit: cover;
border-radius: 5rem;
grid-row: span 3;
align-self: flex-end;
`

const Competence = styled.p`
color: var(--petrol);
font-weight: bold;
`

const About = styled.p`
font-size: 0.8rem;
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
background: var(--red);
color: white;
padding: 0.5rem;
border-radius: 0.7rem;
margin: 0;
`

const Subline = styled.h4`
margin-top: 1.5rem;
color: var(--petrol);
`

ProfileCard.propTypes = {
  open: PropTypes.bool
}