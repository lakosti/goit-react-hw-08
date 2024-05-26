import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <NavLink className={css.authNavLink} to="/register">
        Sign up
      </NavLink>
      <NavLink className={css.authNavLink} to="/login">
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
