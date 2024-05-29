import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { refresh } from "../../redux/auth/operations";
import Layout from "../Layout/Layout";
import PreLoader from "../PreLoader/PreLoader";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";
import css from "./App.module.css";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefreshing ? (
    <PreLoader />
  ) : (
    <div className={css.layout}>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegisterPage />} redirectTo="/contacts" />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />}
            />
            <Route
              path="/contacts"
              element={<PrivateRoute component={<ContactsPage />} redirectTo="/contacts" />}
            />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
