import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Users from './Users';
import Tasks from './Tasks';
import Posts from './Posts';
import SaveTask from './Tasks/Save';

const App = () => (
  <BrowserRouter>
    <Menu/>
    <main className="page-container">
      <Route exact path="/" component={Users} />
      <Route exact path="/tasks" component={Tasks} />
      <Route exact path="/posts/:key" component={Posts} />
      <Route exact path="/tasks/save" component={SaveTask} />
    </main>
  </BrowserRouter>
);

export default App;