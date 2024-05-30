import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import ContactsList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  const isLoading = useSelector(selectLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <PageTitle>
        <span className={css.contactsTitle}>Contacts</span>
      </PageTitle>
      <div className={css.contactWrapForm}>
        <ContactForm />
      </div>
      <div className={css.contactWrap}>
        <SearchBox />
        <p className={css.contactNotification}>{isLoading && "Loading..."}</p>
        <ContactsList />
      </div>
    </div>
  );
};

export default ContactsPage;
