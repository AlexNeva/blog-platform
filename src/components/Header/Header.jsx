import React from 'react';
import Cookies from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import classes from './Header.module.css';
import avatar from './avatar.png';
import { logoutAction } from '../../store/userReducer'


function Header() {

  const { isAuth, user } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const navigate = useNavigate();

  const goHome = () => navigate('/')

  const logout = () => {
    dispatch(logoutAction());
    Cookies.remove('token')
    goHome()
  }

  return (
    <div className={classes.Header}>
      <Link to="/" className={classes.Logo}>
        Realworld Blog
      </Link>
      <div className={classes.HeaderLinks}>

        {
          isAuth

            ? <>
              <Link to='/new-article' className={classes.CreateArticle}>
                Create article
              </Link>
              <Link to="/profile" className={classes.Profile}>
                <div className={classes.ProfileName}>
                  {user.username}
                </div>
                <div className={classes.ProfilePhoto}>
                  {
                    user.image

                      ? <img src={user.image} alt=" " />

                      : <img src={avatar} alt=" " />
                  }
                </div>
              </Link>
              <button
                type='button'
                className={classes.LogOut}
                onClick={logout}
              >
                Log Out
              </button>
            </>

            : <>
              <Link to="/sign-in" className={classes.SignIn}>
                Sign In
              </Link>
              <Link to="/sign-up" className={classes.SignUp}>
                Sign Up
              </Link>
            </>
        }



      </div>
    </div>
  );
}

export default Header;