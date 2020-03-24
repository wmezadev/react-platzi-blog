import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Users from './Users';
import Tasks from './Tasks';

const App = () => (
  <BrowserRouter>
    <Menu/>
    <Route exact path="/users" component={Users} />
    <Route exact path="/tasks" component={Tasks} />
  </BrowserRouter>
);

export default App;