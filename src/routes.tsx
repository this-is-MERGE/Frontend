import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";

const routes = [
  {
    name: "전체 환자 목록 조회",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "금일 예약 환자 조회",
    layout: "/admin",
    path: "nft-marketplace",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: "진료 내역",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "검사 내역",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "운동 치료 내역",
    layout: "/admin",
    path: "profile",
    icon: <MdHome className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "종합 리포트",
    layout: "/admin",
    path: "profile",
    icon: <MdHome className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "운동 치료 정보 수정",
    layout: "/admin",
    path: "profile",
    icon: <MdHome className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "나의 정보 수정",
    layout: "/admin",
    path: "profile",
    icon: <MdHome className="h-6 w-6" />,
    component: <Profile />,
  },
];
export default routes;
