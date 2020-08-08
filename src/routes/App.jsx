import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Register from '../views/Register';
import Login from '../views/Login';
import Playlist from '../views/Playlist';
import '../assets/styles/App.scss';
import Home from '../views/Home';
import Layout from '../components/Layout';
import ViewUser from '../components/ViewUser';
import Album from '../components/Album';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/playlist' component={Playlist} />
        <Route exact path='/user' component={ViewUser} />
        <Route exact path='/album' component={Album} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
