import { Toaster } from "react-hot-toast";
import AppBar from "../AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      {children}
      <Toaster position="top-center" />
    </div>
  );
};

export default Layout;
