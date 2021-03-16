import MentorsCard from '../components/MentorsCard';

export default function Favourites() {

    const [favourites, setFavourites] = useState([]);

    /*function isFavouriteMentor(mentorId) {
        const selectedFavourite = mentorsApi.filter((mentor) => mentor._id === mentorId)

        if (mentorsApi._id === mentorId) {
            const remainingFavourites = favourites.filter((mentor) => mentor._id !== mentorId)
            setFavourites(remainingFavourites)
        } else {
            setFavourites([...favourites, ...selectedFavourite]);
        }
        console.log(favourites)
    }*/


    return (

        <>
            {
                favourites.map((mentor, index) => (
                    <MentorsCard onAddToFavourite={isFavouriteMentor} open={open} key={index} ></MentorsCard>))
            }
        </>


    )
}