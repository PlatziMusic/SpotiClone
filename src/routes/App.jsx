import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import Register from '../views/Register';
import Login from '../views/Login';
import Playlist from '../views/Playlist';
import '../assets/styles/App.scss';
import Home from '../views/Home';
import Search from '../views/Search';
import WelcomePage from '../views/WelcomePage';
import Results from '../views/Results';
import Layout from '../components/Layout';
import ViewUser from '../components/ViewUser';
import Album from '../components/Album';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/home' component={WelcomePage} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/results' component={Results} />
          <Route exact path='/user' component={ViewUser} />
          <Route exact path='/playlist' component={Playlist} />
          <Route exact path='/playlist/:id' component={Playlist} />
          <Route exact path='/album' component={Album} />
          <Route exact path='/album/:id' component={Album} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>
);

export default App;
