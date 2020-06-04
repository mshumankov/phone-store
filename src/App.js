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
          <Route path='/phone-store/' exact component={ProductList} />
          <Route path='/phone-store/phone/:id' exact component={ProductDetail} />
          <ProtectedRoute path='/phone-store/login' exact component={Login} />
          <ProtectedRoute path='/phone-store/register' exact component={Register} />
          <Route path='/phone-store/shoppingCart' exact component={ShoppingCart} />
          <Route path='/phone-store/aboutUs' exact component={AboutUs} />
          <Route path='/phone-store/compare' exact component={Compare} />
          <Route component={Error} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
