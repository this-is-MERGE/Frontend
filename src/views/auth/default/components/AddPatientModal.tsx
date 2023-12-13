import { MdOutlineClose } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import CustomInput from "./CustomInput";
import Radio from "components/radio";
import { getUserAPI, updatePatientAPI } from "apis/patient";
import { SimepleUserType } from "types/simple-user";
import { useEffect, useState } from "react";

interface ModalProps {
  modalStatus: boolean;
  setModalStatus: React.Dispatch<React.SetStateAction<boolean>>;
  reloadPatients: () => Promise<void>;
}

function AddPatientModal({
  modalStatus,
  setModalStatus,
  reloadPatients,
}: ModalProps) {
  const onCloseButton = () => {
    setModalStatus(!modalStatus);
  };

  let [data, setData] = useState<SimepleUserType[]>([]);

  const getUsers = async (): Promise<void> => {
    data = await getUserAPI();
    console.log(data);
    setData(data);
  };

  const updateUsers = (
    GENDER: string,
    AGE: number,
    ADDRESS: string,
    PHONE_NUMBER: number,
    RESIDENT_REGISTRATION_NUMBER: string,
    SPECIAL_NOTE: string,
    PATIENT_NAME: string,
    USER_NAME: string,
    DEPARTMENT: string,
    NAME: string
  ) => {
    updatePatientAPI(
      GENDER,
      AGE,
      ADDRESS,
      PHONE_NUMBER,
      RESIDENT_REGISTRATION_NUMBER,
      SPECIAL_NOTE,
      PATIENT_NAME,
      USER_NAME,
      DEPARTMENT,
      NAME
    );
  };

  useEffect(() => {
    void getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="absolute left-0 top-0 z-20 h-full w-full bg-[#000] opacity-75"></div>
      <div className="absolute left-0 top-0 z-30 h-full w-full">
        <div className="absolute left-[50%] top-[50%] h-[766px] min-h-[766px] w-[356px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white opacity-100 shadow-lg ">
          <div className=" flex h-[72px] w-full justify-start rounded-t-lg dark:bg-[black]">
            <div className=" text-black ml-[25px] flex items-center gap-4 text-xl font-bold dark:text-white">
              <FaUserPlus className="fill-black h-6 w-6" />
              신규 환자 추가
            </div>
          </div>
          <button
            className="absolute right-[20px] top-[20px]"
            onClick={onCloseButton}
          >
            <MdOutlineClose className="h-7 w-7 fill-[black] hover:fill-gray-500 dark:fill-white dark:hover:fill-[#aaa]" />
          </button>
          <div className="flex h-full w-full flex-col items-center dark:bg-[black] dark:text-white">
            <div className=" h-fit w-[18rem]">
              <label
                htmlFor="countries"
                className="mb-2 block text-base font-bold text-[black] dark:text-white"
              >
                담당 의사
              </label>
              <select
                id="countries"
                className="border-blue-gray-200 block  w-full border-b-[1px] p-2.5 text-sm text-gray-900 outline-none dark:border-gray-200 dark:bg-[black] dark:text-white  dark:placeholder-gray-400"
              >
                {data.map((_, idx) => {
                  const num = idx + 1;
                  return (
                    <option key={num} value={num}>
                      {data[idx].USER_NAME}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className=" flex h-fit w-[20rem] justify-around">
              <CustomInput
                tag="환자"
                label="환자 이름"
                width={`w-[90px]`}
                pos_r={false}
              ></CustomInput>
              <CustomInput
                tag="살"
                label="환자 나이"
                width={`w-[90px]`}
                pos_r={false}
              ></CustomInput>
            </div>
            <div className="ml-[2.2rem] mt-8 flex h-fit w-[20rem] justify-start gap-10">
              <h3 className="mr-4 font-bold">성별</h3>
              <div className="flex items-center gap-10">
                <div className="flex items-center">
                  <h3 className="mr-3 font-bold">남자</h3>
                  <Radio id="html" name="type" label="남자" defaultChecked />
                </div>
                <div className="flex items-center">
                  <h3 className="mr-3 font-bold">여자</h3>
                  <Radio id="react" name="type" label="여자" />
                </div>
              </div>
            </div>
            <div className=" ml-[2.2rem] mt-4 flex h-fit w-[20rem] ">
              <CustomInput
                tag="주민등록번호"
                label="주민등록번호"
                width={`w-[190px]`}
                pos_r={true}
              ></CustomInput>
            </div>
            <div className=" ml-[2.2rem] mt-4 flex h-fit w-[20rem] ">
              <CustomInput
                tag="휴대폰 번호"
                label="휴대폰 번호"
                width={`w-[200px]`}
                pos_r={true}
              ></CustomInput>
            </div>
            <div className=" ml-[2.2rem] mt-4 flex h-fit w-[20rem] ">
              <CustomInput
                tag="거주지 주소"
                label="거주지 주소"
                width={`w-[200px]`}
                pos_r={true}
              ></CustomInput>
            </div>
            <div className="ml-[2.2rem] mt-8 flex h-fit w-[20rem] flex-col gap-4">
              <div className="font-bold ">특이사항</div>
              <div className="">
                <div className="relative">
                  <textarea
                    className="border-blue-gray-200 border-t-transparent bg-transparent text-blue-gray-700 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-t-transparent disabled:bg-blue-gray-50 pee h-[10rem] min-h-[100px] w-[18rem] resize-none rounded-[7px] border px-3 py-2.5 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border focus:border-2 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 dark:bg-[black]"
                    placeholder=" "
                  ></textarea>
                </div>
              </div>
            </div>
            <div className=" mt-4 flex h-fit  w-[20rem] justify-end">
              <button
                className="mr-4 rounded-lg border-2 border-brand-500 px-3 py-2 text-base font-medium text-brand-500 transition duration-200 hover:bg-brand-600/5 active:bg-brand-700/5 dark:border-brand-400 dark:bg-brand-400/10 dark:text-white dark:hover:bg-brand-300/10 dark:active:bg-brand-200/10"
                onClick={() => {
                  updateUsers(
                    "GENDER",
                    25,
                    "경기도 수원시 테헤란로",
                    1038472626,
                    "990902-3827292",
                    "배가아파요",
                    "아따맘마",
                    "홍의사",
                    "마취통증과",
                    "홍의사"
                  );
                  reloadPatients();
                  onCloseButton();
                  window.location.reload();
                }}
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPatientModal;
