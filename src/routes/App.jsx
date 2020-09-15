import React from 'react';
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from '../redux/store';

import Register from '../views/Register';
import Login from '../views/Login';
import Playlist from '../views/Playlist';
import '../assets/styles/App.scss';
import Home from '../views/Home';
import Search from '../views/Search';
import WelcomePage from '../views/WelcomePage';
import Results from '../views/Results';
import Layout from '../components/Layout/Layout';
import ViewUser from '../components/Profile/ViewUser';
import Perfil from '../components/Profile/Perfil';
import EditPerfil from '../components/Profile/EditPerfil';
import Album from '../views/Album';
import Artist from '../views/Artist';

const isLogged = localStorage.getItem('token');
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/home' component={WelcomePage} />
          <Route exact path='/register'>
            {isLogged ? <Redirect to='/' /> : <Register />}
          </Route>
          <Route exact path='/login'>
            {isLogged ? <Redirect to='/' /> : <Login />}
          </Route>
          <Route exact path='/login' component={Login} />
          <Route exact path='/'>
            {isLogged ? <Home /> : <Redirect to='/login' />}
          </Route>
          <Route exact path='/search'>
            {isLogged ? <Search /> : <Redirect to='/login' />}
          </Route>
          <Route exact path='/results'>
            {isLogged ? <Results /> : <Redirect to='/login' />}
          </Route>
          <Route exact path='/user'>
            {isLogged ? <ViewUser /> : <Redirect to='/login' />}
          </Route>
          <Route exact path='/profile'>
            {isLogged ? <Perfil /> : <Redirect to='/login' />}
          </Route>
          <Route exact path='/editprofile'>
            {isLogged ? <EditPerfil /> : <Redirect to='/login' />}
          </Route>
          <Route exact path='/playlist/:id'>
            {isLogged ? <Playlist /> : <Redirect to='/login' />}
          </Route>
          <Route exact path='/album/:id'>
            {isLogged ? <Album /> : <Redirect to='/login' />}
          </Route>
          <Route exact path='/artist/:id'>
            {isLogged ? <Artist /> : <Redirect to='/login' />}
          </Route>
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>
);

export default App;
