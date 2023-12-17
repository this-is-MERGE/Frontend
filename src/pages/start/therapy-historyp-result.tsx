import { Link } from "react-router-dom";
import i59 from "assets/img/bg/59.png";
import SideBarBtn from "./sidebarbtn";
export default function TherapyHistoryResult() {
  return (
    <div>
      <SideBarBtn></SideBarBtn>
      <div className=" absolute left-[21.3%] top-[41%] ">
        <Link to="/auth/therapy-history-5" className=" px-1 opacity-0">
          x
        </Link>
      </div>
      <img className="w-full" src={i59} alt="-" />
    </div>
  );
}
