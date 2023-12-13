import React from "react";
import Dropdown from "components/dropdown";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import { BsExclamationCircle } from "react-icons/bs";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import avatar from "assets/custom/avatars/avatar1.jpg";

const Navbar = (props: {
  onOpenSidenav: () => void;
  brandText: string;
  secondary?: boolean | string;
}) => {
  const { onOpenSidenav, brandText } = props;
  const [darkmode, setDarkmode] = React.useState(false);

  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate() > 9 ? today.getDate() : `0${today.getDate()}`;

  return (
    <nav className="sticky top-4 z-10 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <a
            className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            href=" "
          >
            Pages
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
              {" "}
              /{" "}
            </span>
          </a>
          <Link
            className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            to="#"
          >
            {brandText}
          </Link>
        </div>
        <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
          <Link
            to="#"
            className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
          >
            {brandText}
          </Link>
        </p>
      </div>

      <div className="relative mt-[3px] flex h-[61px] w-[300px] flex-grow items-center justify-around rounded-full bg-white py-2 pr-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[300px] md:flex-grow-0 xl:w-[300px] xl:gap-2">
        <Dropdown
          button={
            <div className="] flex rounded-full p-[3px] pr-[29px] ">
              <img
                className="h-10 w-10 rounded-full"
                src={avatar}
                alt="Person"
              />
              <div className="ml-[10px] flex flex-col justify-center">
                <h1 className="text-sm font-bold text-navy-700 dark:text-white">
                  홍길동
                </h1>
                <p className="text-xs font-[500]  text-green-500">Doctor</p>
              </div>
            </div>
          }
          children={
            <div className="flex h-48 w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none">
              <div className="ml-4 mt-3">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-navy-700 dark:text-white">
                    👋 Hey, 홍길동
                  </p>{" "}
                </div>
              </div>
              <div className="mt-3 h-px w-full bg-gray-200 dark:bg-white/20 " />

              <div className="ml-4 mt-3 flex flex-col">
                <a
                  href=" "
                  className="text-sm text-gray-800 dark:text-white hover:dark:text-white"
                >
                  Profile Settings
                </a>
                <a
                  href=" "
                  className="mt-3 text-sm text-gray-800 dark:text-white hover:dark:text-white"
                >
                  Newsletter Settings
                </a>
                <a
                  href="/"
                  className="mt-3 text-sm font-medium text-red-500 hover:text-red-500"
                >
                  Log Out
                </a>
              </div>
            </div>
          }
          classNames={"py-2 top-8 -left-[180px] w-max"}
        />
        {/* start Notification */}
        <Dropdown
          button={
            <p className="cursor-pointer">
              <IoMdNotificationsOutline className="h-4 w-4 text-gray-600 dark:text-white" />
            </p>
          }
          animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          children={
            <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-navy-700 dark:text-white">
                  알림
                </p>
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  모두 읽음 처리
                </p>
              </div>

              <button className="flex w-full items-center">
                <div className="flex h-full w-[70px] items-center justify-center rounded-xl bg-gradient-to-b py-4 text-2xl text-white">
                  <FaRegBell className="fill-[#000] dark:fill-[#fff]" />
                </div>
                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                  <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                    환자 "홍길동"님의 담당자로 지정되셨습니다.
                  </p>
                  <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                    {year}년 {month}월 {date}일, 오후 1시 30분으로
                    예약되었습니다.
                  </p>
                </div>
              </button>
            </div>
          }
          classNames={"py-2 top-4 -left-[230px] md:-left-[440px] w-max"}
        />
        {/* start Horizon PRO */}
        <Dropdown
          button={
            <p className="cursor-pointer">
              <IoMdInformationCircleOutline className="h-4 w-4 text-gray-600 dark:text-white" />
            </p>
          }
          animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
          children={
            <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:text-white dark:shadow-none sm:w-[460px]">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-navy-700 dark:text-white">
                  공지
                </p>
                <p className="text-sm font-bold text-navy-700 dark:text-white">
                  모두 읽음 처리
                </p>
              </div>

              <button className="flex w-full items-center">
                <div className="bg-gradient-to-bpy-4 flex h-full w-[70px] items-center justify-center rounded-xl text-2xl text-white">
                  <BsExclamationCircle className="fill-[#000] dark:fill-[#fff]" />
                </div>
                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                  <p className="mb-1 text-left text-base font-bold text-gray-900 dark:text-white">
                    금일 전체 미팅이 있을 예정입니다.
                  </p>
                  <p className="font-base text-left text-xs text-gray-900 dark:text-white">
                    {year}년 {month}월 {date}일, 오후 12시 30분에 회의실로
                    모여주시길 바랍니다.
                  </p>
                </div>
              </button>
            </div>
          }
          classNames={"py-2 top-4 -left-[230px] md:-left-[440px] w-max"}
        />
        <div
          className="cursor-pointer text-gray-600"
          onClick={() => {
            if (darkmode) {
              document.body.classList.remove("dark");
              setDarkmode(false);
            } else {
              document.body.classList.add("dark");
              setDarkmode(true);
            }
          }}
        >
          {darkmode ? (
            <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
          ) : (
            <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
          )}
        </div>
        <span
          className="flex cursor-pointer text-xl text-gray-600 dark:text-white xl:hidden"
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="h-5 w-5" />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
