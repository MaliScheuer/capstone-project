import { ReactComponent as HomeIcon } from "../icons/home.svg";
import { ReactComponent as SearchSmallIcon } from "../icons/search.small.svg";
import { ReactComponent as ProfileIcon } from "../icons/profile.small.svg";
import { ReactComponent as HeartSmallIcon } from "../icons/heart.small.svg";
import { ReactComponent as NewProfileIcon } from "../icons/newprofile.small.svg";
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function Navigation({ open, setOpen }) {

    return (
        <StyledNavigation open={open}>
            <PseudoButton open={open} onClick={() => setOpen(!open)}>
                &#10005;</PseudoButton>
            <a href='/'>
                <HomeIcon />
Home</a>
            <a href='/search-mentors'>
                <SearchSmallIcon />

            Find a mentor</a>
            <a href='/profile'>
                <ProfileIcon />
                Profile</a>
            <a href='/favourites'>
                <HeartSmallIcon />
Favourites</a>

            <a href='/create-profile'>
                <NewProfileIcon />
Become a mentor</a>
        </StyledNavigation>
    )
}

const StyledNavigation = styled.nav`
background: var(--petrol);
display:flex;
flex-direction: column;
gap: 1.7rem;
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
height: 100vh;
text-align: left;
padding: 2rem;
position: absolute;
top: 0;
left: 0;
transition: transform 0.4s ease-in-out;
z-index: 1;

a{
text-transform: uppercase;
text-decoration: none;
color: white;
letter-spacing: 0.2rem;
}

svg{
    margin-right: 1rem;

}
`
const PseudoButton = styled.button`
background: none;
border: none;
text-align: left;
color: white;
outline: none;
`

Navigation.propTypes = {
    setOpen: PropTypes.func,
    open: PropTypes.bool
}


