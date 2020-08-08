import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import Register from '../views/Register';
import Login from '../views/Login';
import Playlist from '../views/Playlist';
import '../assets/styles/App.scss';
import Home from '../views/Home';
import Layout from '../components/Layout';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/playlist' component={Playlist} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>
);

export default App;
