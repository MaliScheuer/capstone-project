import Header from './components/Header';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import { useState, useEffect } from 'react';


function App() {

  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <div>
        <Header headline='Welcome' open={open} setOpen={setOpen}></Header>
        <Navigation open={open} setOpen={setOpen}></Navigation>
      </div>
      <Home></Home>


    </div>
  );
}

export default App;


//openMenu={() => setOpen(!open)}