import useInnerNavigator from "hooks/useInnerNavigator";
import React, { useState } from "react";
import WaveFooter from "assets/custom/WaveFooter.svg";
import CustomInputField from "components/fields/CustomInputField";
import { Option, Select } from "@material-tailwind/react";
import CustomSelect from "components/select/CustomSelect";
import TopBar from "components/topBar/TopBar";
import CustomRadio from "components/radio/CustomRadio";
import toast, { Toaster } from "react-hot-toast";
import { api } from "apis";
export default function SignUp() {
  const { push } = useInnerNavigator();
  const [category, setCategory] = useState("DOCTOR");
  const [department, setDepartment] = useState("마취통증과");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState<
    "" | "이름을 입력해주세요." | "올바른 이름 형식이 아닙니다."
  >("");
  const [idError, setIdError] = useState<
    "" | "아이디를 입력해주세요." | "올바른 아이디 형식이 아닙니다."
  >("");
  const [passwordError, setPasswordError] = useState<
    "" | "비밀번호를 입력해주세요." | "올바른 비밀번호 형식이 아닙니다."
  >("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    "" | "비밀번호를 확인해주세요."
  >("");
  const [phoneError, setPhoneError] = useState<
    "" | "올바른 전화번호 형식이 아닙니다."
  >("");
  const [emailError, setEmailError] = useState<
    "" | "올바른 이메일 형식이 아닙니다."
  >("");
  const handleRegisterClick = async () => {
    let willReturn = false;
    if (name === "") {
      setNameError("이름을 입력해주세요.");
      willReturn = true;
    } else if (!/^[가-힣a-zA-Z]{2,10}$/.test(name)) {
      setNameError("올바른 이름 형식이 아닙니다.");
      willReturn = true;
    } else setNameError("");

    if (id === "") {
      setIdError("아이디를 입력해주세요.");
      willReturn = true;
    } else if (!/^[a-zA-Z0-9]{5,15}$/.test(id)) {
      setIdError("올바른 아이디 형식이 아닙니다.");
      willReturn = true;
    } else setIdError("");

    if (password === "") {
      setPasswordError("비밀번호를 입력해주세요.");
      willReturn = true;
    } else if (
      !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^_])[a-zA-Z\d!@#$%^_]{8,20}$/.test(
        password
      )
    ) {
      setPasswordError("올바른 비밀번호 형식이 아닙니다.");
      willReturn = true;
    } else setPasswordError("");

    if (password !== confirmPassword) {
      setConfirmPasswordError("비밀번호를 확인해주세요.");
      willReturn = true;
    } else setConfirmPasswordError("");

    if (phone === "") setPhoneError("");
    else if (!/^[0-9]{11}$/.test(phone)) {
      setPhoneError("올바른 전화번호 형식이 아닙니다.");
      willReturn = true;
    } else setPhoneError("");

    if (email === "") setEmailError("");
    else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      setEmailError("올바른 이메일 형식이 아닙니다.");
      willReturn = true;
    } else setEmailError("");
    if (willReturn) return;
    try {
      const { data } = await api.post("signup", {
        LOGIN_ID: id,
        PASSWORD: password,
        USER_NAME: name,
        PHONE_NUMBER: phone === "" ? null : phone,
        ...(email !== "" ? { EMAIL: email } : null),
        CATEGORY: category,
        DEPARTMENT: department,
      });
      console.log(data);
      if (data?.flag) {
        toast.success("등록 승인 신청이 완료되었습니다.");
        push("/sign-in");
      } else toast.error("중복 아이디입니다.");
    } catch (e) {
      toast.error("오류가 발생했습니다.");
    }
  };
  return (
    <div className="h-full w-full overflow-scroll">
      <TopBar step={0} />
      <div className="relative mt-[34px] flex w-full flex-col items-center justify-start">
        <div className="flex h-[168px] w-[541px] flex-col justify-center gap-[14px] rounded-[12px] bg-[#7551FF] pl-[34px]">
          <p className="text-3xl font-semibold leading-[38px] text-white">
            사용자 등록
          </p>
          <p className=" text-base font-medium leading-[30px] text-white">
            병원 관계자만 등록이 가능합니다.
            <br />
            일반 내원환자께서는 이전 페이지에서 설문조사만 가능합니다.
          </p>
        </div>
        <div className="mt-[32px] flex w-[446px] flex-col gap-[10px]">
          <div>
            <label
              htmlFor={id}
              className="mb-[6px] text-sm font-medium leading-normal text-[#485585]"
            >
              직원 유형
            </label>
            <div className="mb-[21px] mt-[8px] flex items-center gap-[18px]">
              <div className="flex items-center gap-[7px]">
                <CustomRadio
                  id="doctor"
                  name="category"
                  checked={category === "DOCTOR"}
                  onChange={() => {
                    setCategory("DOCTOR");
                  }}
                />
                <p className="text-black text-sm font-medium leading-normal">
                  Doctor
                </p>
              </div>
              <div className="flex items-center gap-[7px]">
                <CustomRadio
                  id="nurse"
                  name="category"
                  checked={category === "NURSE"}
                  onChange={() => {
                    setCategory("NURSE");
                  }}
                />
                <p className="text-black text-sm font-medium leading-normal">
                  Nurse
                </p>
              </div>
              <div className="flex items-center gap-[7px]">
                <CustomRadio
                  id="physical-thera"
                  name="category"
                  checked={category === "Physical_Therapist"}
                  onChange={() => {
                    setCategory("Physical_Therapist");
                  }}
                />
                <p className="text-black text-sm font-medium leading-normal">
                  Physical Thera
                </p>
              </div>
            </div>
          </div>
          <CustomSelect
            id="department"
            label="소속 부서"
            value={department}
            onChangeValue={(v) => setDepartment(v)}
            hasStateMessage
          >
            <Option value="마취통증과">마취통증과</Option>
            <Option value="신경통증과">신경통증과</Option>
            <Option value="재활치료과">재활치료과</Option>
          </CustomSelect>
          <CustomInputField
            id="name"
            label="이름"
            placeholder="이름을 입력해주세요."
            value={name}
            onChangeValue={(e) => {
              setName(e.target.value);
            }}
            hasStateMessage
            stateMessage={nameError}
            error={nameError !== ""}
          />
          <CustomInputField
            id="id"
            label="아이디"
            placeholder="아이디를 입력해주세요."
            value={id}
            onChangeValue={(e) => {
              setId(e.target.value);
            }}
            hasStateMessage
            stateMessage={idError}
            error={idError !== ""}
          />
          <CustomInputField
            id="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요."
            value={password}
            onChangeValue={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            hasStateMessage
            stateMessage={passwordError}
            error={passwordError !== ""}
          />
          <CustomInputField
            id="confrim-password"
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 입력해주세요."
            value={confirmPassword}
            onChangeValue={(e) => {
              setConfirmPassword(e.target.value);
            }}
            type="password"
            hasStateMessage
            stateMessage={confirmPasswordError}
            error={confirmPasswordError !== ""}
          />
          <CustomInputField
            id="phone"
            label="전화번호"
            placeholder="전화번호를 입력해주세요."
            value={phone}
            onChangeValue={(e) => {
              setPhone(e.target.value);
            }}
            hasStateMessage
            stateMessage={phoneError}
            error={phoneError !== ""}
          />
          <CustomInputField
            id="email"
            label="이메일"
            placeholder="이메일을 입력해주세요."
            value={email}
            onChangeValue={(e) => {
              setEmail(e.target.value);
            }}
            hasStateMessage
            stateMessage={emailError}
            error={emailError !== ""}
          />
        </div>
        <button
          onClick={handleRegisterClick}
          className="mb-[187px] mt-[30px] inline-flex h-[60px] w-[207px] items-center justify-center rounded-xl bg-brand-400 transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        >
          <p className="text-lg font-bold leading-7 text-white">
            등록 승인 신청
          </p>
        </button>
        <img
          className="absolute bottom-0 w-screen"
          src={WaveFooter}
          alt="Health_Mate_WaveFooter"
        />
      </div>
    </div>
  );
}
