import useInnerNavigator from "hooks/useInnerNavigator";
import React, { useState } from "react";
import TextLogo from "assets/custom/TextLogo.svg";
import WaveFooter from "assets/custom/WaveFooter.svg";
import CustomInputField from "components/fields/CustomInputField";
import toast from "react-hot-toast";
import { api } from "apis";
export default function SignIn() {
  const { push } = useInnerNavigator();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<
    | ""
    | "아이디를 입력해주세요."
    | "비밀번호를 입력해주세요."
    | "아이디 또는 비밀번호를 잘못 입력했습니다."
  >("");

  const handleSignInClick = async () => {
    if (id === "") {
      setError("아이디를 입력해주세요.");
      return;
    } else if (password === "") {
      setError("비밀번호를 입력해주세요.");
      return;
    } else setError("");

    try {
      const { data } = await api.post("signin", {
        LOGIN_ID: id,
        PASSWORD: password,
      });
      console.log(data);
      if (data?.flag) {
        if (data?.approval) push("/auth");
        else
          push(
            `/waiting?category=${data?.result?.CATEGORY}&department=${
              data?.result?.DEPARTMENT
            }&name=${data?.result?.USER_NAME}&phone=${
              data?.result?.PHONE_NUMBER ?? ""
            }&email=${data?.result?.EMAIL ?? ""}`
          );
      } else toast.error("아이디 또는 비밀번호가 틀렸습니다.");
    } catch (e) {
      toast.error("오류가 발생했습니다.");
    }
  };
  const handleSignUpClick = () => {
    push("/sign-up");
  };
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <img className="w-[429.2px]" src={TextLogo} alt="Health_Mate_TextLogo" />
      <div className="mt-[60px] w-[446px]">
        <p className="text-black text-3xl font-semibold leading-[38px]">
          로그인
        </p>
        <p className="text-black mt-[14px] text-lg font-medium leading-7">
          병원 관계자만 로그인이 가능합니다.
          <br />
          일반 내원환자께서는 이전 페이지에서 설문조사만 가능합니다.
        </p>
        <CustomInputField
          id="id"
          label="아이디"
          extra="mt-[28px]"
          placeholder="아이디"
          value={id}
          onChangeValue={(e) => {
            setId(e.target.value);
          }}
        />
        <CustomInputField
          id="password"
          label="비밀번호"
          extra="mt-[10px]"
          placeholder="비밀번호"
          value={password}
          onChangeValue={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
        />
        <p className="mt-[7px] h-[21px] text-sm font-medium leading-normal text-[#F56565]">
          {error}
        </p>
      </div>
      <button
        onClick={handleSignInClick}
        className="mt-[8px] inline-flex h-14 w-[446px] items-center justify-center rounded-xl bg-brand-400 transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
      >
        <p className="text-lg font-bold leading-7 text-white">로그인</p>
      </button>
      <div className="mt-[14px] inline-flex items-start justify-center gap-12">
        <p className="cursor-pointer text-center text-sm font-medium leading-normal text-[#68769F]">
          아이디 찾기
        </p>
        <p className="cursor-pointer text-center text-sm font-medium leading-normal  text-[#68769F]">
          비밀번호 찾기
        </p>
        <p
          onClick={handleSignUpClick}
          className="cursor-pointer text-center text-sm font-medium leading-normal  text-[#68769F]"
        >
          사용자 등록
        </p>
      </div>
      <img
        className="pointer-events-none absolute bottom-0 w-screen"
        src={WaveFooter}
        alt="Health_Mate_WaveFooter"
      />
    </div>
  );
}
