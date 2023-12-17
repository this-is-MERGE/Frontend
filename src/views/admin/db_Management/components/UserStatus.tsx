import { UserType } from "types/user";
import { useEffect, useState } from "react";
import { getUserAPI, updateUserAPI } from "apis/user";
import Card from "components/card";
import CustomSwitch from "./CustomSwitch";
import CustomRadio from "components/radio/CustomRadio";

interface ModalProps {
  modalStatus: number;
}

function UserStatus({ modalStatus }: ModalProps) {
  let [data, setData] = useState<UserType[]>([]);
  const [category, setCategory] = useState("DOCTOR");

  const getUsers = async (): Promise<void> => {
    data = await getUserAPI();
    // console.log(data);
    setData(data);
  };

  const reloadUsers = async (): Promise<void> => {
    console.log("reloaded!", data);
    await getUsers();
  };

  useEffect(() => {
    void getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateUsers = (
    USER_ID: number,
    CATEGORY: string,
    DEPARTMENT: string,
    EMAIL: string,
    LOGIN_ID: string,
    PASSWORD: string,
    PHONE_NUMBER: string,
    USER_NAME: string
  ) => {
    updateUserAPI(
      USER_ID,
      CATEGORY,
      DEPARTMENT,
      EMAIL,
      LOGIN_ID,
      PASSWORD,
      PHONE_NUMBER,
      USER_NAME
    );
  };

  console.log(data);

  return (
    <>
      <Card extra={"w-full h-full sm:overflow-auto px-6 pb-6 col-span-4"}>
        <header className="relative flex h-[53px] items-center justify-between border-b-[1px] pb-6 pt-[1.9rem]">
          <div className="title-container">
            <div className="flex gap-2 text-2xl font-bold text-gray-600 dark:text-white">
              {/* #{data[modalStatus].USER_ID} */}
              <p className="text-2xl font-bold text-navy-700 dark:text-white">
                {/* {data[modalStatus].USER_NAME} */}
              </p>
            </div>
          </div>
        </header>
        <div className="mt-[30px] rounded-[8px] border-[1px] p-3 pb-0">
          <div className="text-base font-bold">직원 유형</div>
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
        <div className="mt-[30px] rounded-[8px] border-[1px] p-3">
          <div className="text-base font-bold">소속 부서</div>
          <CustomSwitch />
        </div>
        <div className="mt-[30px] flex gap-7 rounded-[8px] border-[1px] p-3">
          <div className="text-base font-bold">이름</div>
          {/* <div>{data[modalStatus].USER_NAME}</div> */}
        </div>
        <div className="mt-[30px] flex gap-7 rounded-[8px] border-[1px] p-3">
          <div className="text-base font-bold">아이디</div>
          {/* <div>{data[modalStatus].LOGIN_ID}</div> */}
        </div>
        <div className="mt-[30px] flex gap-7 rounded-[8px] border-[1px] p-3">
          <div className="text-base font-bold">휴대폰 번호</div>
          {/* <div>{data[modalStatus].PHONE_NUMBER}</div> */}
        </div>
        <div className="mt-[30px] flex gap-7 rounded-[8px] border-[1px] p-3">
          <div className="text-base font-bold">이메일</div>
          {/* <div>{data[modalStatus].EMAIL}</div> */}
        </div>
        <div className="flex w-full justify-end">
          <button
            className={`mt-6 flex flex-row items-center gap-2 rounded-xl bg-brand-500 px-4 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200`}
            data-ripple-light
            onClick={() => {
              updateUsers(
                1,
                "간호사",
                "신경통증과",
                "www8565@naver.com",
                "kim2345",
                "@ASas1234",
                "010-7766-5544",
                "김의사"
              );
              reloadUsers();
              // window.location.reload();
            }}
          >
            신규 환자 추가
          </button>
        </div>
      </Card>
    </>
  );
}

export default UserStatus;
