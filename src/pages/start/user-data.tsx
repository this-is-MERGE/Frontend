import { Link } from "react-router-dom";
import i53 from "assets/img/bg/53.png";
import SideBarBtn from "./sidebarbtn";

export default function UserData() {
  return (
    <div>
      <div className=" relative">
        <SideBarBtn></SideBarBtn>
        <div className=" absolute left-[92.5%] top-[24%] ">
          <Link to="/auth/user-data-modal" className=" px-1 text-3xl opacity-0">
            데이터/
          </Link>
        </div>
        <img className="w-full" src={i53} alt="-" />
      </div>
    </div>
  );
}
