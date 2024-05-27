import PageTitle from "../../components/PageTitle/PageTitle";
import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={css.wrapper}>
      <PageTitle>
        <span className={css.loginTitle}>Login</span>
      </PageTitle>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
