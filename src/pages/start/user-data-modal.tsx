import { Link } from "react-router-dom";
import i54 from "assets/img/bg/54.png";
import SideBarBtn from "./sidebarbtn";

export default function UserDataModal() {
  return (
    <div>
      <div className=" relative">
        <SideBarBtn></SideBarBtn>
        <div className=" absolute left-[75%] top-[58%] ">
          <Link to="/auth/user-data" className=" px-1 text-3xl opacity-0">
            저장
          </Link>
        </div>
        <div className=" absolute left-[77.3%] top-[19%] ">
          <Link to="/auth/user-data" className=" px-1 opacity-0">
            ✕
          </Link>
        </div>
        <img className="w-full" src={i54} alt="-" />
      </div>
    </div>
  );
}
