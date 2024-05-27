import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const getNavLinkCurrentColor = ({ isActive }) => {
  return clsx(css.authNavLink, {
    [css.active]: isActive,
  });
};

const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <NavLink className={getNavLinkCurrentColor} to="/register">
        Sign up
      </NavLink>
      <NavLink className={getNavLinkCurrentColor} to="/login">
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
