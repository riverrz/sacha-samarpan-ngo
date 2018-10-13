import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./NavigationHeader.css";
import { connect } from "react-redux";

const handleLogout = event => {
  event.stopPropagation();
  event.preventDefault();
  localStorage.removeItem("token");
  window.location.replace("/");
};

const navigationHeader = props => {
  let navUserListItem = (
    <Fragment>
      <li className="navigation__user__routeList__item">
        <Link to="/user/login" className="navigation__user__route">
          Login
        </Link>
      </li>
      <li className="navigation__user__routeList__item">
        <Link to="/user/register" className="navigation__user__route">
          Register
        </Link>
      </li>
    </Fragment>
  );
  if (props.loading) {
    navUserListItem = null;
  }
  if (props.isAuth) {
    navUserListItem = (
      <Fragment>
        <li className="navigation__user__routeList__item">
          <Link to="/dashboard" className="navigation__user__route">
            Dashboard
          </Link>
        </li>
        <li className="navigation__user__routeList__item">
          <Link
            to="/logout"
            onClick={handleLogout}
            className="navigation__user__route"
          >
            Logout
          </Link>
        </li>
      </Fragment>
    );
  }
  return (
    <nav className="navigation__user">
      <ul className="navigation__user__routeList">{navUserListItem}</ul>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    user: state.auth.user,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps)(navigationHeader);
