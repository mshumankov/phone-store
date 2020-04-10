import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ProductList from './productList';
import ProductDetail from './productDetail';
import Login from './login';
import Register from './register';
import AuthProvider from './authentication/Auth';
import ProtectedRoute from './protectedRoute/protectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path='/' exact component={ProductList} />
          <Route path='/phone/:id' component={ProductDetail} />
          <ProtectedRoute path='/login' component={Login} />
          <ProtectedRoute path='/register' component={Register} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
