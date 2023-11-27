/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import Link from "./components/Link";

import TextLogo from "assets/custom/TextLogo.svg";
import routes from "routes";

const Sidebar = (props: {
  open: boolean;
  onClose: React.MouseEventHandler<HTMLSpanElement>;
}) => {
  const { open, onClose } = props;
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div
        className={`mb-[33px] ml-[33px] mr-[44px] mt-[55px] flex items-center`}
      >
        <div className="ml-1 mt-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
          <img
            className="w-[290px] items-center justify-center"
            src={TextLogo}
            alt="Health_Mate_TextLogo"
          />
        </div>
      </div>
      <div className="mb-7 mt-[58px] h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <h1 className="mb-[18px] mt-[1rem] px-8 text-2xl font-bold text-navy-700 dark:text-white">
          환자 정보 관리
        </h1>
        <div className="ml-[18px]">
          <Link route={routes[0]} />
          <Link route={routes[1]} />
        </div>
        <h1 className="mb-[18px] mt-[3rem] px-8 text-2xl font-bold text-navy-700 marker:mb-[18px] dark:text-white">
          진료, 검사, 치료
        </h1>
        <div className="ml-[18px]">
          <Link route={routes[2]} />
          <Link route={routes[3]} />
          <Link route={routes[4]} />
          <Link route={routes[5]} />
        </div>
        <h1 className="mb-[18px] mt-[3rem] px-8 text-2xl font-bold text-navy-700 marker:mb-[18px] dark:text-white">
          기타
        </h1>
        <div className="ml-[18px]">
          <Link route={routes[6]} />
          <Link route={routes[7]} />
        </div>
      </ul>

      {/* Free Horizon Card */}
      <div className="flex justify-center"></div>
    </div>
  );
};

export default Sidebar;
