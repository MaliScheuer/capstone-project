import PropTypes from 'prop-types';
import ProfileCard from '../components/ProfileCard';


export default function Profile({open}) {

    return(
        <ProfileCard open={open}/>
    )
}

Profile.propTypes = {
    open: PropTypes.bool
}