import React from "react";

// Admin Imports
import MainDashboard from "views/auth/default";
import Reservation from "views/auth/reservation";
import Profile from "views/auth/profile";
import ReportOverview from "views/auth/report";
import DataTables from "views/auth/tables";
import PhysicalTherapy from "views/auth/physical_therapy";
import UserInfo from "views/auth/ user_info";
import DB_Management from "views/admin/db_Management";
import Approval from "views/admin/approval";
import { FaDatabase } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";

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
    // path: "data-tables",
    path: "chart-history",
    component: <DataTables />,
  },
  {
    name: "검사 내역",
    layout: "/auth",
    // path: "profile",
    path: "examine-history",
    icon: <MdMedicalServices className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "운동 치료 내역",
    layout: "/auth",
    // path: "physical_therapy",
    path: "therapy-history",
    icon: <MdFitnessCenter className="h-6 w-6" />,
    component: <PhysicalTherapy />,
  },
  {
    name: "종합 리포트",
    layout: "/auth",
    // path: "report",
    path: "user-data",
    icon: <MdOutlineContentPasteSearch className="h-6 w-6" />,
    component: <ReportOverview />,
  },
  {
    name: "운동 치료 정보 수정",
    layout: "/auth",
    path: "aa",
    icon: <MdEdit className="h-6 w-6" />,
    component: <PhysicalTherapy />,
  },
  {
    name: "나의 정보 수정",
    layout: "/auth",
    path: "user_info",
    icon: <MdPerson className="h-6 w-6" />,
    component: <UserInfo />,
  },
  {
    name: "병원 내부 인원 DB 관리",
    layout: "/admin",
    path: "db_management",
    icon: <FaDatabase className="h-6 w-6" />,
    component: <DB_Management />,
  },
  {
    name: "사용자 등록 승인 관리",
    layout: "/admin",
    path: "approval",
    icon: <FaListCheck className="h-6 w-6" />,
    component: <Approval />,
  },
];
export default routes;
