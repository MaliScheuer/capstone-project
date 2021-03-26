import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import CtaButton from '../components/CtaButton';

export default function Home({ open }) {

    return (
        <Wrapper open={open}>
            <Link to='/create-profile'><CtaButton buttonText='Become a mentor'></CtaButton></Link>
            <Link to='/search-mentors'><CtaButton buttonText='Find a mentor'></CtaButton></Link>
            <h2>Every Great Achiever is inspired by a great mentor</h2>
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
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    line-height: 2.1rem;
}
`
Home.propTypes = {
    open: PropTypes.bool
}