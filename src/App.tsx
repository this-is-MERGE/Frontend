import { Routes, Route, Navigate } from "react-router-dom";

// import RtlLayout from "\bpages/rtl";
import StartPage from "\bpages/start";
// import AuthLayout from "\bpages/auth";
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
