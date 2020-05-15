import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ProductList from './productList';
import ProductDetail from './productDetail';
import Login from './login';
import Register from './register';
import ShoppingCart from './shoppingCart';
import AuthProvider from './authentication/Auth';
import ProtectedRoute from './protectedRoute/protectedRoute';
import Error from './error';
import AboutUs from './abooutUs';
import Compare from './compare';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path='/' exact component={ProductList} />
          <Route path='/phone/:id' exact component={ProductDetail} />
          <ProtectedRoute path='/login' exact component={Login} />
          <ProtectedRoute path='/register' exact component={Register} />
          <Route path='/shoppingCart' exact component={ShoppingCart} />
          <Route path='/aboutUs' exact component={AboutUs} />
          <Route path='/compare' exact component={Compare} />
          <Route component={Error} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
