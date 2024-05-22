import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  // const dispatch = useDispatch();

  const username = useSelector(selectUser);

  // const handleClick = () => {
  //   //! діспатчимо вихід з акаунта
  // };
  return (
    <div>
      <p>Wellcome, {username.name}</p>
      <button type="button">Logout</button>
    </div>
  );
};

export default UserMenu;
