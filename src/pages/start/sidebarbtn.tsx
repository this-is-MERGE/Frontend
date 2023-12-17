import { Link } from "react-router-dom";

export default function SideBarBtn() {
  return (
    <div>
      <div className=" absolute left-[2%] top-[23%] ">
        <Link to="/auth/default" className=" px-1 text-3xl opacity-0">
          사이드바 사이드바
        </Link>
      </div>
      <div className=" absolute left-[2%] top-[28%] ">
        <Link to="/auth/reservation" className=" px-1 text-3xl opacity-0">
          사이드바 사이드바
        </Link>
      </div>
      <div className=" absolute left-[2%] top-[41%] ">
        <Link to="/auth/chart-history" className=" px-1 text-3xl opacity-0">
          사이드바 사이드바
        </Link>
      </div>
      <div className=" absolute left-[2%] top-[45.7%] ">
        <Link to="/auth/examine-history" className=" px-1 text-3xl opacity-0">
          사이드바 사이드바
        </Link>
      </div>
      <div className=" absolute left-[2%] top-[50.6%] ">
        <Link to="/auth/therapy-history" className=" px-1 text-3xl opacity-0">
          사이드바 사이드바
        </Link>
      </div>
      <div className=" absolute left-[2%] top-[55.5%] ">
        <Link to="/auth/user-data" className=" px-1 text-3xl opacity-0">
          사이드바 사이드바
        </Link>
      </div>
      <div className=" absolute left-[2%] top-[68.7%] ">
        <Link to="/auth/aa" className=" px-1 text-3xl opacity-0">
          사이드바 사이드바
        </Link>
      </div>
      <div className=" absolute left-[2%] top-[73.5%] ">
        <Link to="/auth/user_info" className=" px-1 text-3xl opacity-0">
          사이드바 사이드바
        </Link>
      </div>
    </div>
  );
}
