import CtaButton from '../components/CtaButton';
import styled from 'styled-components';

export default function Home() {

    return (
        <Wrapper>
            <CtaButton buttonText='Become a mentor'></CtaButton>
            <CtaButton buttonText='Find a mentor'></CtaButton>
        </Wrapper>
    )
}


const Wrapper = styled.section`
display: flex;
flex-direction: column;
align-content: center;
gap: 3rem;

`