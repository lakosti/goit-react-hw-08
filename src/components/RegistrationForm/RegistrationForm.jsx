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
      <Form className={css.registerForm}>
        <label className={css.registerFormLabel}>
          <span className={css.registerSpan}>Name</span>
          <Field
            className={css.registerFormInput}
            type="text"
            name="name"
            placeholder="Enter your name"
          />
        </label>
        <label className={css.registerFormLabel}>
          <span className={css.registerSpan}>Email</span>
          <Field
            className={css.registerFormInput}
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </label>
        <label className={css.registerFormLabel}>
          <span className={css.registerSpan}>Password</span>
          <Field
            className={css.registerFormInput}
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </label>
        <button className={css.registerFormBtn} type="submit">
          {isLoading ? <Loader /> : "Register"}
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
