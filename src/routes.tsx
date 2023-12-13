import React from "react";

// Admin Imports
import MainDashboard from "views/auth/default";
import Reservation from "views/auth/reservation";
import Profile from "views/auth/profile";
import DataTables from "views/auth/tables";

// Auth Imports
import SignIn from "views/admin/SignIn";

// Icon Imports
import {
  MdEdit,
  MdOutlineQueryBuilder,
  MdPerson,
  MdOutlineAssignment,
  MdMedicalServices,
  MdOutlineContentPasteSearch,
  MdFitnessCenter,
  MdGroups,
} from "react-icons/md";

const routes = [
  {
    name: "전체 환자 목록 조회",
    layout: "/auth",
    path: "default",
    icon: <MdGroups className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "금일 예약 환자 조회",
    layout: "/auth",
    path: "reservation",
    icon: <MdOutlineQueryBuilder className="h-6 w-6" />,
    component: <Reservation />,
    secondary: true,
  },
  {
    name: "진료 내역",
    layout: "/auth",
    icon: <MdOutlineAssignment className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "검사 내역",
    layout: "/auth",
    path: "profile",
    icon: <MdMedicalServices className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "운동 치료 내역",
    layout: "/auth",
    path: "profile",
    icon: <MdFitnessCenter className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "종합 리포트",
    layout: "/auth",
    path: "profile",
    icon: <MdOutlineContentPasteSearch className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "운동 치료 정보 수정",
    layout: "/auth",
    path: "profile",
    icon: <MdEdit className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "나의 정보 수정",
    layout: "/auth",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
];
export default routes;
