import { Routes, Route, Navigate } from "react-router-dom";

// import RtlLayout from "pages/rtl";
import StartPage from "pages/start";
// import AuthLayout from "pages/auth";
const App = () => {
  return (
    <Routes>
      {/* <Route path="auth/*" element={<AuthLayout />} /> */}
      <Route path="/" element={<StartPage />} />
      {/* <Route path="rtl/*" element={<RtlLayout />} /> */}
      {/* <Route path="/" element={<Navigate to="/admin" replace />} /> */}
    </Routes>
  );
};

export default App;
