import { Field, Form, Formik } from "formik";

const initialValue = {
  name: "",
  email: "",
  password: "",
};
const RegistrationForm = () => {
  const handleSubmit = (values) => {
    //! діспатч value
    //! додати повідомлення
    console.log(values);
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
