import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

const AppBar = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <header>
      <Navigation />
      {isLogin ? <UserMenu /> : <AuthNav />}
      <UserMenu />
      <AuthNav />
    </header>
  );
};

export default AppBar;