import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import ContactsList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import PageTitle from "../../components/PageTitle/PageTitle";

const ContactsPage = () => {
  const isLoading = useSelector(selectLoading);
  //! запит за контактами
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <PageTitle>Contacts</PageTitle>
      <ContactForm />
      <SearchBox />
      <p>{isLoading && "Request in progress..."}</p>
      <ContactsList />
    </div>
  );
};

export default ContactsPage;
