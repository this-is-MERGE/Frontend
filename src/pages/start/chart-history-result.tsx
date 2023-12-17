import { Link } from "react-router-dom";
import i50 from "assets/img/bg/50.png";
import SideBarBtn from "./sidebarbtn";
export default function ChartHistoryResult() {
  return (
    <div>
      <SideBarBtn></SideBarBtn>
      <div className=" absolute left-[21.3%] top-[41%] ">
        <Link to="/auth/chart-history-9" className=" px-1 opacity-0">
          x
        </Link>
      </div>
      <img className="w-full" src={i50} alt="-" />
    </div>
  );
}
