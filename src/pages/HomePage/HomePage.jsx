import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.homeWrapper}>
      <PageTitle>
        <span className={css.homeTitle}>Welcome to the contacts list</span>
      </PageTitle>
      <p className={css.homeText}>
        My web application for a contacts book is a powerful tool for organizing your contact list.
        With it, you can easily add, delete, and edit contacts. Additionally, you can quickly find
        the contacts you need thanks to convenient search and sorting by various parameters. Our
        application is built on React technology, ensuring high performance and a user-friendly
        interface. Whether you use it for personal, professional, or commercial purposes, our
        program will reliably store and organize your contacts.
      </p>
    </div>
  );
};

export default HomePage;
