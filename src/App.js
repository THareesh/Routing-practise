import React from 'react';
import Home from './Home/home';
import {Switch,Route} from 'react-router-dom';
import Login from './Login/login';
import DashBoard from './Dashboard/dashboard'


function App() {
  return (
    <Switch>
      <Route path ='/' exact component={Home} />
      <Route path ='/home' component={Home} />
      <Route path ='/login' component={Login} />
      <Route path ='/dashboard' component={DashBoard} />
    </Switch>
  );
}

export default App;
