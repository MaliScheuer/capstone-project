import CtaButton from '../components/CtaButton';
import styled from 'styled-components';

export default function Home() {

    return (
        <Wrapper>
            <CtaButton buttonText='Become a mentor'></CtaButton>
            <CtaButton buttonText='Find a mentor'></CtaButton>
            <h2>EVERY GREAT ACHIEVER IS INSPIRED BY A GREAT MENTOR</h2>
        </Wrapper>
    )
}


const Wrapper = styled.section`
margin: 7rem;
display: flex;
flex-direction: column;
align-content: center;
gap: 3rem;

h2{
    text-transform: uppercase
    

}

`