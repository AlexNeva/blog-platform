import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css'

function Header() {
  return (
    <div className={classes.Header}>
      <Link to="/" className={classes.Logo}>
        Realworld Blog
      </Link>
      <div className={classes.HeaderLinks}>
        <Link to="/signin" className={classes.SignIn}>
          Sign In
        </Link>
        <Link to="/signup" className={classes.SignUp}>
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Header;