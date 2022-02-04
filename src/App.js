import React from 'react';
import {Route , Switch} from 'react-router-dom';
import  AllMeetUp from './Pages/AllMeetUps';
import NewMeetUp from './Pages/NewMeetups';
import Favorite from './Pages/Favorites';

//import MainNavigation from './components/Layout/MainNavigation.js';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      {/* <MainNavigation /> */}
      <Switch>
    <Route path='/' exact> 
    <AllMeetUp />
    </Route>
    <Route path='/newmeet'> 
    <NewMeetUp />
    </Route>
    <Route path='/favorites'> 
    <Favorite />
    </Route>
    </Switch>
    </Layout>
  );
}

export default App;
