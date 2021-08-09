import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  // const pages = [
  //   {path: '/', name: 'Movies' },
  //   {path: '/customers', name: 'Customers' },
  //   {path: '/rentals', name: 'Rentals' }
  // ]
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">Vidly</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav mr-auto">
        <NavLink className='nav-item nav-link' to="/movies" >Movies</NavLink>
        <NavLink className='nav-item nav-link' to="/customers">Customers</NavLink>
        <NavLink className='nav-item nav-link' to="/rentals">Rentals</NavLink>
        <NavLink className='nav-item nav-link' to="/login">login</NavLink>
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
