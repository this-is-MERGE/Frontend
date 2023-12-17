import { Routes, Route } from "react-router-dom";

import AdminLayout from "pages/admin";
import StartPage from "pages/start";
import AuthLayout from "pages/auth";
import ChartHistory from "pages/start/chart-history";
import ChartHistoryResult from "pages/start/chart-history-result";
import TherapyHistory from "pages/start/therapy-history";
import TherapyHistoryResult from "pages/start/therapy-historyp-result";
import ExamineHistory from "pages/start/examine-history";
import ExamineHistoryResult from "pages/start/examine-history-result";
import UserData from "pages/start/user-data";
import UserDataModal from "pages/start/user-data-modal";
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
        <Route path="/auth/chart-history" element={<ChartHistory />} />
        <Route path="/auth/chart-history-9" element={<ChartHistoryResult />} />
        <Route path="/auth/examine-history" element={<ExamineHistory />} />
        <Route
          path="/auth/examine-history-5"
          element={<ExamineHistoryResult />}
        />
        <Route path="/auth/therapy-history" element={<TherapyHistory />} />
        <Route
          path="/auth/therapy-history-5"
          element={<TherapyHistoryResult />}
        />
        <Route path="/auth/user-data" element={<UserData />} />
        <Route path="/auth/user-data-modal" element={<UserDataModal />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/waiting" element={<Waiting />} />
      </Routes>
    </>
  );
};

export default App;
