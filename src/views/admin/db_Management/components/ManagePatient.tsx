import { FaUserEdit, FaUserPlus, FaUserSlash } from "react-icons/fa";
import { useState } from "react";

interface PatientsProps {
  reloadPatients: () => Promise<void>;
}

function ManagePatient({ reloadPatients }: PatientsProps): JSX.Element {
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  let checked = 0;

  const checkSelected = () => {
    let list = document.getElementsByClassName("ischecked");
    for (let i = 0; i < list.length; i++) {
      if ((list[i] as HTMLInputElement).checked) {
        let elemId = (list[i] as HTMLInputElement).id;
        let id = elemId.split("_")[1];
        checked = Number(id);
      }
    }
  };
  checkSelected();

  const onModalOpen = () => {
    setModalStatus(!modalStatus);
  };

  return (
    <div className="mt-[30px] flex justify-end gap-4">
      <button
        className="flex flex-row items-center gap-2 rounded-xl bg-brand-500 px-4 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        data-ripple-light
      >
        <FaUserEdit className="h-4.5 w-4.5" />
        환자 정보 수정
      </button>
      <button
        className={`flex flex-row items-center gap-2 rounded-xl bg-brand-500 px-4 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200`}
        data-ripple-light
        onClick={onModalOpen}
      >
        <FaUserPlus className="h-4.5 w-4.5" />
        신규 환자 추가
      </button>
      <button
        className="flex flex-row items-center gap-2 rounded-xl bg-red-500 px-4 py-3 text-base font-medium text-white transition duration-200 hover:bg-red-600 active:bg-red-700 dark:bg-red-400 dark:text-white dark:hover:bg-red-300 dark:active:bg-red-200"
        data-ripple-light
        onClick={() => {
          reloadPatients();
          window.location.reload();
        }}
      >
        <FaUserSlash className="h-4.5 w-4.5" />
        선택 환자 삭제
      </button>
    </div>
  );
}

export default ManagePatient;
