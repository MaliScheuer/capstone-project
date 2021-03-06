import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import CreateMentor from "./pages/CreateMentor";
import EditMentor from "./pages/EditMentor";
import SearchMentor from "./pages/SearchMentor";
import Favourites from "./pages/Favourites";
import Profile from "./pages/Profile";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Login from "./pages/Login";
import loadFromLocal from "./lib/loadFromLocal";
import saveToLocal from "./lib/saveToLocal";

function App() {
  const MENTORS_KEY = "mentorsList";
  const FAVOURITES_KEY = "favouritesList";
  const ACTIVE_USER_KEY = "activeUserList";

  const [open, setOpen] = useState(false);
  const [mentors, setMentors] = useState(loadFromLocal(MENTORS_KEY) ?? []);
  const [favourites, setFavourites] = useState(
    loadFromLocal(FAVOURITES_KEY) ?? []
  );
  const [activeUser, setActiveUser] = useState(
    loadFromLocal(ACTIVE_USER_KEY) ?? "anonym"
  );

  const activeMentor = mentors.find((mentor) => mentor._id === activeUser);

  useEffect(() => {
    saveToLocal(MENTORS_KEY, mentors);
  }, [mentors]);

  useEffect(() => {
    saveToLocal(FAVOURITES_KEY, favourites);
  }, [favourites]);

  useEffect(() => {
    saveToLocal(ACTIVE_USER_KEY, activeUser);
  }, [activeUser]);

  useEffect(() => {
    fetch("/mentors")
      .then((result) => result.json())
      .then((mentors) => setMentors(mentors))
      .catch((error) => console.error(error.message));
  }, []);

  function onReload() {
    setMentors(mentors);
  }

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
      <Navigation
        open={open}
        setOpen={setOpen}
        activeUser={activeUser}
        setActiveUser={setActiveUser}
      />
      <main>
        <Switch>
          <Route path="/home">
            <Header
              headline={
                activeUser === "anonym"
                  ? "Welcome"
                  : `Welcome ${activeMentor?.mentor_name
                      .split(" ")
                      .slice(0, 1)
                      .join("")}`
              }
              open={open}
              setOpen={setOpen}
            />
            <Home open={open} activeUser={activeUser} />
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
            <Profile
              open={open}
              mentors={mentors}
              activeUser={activeUser}
              setMentors={setMentors}
              onReload={onReload}
            />
          </Route>

          <Route path="/create-profile">
            <Header headline="Create Profile" open={open} setOpen={setOpen} />
            <CreateMentor
              setMentors={setMentors}
              mentors={mentors}
              open={open}
              activeUser={activeUser}
            />
          </Route>

          <Route path="/edit-profile">
            <Header headline="Edit Profile" open={open} setOpen={setOpen} />
            <EditMentor
              setMentors={setMentors}
              mentors={mentors}
              open={open}
              activeUser={activeUser}
              setActiveUser={setActiveUser}
            />
          </Route>

          <Route path="/favourites">
            <Header headline="your favourites" open={open} setOpen={setOpen} />
            <Favourites
              open={open}
              favourites={favourites}
              removeFavourite={removeFavourite}
            />
          </Route>
          <Route exact path="/">
            <Login activeUser={activeUser} setActiveUser={setActiveUser} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
