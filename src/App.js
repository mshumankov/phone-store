import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ProductList from './productList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={ProductList} />
      </Switch>
    </Router>
  );
}

export default App;
