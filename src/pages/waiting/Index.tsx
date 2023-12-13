import useInnerNavigator from "hooks/useInnerNavigator";
import React, { useState } from "react";
import WaveFooter from "assets/custom/WaveFooter.svg";
import Stop from "assets/img/sign-up/stop.svg";
import CustomInputField from "components/fields/CustomInputField";
import TopBar from "components/topBar/TopBar";
import { useSearchParams } from "react-router-dom";
export default function Waiting() {
  const { push } = useInnerNavigator();
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const department = searchParams.get("department");
  const name = searchParams.get("name");
  const phone =
    searchParams.get("phone") === ""
      ? ""
      : String(searchParams.get("phone")).padStart(11, "0");
  const email = searchParams.get("email");
  const handleGoBackClick = () => {
    push("/");
  };
  return (
    <div className="h-full w-full overflow-scroll">
      <TopBar step={1} />
      <div className="relative mt-[34px] flex w-full flex-col items-center justify-start">
        <div className="flex h-[168px] w-[541px] flex-col justify-center gap-[14px] rounded-[12px] bg-[#68D391] pl-[34px]">
          <p className="text-3xl font-semibold leading-[38px] text-white">
            사용자 등록 신청이 완료되었습니다!
          </p>
          <p className="text-base font-medium leading-[30px] text-white">
            승인이 완료되면,
            <br />
            별도의 안내없이 로그인이 가능해집니다.
          </p>
        </div>
        <div className="mt-[32px] flex w-[420px] flex-col gap-[25px]">
          <CustomInputField
            id="category"
            label="직원 유형"
            value={category}
            disabled
          />
          <CustomInputField
            id="department"
            label="소속 부서"
            value={department}
            disabled
          />
          <CustomInputField id="name" label="이름" value={name} disabled />
          <CustomInputField
            id="phone"
            label="전화번호"
            value={phone}
            disabled
          />
          <CustomInputField id="email" label="이메일" value={email} disabled />
        </div>
        <div className="mt-[54px] inline-flex h-[60px] w-[420px] items-center justify-center gap-2 rounded-xl bg-[#F56565] shadow-[0px_0px_3px_0px_rgba(0,0,0,0.2)]">
          <img src={Stop} alt="waiting" />
          <p className="text-lg font-bold leading-7 text-white">
            현재 승인 대기중 입니다.
          </p>
        </div>
        <p
          onClick={handleGoBackClick}
          className="mb-[193px] mt-[14px] cursor-pointer text-sm font-medium leading-normal text-[#68769F]"
        >
          첫 화면으로 돌아가기
        </p>
        <img
          className="absolute bottom-0 w-screen"
          src={WaveFooter}
          alt="Health_Mate_WaveFooter"
        />
      </div>
    </div>
  );
}
