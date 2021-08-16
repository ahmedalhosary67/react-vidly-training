import './App.css';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Customers from './component/customers';
import Movies from './component/movies';
import NavBar from './component/navBar';
import Rentals from './component/rentals';
import NotFound from './component/notFound';
import MovieForm from './component/movieForm';
import loginForm from './component/login';
import Register from './component/register';

const App = () => {
  return (
    <main>
      <NavBar  />
      <div className="container">
        <Switch>
          <Route path="/login" component={loginForm} />
          <Route path="/register" component={Register} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/movieForm/:id" component={MovieForm} />
          <Route path="/not-Found" component={NotFound} />
          <Route path="/movies" component={Movies} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-Found" />
        </Switch>

      </div>
      
    </main>
  );
}
 
export default App;
