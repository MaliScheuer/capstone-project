import CtaButton from '../components/CtaButton';
import styled from 'styled-components';

export default function Home({ open }) {

    return (
        <Wrapper open={open}>
            <a href='/create-profile'><CtaButton buttonText='Become a mentor'></CtaButton></a>
            <a href='/search-mentors'><CtaButton buttonText='Find a mentor'></CtaButton></a>
            <h2>EVERY GREAT ACHIEVER IS INSPIRED BY A GREAT MENTOR</h2>
        </Wrapper>
    )
}


const Wrapper = styled.section`
margin: 7rem;
display: flex;
flex-direction: column;
align-items: center;
gap: 3rem;
opacity: ${({ open }) => open ? '40%' : '100%'};

h2{
    text-transform: uppercase
    

}

`