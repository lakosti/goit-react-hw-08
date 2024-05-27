import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { selectIsLoading } from "../../redux/auth/selectors";
import Loader from "../Loader/Loader";
import css from "./LoginForm.module.css";

const initialValue = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success("Successfully logged in");
      })
      .catch(() => {
        toast.error("Incorrect email or password");
      });
    actions.resetForm();
  };
  return (
    <>
      <Formik initialValues={initialValue} onSubmit={handleSubmit}>
        <Form className={css.loginForm}>
          <label className={css.loginLabel}>
            Email
            <Field className={css.loginInput} type="email" name="email" />
          </label>
          <label className={css.loginLabel}>
            Password
            <Field className={css.loginInput} type="password" name="password" />
          </label>
          <button className={css.loginBtn} type="submit">
            {isLoading ? <Loader /> : "Log in"}
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
