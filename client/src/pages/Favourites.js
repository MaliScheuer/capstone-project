import PropTypes from 'prop-types';
import MentorsCard from '../components/MentorsCard';

export default function Favourites({ favourites, removeFavourite, open }) {
    return (
        <>
            {
                favourites.map((mentor, index) => (
                    <MentorsCard
                        onAddToFavourites={() => removeFavourite(mentor._id)}
                        key={index}
                        mentor={mentor}
                        isFavourite
                        open={open}/>
                        ))
            }
        </>
    )
}

Favourites.propTypes = {
    favourites: PropTypes.array,
    removeFavourite: PropTypes.func
}