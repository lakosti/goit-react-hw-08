import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const initialValue = {
  name: "",
  email: "",
  password: "",
};
const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
    //! додати повідомлення
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
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
