import { Routes, Route } from "react-router-dom";

import AdminLayout from "pages/admin";
import StartPage from "pages/start";
import AuthLayout from "pages/auth";
const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="/" element={<StartPage />} />
    </Routes>
  );
};

export default App;
