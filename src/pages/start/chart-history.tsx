import { Link } from "react-router-dom";
import i52 from "assets/img/bg/52.png";
import SideBarBtn from "./sidebarbtn";
import React from "react";
import Sidebar from "components/sidebar";

export default function ChartHistory() {
  const [open, setOpen] = React.useState(true);
  return (
    <div>
      <div className=" relative">
        {/* <Sidebar open={open} onClose={() => setOpen(false)} /> */}
        <SideBarBtn></SideBarBtn>
        <div className=" absolute left-[21.3%] top-[41%] ">
          <Link to="/auth/chart-history-9" className=" px-1 opacity-0">
            x
          </Link>
        </div>
        <img className="w-full" src={i52} alt="-" />
      </div>
    </div>
  );
}
