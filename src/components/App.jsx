import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Users from './Users';
import Tasks from './Tasks';

const App = () => (
  <BrowserRouter>
    <Menu/>
    <main className="page-container">
      <Route exact path="/tasks" component={Tasks} />
      <Route exact path="/" component={Users} />
    </main>
  </BrowserRouter>
);

export default App;