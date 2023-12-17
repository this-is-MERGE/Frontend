import { Link } from "react-router-dom";
import i68 from "assets/img/bg/68.png";
import SideBarBtn from "./sidebarbtn";
export default function ExamineHistoryResult() {
  return (
    <div>
      <SideBarBtn></SideBarBtn>
      <div className=" absolute left-[21.3%] top-[41%] ">
        <Link to="/auth/examine-history-5" className=" px-1 opacity-0">
          x
        </Link>
      </div>
      <img className="w-full" src={i68} alt="-" />
    </div>
  );
}
