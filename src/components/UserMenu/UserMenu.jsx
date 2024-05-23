import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const handleClick = () => {
    dispatch(logOut())
      .unwrap()
      .then(() => {
        toast.success("Successfully sign out");
      });
  };
  return (
    <div>
      <p>Wellcome, {user.name}</p>
      <button onClick={handleClick} type="button">
        Sign out
      </button>
    </div>
  );
};

export default UserMenu;
