import PageTitle from "../../components/PageTitle/PageTitle";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <div>
      <PageTitle>
        <span className={css.registerTitle}>Register</span>
      </PageTitle>
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;
