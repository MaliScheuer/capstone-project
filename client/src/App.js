import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import CreateMentor from './pages/CreateMentor';
import SearchMentor from './pages/SearchMentor';
import Favourites from './pages/Favourites';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MentorsCard from './components/MentorsCard';
import loadFromLocal from './lib/loadFromLocal';
import saveToLocal from './lib/saveToLocal';


function App() {

  const MENTORS_KEY = 'mentorsList'
  const FAVOURITES_KEY = 'favouritesList'


  const [open, setOpen] = useState(false);

  const [mentorsApi, setMentorsApi] = useState(loadFromLocal(MENTORS_KEY) ?? []);

  console.log(mentorsApi)
  const [favourites, setFavourites] = useState(loadFromLocal(FAVOURITES_KEY) ?? []);


  useEffect(() => {
    saveToLocal(MENTORS_KEY, mentorsApi)
  }, [mentorsApi])

  useEffect(() => {
    saveToLocal(FAVOURITES_KEY, favourites)
  }, [favourites])


  useEffect(() => {

    fetch('http://localhost:4000/search-mentors')
      .then(result => result.json())
      .then(mentors => setMentorsApi(mentors))
      .catch(error => console.error(error.message))
  }, []);



  function addToFavouriteMentor(favouriteMentor) {
    const selectedFavourite = mentorsApi.filter((mentor) => mentor._id === favouriteMentor._id)


    const isFavourite = favourites.some(favourite => favouriteMentor._id === favourite._id)


    if (isFavourite) {
      const remainingFavourites = favourites.filter((mentor) => mentor._id !== favouriteMentor._id)
      setFavourites(remainingFavourites)
    } else {
      setFavourites([...favourites, ...selectedFavourite]);
    }
  }


  function removeFavourite(idToRemove) {
    const remainingFavourites = favourites.filter((mentor) => mentor._id !== idToRemove)
    setFavourites(remainingFavourites);
  }


  return (
    <div>
      <Navigation open={open} setOpen={setOpen} />
      <main>
        <Switch>
          <Route exact path='/'>
            <Header headline='Welcome' open={open} setOpen={setOpen} />
            <Home open={open} />
          </Route>

          <Route path='/search-mentors'>
            <Header headline='Find a mentor' open={open} setOpen={setOpen} />
            <SearchMentor
              open={open}
              mentors={mentorsApi}
              favourites={favourites}
              addToFavouriteMentor={addToFavouriteMentor}
            ></SearchMentor>


          </Route>

          <Route path='/profile'>
            <Header headline='Your Profile' open={open} setOpen={setOpen} />
          </Route>

          <Route path='/create-profile'>
            <Header headline='Create profile' open={open} setOpen={setOpen} />
            <CreateMentor open={open} />
          </Route>

          <Route path='/favourites'>
            <Header headline='your favourites' open={open} setOpen={setOpen} />
            <Favourites
              open={open}
              favourites={favourites}
              removeFavourite={removeFavourite} />
          </Route>

        </Switch>
      </main >

    </div >
  );
}

export default App;


