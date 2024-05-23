import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { selectIsLoading } from "../../redux/auth/selectors";
import Loader from "../Loader/Loader";

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
      <Form>
        <label>
          Name
          <Field type="text" name="name" placeholder="Please enter your name" />
        </label>
        <label>
          Email
          <Field type="email" name="email" placeholder="Please enter your email" />
        </label>
        <label>
          Password
          <Field type="password" name="password" placeholder="Please enter your password" />
        </label>
        <button type="submit">{isLoading ? <Loader /> : "Register"}</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
