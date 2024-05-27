import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const getNavLinkCurrentColor = ({ isActive }) => {
  return clsx(css.navigateLink, {
    [css.active]: isActive,
  });
};

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.navigate}>
      <NavLink className={getNavLinkCurrentColor} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={getNavLinkCurrentColor} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
