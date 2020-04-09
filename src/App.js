import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ProductList from './productList';
import ProductDetail from './productDetail';
import Login from './login';
import Register from './register';
import AuthProvider from './authentication/Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path='/' exact component={ProductList} />
          <Route path='/phone/:id' component={ProductDetail} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
