import { useState } from "react";
import { ApproveUserAPI } from "apis/user";

interface ReloadUsersProps {
  reloadUsers: () => Promise<void>;
}

function ManageUser({ reloadUsers }: ReloadUsersProps): JSX.Element {
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

  const onApproveClick = async (): Promise<void> => {
    if (window.confirm("가입 승인을 허가하시겠습니까?")) {
      checkSelected();
      const flag = await ApproveUserAPI(checked);
      if (flag) {
      }
    }
  };

  return (
    <button
      className="flex flex-row items-center gap-2 rounded-xl bg-brand-500 px-4 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
      data-ripple-light
      onClick={() => {
        onApproveClick();
        reloadUsers();
      }}
    >
      가입 승인
    </button>
  );
}

export default ManageUser;
