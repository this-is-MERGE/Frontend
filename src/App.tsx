import { Routes, Route } from "react-router-dom";

import AdminLayout from "pages/admin";
import StartPage from "pages/start";
import AuthLayout from "pages/auth";
import { Toaster } from "react-hot-toast";
import SignIn from "pages/sign-in/Index";
import SignUp from "pages/sign-up/Index";
import Waiting from "pages/waiting/Index";
const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="auth/*" element={<AuthLayout />} />
        <Route path="admin/*" element={<AdminLayout />} />
        <Route path="/" element={<StartPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/waiting" element={<Waiting />} />
      </Routes>
    </>
  );
};

export default App;
