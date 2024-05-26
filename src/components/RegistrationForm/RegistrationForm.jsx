import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { selectIsLoading } from "../../redux/auth/selectors";
import Loader from "../Loader/Loader";
import toast from "react-hot-toast";
import css from "./RegistrationForm.module.css";

const initialValue = {
  name: "",
  email: "",
  password: "",
};
const RegistrationForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success("Successfully register");
      })
      .catch(() => {
        toast.error("Incorrect email or password");
      });
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      <Form className={css.loginForm}>
        <label className={css.loginFormLabel}>
          Name
          <Field
            className={css.loginFormInput}
            type="text"
            name="name"
            placeholder="Please enter your name"
          />
        </label>
        <label className={css.loginFormLabel}>
          Email
          <Field
            className={css.loginFormInput}
            type="email"
            name="email"
            placeholder="Please enter your email"
          />
        </label>
        <label className={css.loginFormLabel}>
          Password
          <Field
            className={css.loginFormInput}
            type="password"
            name="password"
            placeholder="Please enter your password"
          />
        </label>
        <button className={css.loginFormBtn} type="submit">
          {isLoading ? <Loader /> : "Register"}
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
