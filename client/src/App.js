import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import CreateMentor from './pages/CreateMentor';
import SearchMentor from './pages/SearchMentor';
import Favourites from './pages/Favourites';
import Header from './components/Header';
import Navigation from './components/Navigation';


function App() {

  const [open, setOpen] = useState(false);


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
            <SearchMentor open={open} />
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
            <Favourites open={open} />
          </Route>

        </Switch>
      </main >

    </div >
  );
}

export default App;


