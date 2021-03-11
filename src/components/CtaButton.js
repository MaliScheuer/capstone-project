import styled from 'styled-components';

export default function CtaButton({ buttonText }) {

    return (
        <Button>{buttonText}</Button>
    )
}

const Button = styled.button`
background: var(--red);
padding: 1rem;
border-radius: 0.4rem;
border: none;
color: white;
`