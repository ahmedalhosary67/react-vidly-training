import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  // const pages = [
  //   {path: '/', name: 'Movies' },
  //   {path: '/customers', name: 'Customers' },
  //   {path: '/rentals', name: 'Rentals' }
  // ]
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">Vidly</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav mr-auto">
        <NavLink className='nav-item nav-link' to="/movies" >Movies</NavLink>
        <NavLink className='nav-item nav-link' to="/customers">Customers</NavLink>
        <NavLink className='nav-item nav-link' to="/rentals">Rentals</NavLink>
        <NavLink className='nav-item nav-link' to="/login">login</NavLink>
        <NavLink className='nav-item nav-link' to="/register">Register</NavLink>
          {/* {pages.map(page => <li className='nav-item'>
            <Link className="nav-link" to={page.path}>
              {page.name}
            </Link>
          </li>)} */}
        </div>
      </div>
    </nav>

  );
};

export default NavBar;
