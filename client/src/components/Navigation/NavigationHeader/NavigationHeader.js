import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import withAuth from "../../../containers/withAuth/withAuth";
import "./NavigationHeader.css";

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
        <Link to="/login" className="navigation__user__route">
          Login
        </Link>
      </li>
      <li className="navigation__user__routeList__item">
        <Link to="/registration" className="navigation__user__route">
          Register
        </Link>
      </li>
    </Fragment>
  );
  if (props.user) {
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

const styles = {
  position: "absolute",
  top: "0",
  left: "50%",
  transform: "translateX(-50%)",
  width: "85%",
  height: "4rem",
  display: "flex",
  fontSize: "14px",
  justifyContent: "flex-end",
  alignItems: "center"
};

export default withAuth(navigationHeader, null, styles);
