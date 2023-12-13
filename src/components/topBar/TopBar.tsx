import React from "react";
import TextLogo from "assets/custom/TextLogo.svg";
import Arrow from "assets/img/sign-up/arrow.svg";
function Tab({ label, selected }: { label: string; selected: boolean }) {
  return (
    <div
      className={`text-black flex h-[39px] w-[122.72px] items-center justify-center border-b-2 text-sm font-bold leading-normal ${
        selected ? "border-[#7551FF]" : "border-transparent"
      }`}
    >
      {label}
    </div>
  );
}
function TopBar({ step }: { step: number }) {
  return (
    <div className="relative flex h-[185px] w-full items-center justify-center border-b-2 border-[#E2E8F0] bg-white">
      <img className="w-[429.2px]" src={TextLogo} alt="Health_Mate_TextLogo" />
      <div className="absolute bottom-[-2px] flex gap-[39px]">
        <Tab label="사용자 정보 입력" selected={step === 0} />
        <img src={Arrow} alt="arrow" />
        <Tab label="가입 승인 대기" selected={step === 1} />
        <img src={Arrow} alt="arrow" />
        <Tab label="가입 완료" selected={step === 2} />
      </div>
    </div>
  );
}

export default TopBar;
