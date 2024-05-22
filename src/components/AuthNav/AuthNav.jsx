import { NavLink } from "react-router-dom";
// import css from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">Sign up</NavLink>
      <NavLink to="/login">Log in</NavLink>
    </div>
  );
};

export default AuthNav;
