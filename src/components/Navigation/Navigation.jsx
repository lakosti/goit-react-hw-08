import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={css.navigate}>
      <NavLink className={css.navigateLink} to="/">
        Home
      </NavLink>
      <NavLink className={css.navigateLink} to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
