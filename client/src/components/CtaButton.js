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
text-transform: uppercase;
box-shadow: 0.2rem 0.2rem 0.2rem rgba(0,0,0, 35%);
cursor: pointer;
width: 230px;
`