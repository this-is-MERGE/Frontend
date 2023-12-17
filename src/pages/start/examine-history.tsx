import { Link } from "react-router-dom";
import i56 from "assets/img/bg/56.png";
import SideBarBtn from "./sidebarbtn";
export default function ExamineHistory() {
  return (
    <div>
      <div className=" relative">
        <SideBarBtn></SideBarBtn>
        <div className=" absolute left-[21.3%] top-[41%] ">
          <Link to="/auth/examine-history-5" className=" px-1 opacity-0">
            x
          </Link>
        </div>
        <img className="w-full" src={i56} alt="-" />
      </div>
    </div>
  );
}
