import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import CreateMentor from "./pages/CreateMentor";
import SearchMentor from "./pages/SearchMentor";
import Favourites from "./pages/Favourites";
import Profile from "./pages/Profile";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import loadFromLocal from "./lib/loadFromLocal";
import saveToLocal from "./lib/saveToLocal";

function App() {
  const MENTORS_KEY = "mentorsList";
  const FAVOURITES_KEY = "favouritesList";

  const [open, setOpen] = useState(false);
  const [mentors, setMentors] = useState(loadFromLocal(MENTORS_KEY) ?? []);
  const [favourites, setFavourites] = useState(
    loadFromLocal(FAVOURITES_KEY) ?? []
  );

  useEffect(() => {
    saveToLocal(MENTORS_KEY, mentors);
  }, [mentors]);

  useEffect(() => {
    saveToLocal(FAVOURITES_KEY, favourites);
  }, [favourites]);

  useEffect(() => {
    fetch("http://localhost:4000/search-mentors")
      .then((result) => result.json())
      .then((mentors) => setMentors(mentors))
      .catch((error) => console.error(error.message));
  }, []);

  function addToFavouriteMentor(favouriteMentor) {
    const selectedFavourite = mentors.filter(
      (mentor) => mentor._id === favouriteMentor._id
    );
    const isFavourite = favourites.some(
      (favourite) => favourite._id === favouriteMentor._id
    );

    if (isFavourite) {
      removeFavourite(favouriteMentor._id);
    } else {
      setFavourites([...favourites, ...selectedFavourite]);
    }
  }

  function removeFavourite(idToRemove) {
    const remainingFavourites = favourites.filter(
      (mentor) => mentor._id !== idToRemove
    );
    setFavourites(remainingFavourites);
  }

  return (
    <div>
      <Navigation open={open} setOpen={setOpen} />
      <main>
        <Switch>
          <Route exact path="/">
            <Header headline="Welcome" open={open} setOpen={setOpen} />
            <Home open={open} />
          </Route>

          <Route path="/search-mentors">
            <Header headline="Find a mentor" open={open} setOpen={setOpen} />
            <SearchMentor
              open={open}
              mentors={mentors}
              favourites={favourites}
              addToFavouriteMentor={addToFavouriteMentor}
            ></SearchMentor>
          </Route>

          <Route path="/profile">
            <Header headline="Your Profile" open={open} setOpen={setOpen} />
            <Profile open={open} />
          </Route>

          <Route path="/create-profile">
            <Header headline="Create Profile" open={open} setOpen={setOpen} />
            <CreateMentor open={open} />
          </Route>

          <Route path="/favourites">
            <Header headline="your favourites" open={open} setOpen={setOpen} />
            <Favourites
              open={open}
              favourites={favourites}
              removeFavourite={removeFavourite}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
