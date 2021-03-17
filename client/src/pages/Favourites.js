import MentorsCard from '../components/MentorsCard';
import SearchMentor from './SearchMentor';

export default function Favourites({ favourites, onAddToFavourites }) {

    return (
        <>
            {
                favourites.map((mentor, index) => (
                    <MentorsCard onAddToFavourites={onAddToFavourites} key={index} mentor={mentor} ></MentorsCard>))
            }
        </>
    )


}