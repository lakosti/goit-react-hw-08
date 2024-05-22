import { Field, Form, Formik } from "formik";
// import { useDispatch } from "react-redux";

const initialValue = {
  email: "",
  password: "",
};

const LoginForm = () => {
  // const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    //! зробити діспатч логіну і передати туди value
    //! react hot toast -  розпакувати діспатч і зробити вивід повідомлення якщо шось нет так, або якщо операція успішна
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      <Form>
        <label>
          Email
          <Field type="email" name="email" placeholder="Please enter your email" />
        </label>
        <label>
          Password
          <Field type="password" name="password" placeholder="Please enter your password" />
        </label>
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
