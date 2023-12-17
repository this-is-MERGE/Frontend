import { api } from ".";
import { UserType } from "../types/user";

const USER_PATH = "/master/user";
const APPROVE_USER_PATH = "/master/approval";

export const getUserAPI = async (): Promise<UserType[]> => {
  const response = (await api.get(USER_PATH)).data;
  return response;
};

export const getApproveUserAPI = async (): Promise<UserType[]> => {
  const response = (await api.get(APPROVE_USER_PATH)).data;
  return response;
};

export const ApproveUserAPI = async (USER_ID: number): Promise<UserType> => {
  console.log(USER_ID);
  const response = await api.post(`${APPROVE_USER_PATH}/${USER_ID}`, {
    USER_ID,
  });
  return response.data;
};

export const deleteUserAPI = async (USER_ID: number) => {
  if (USER_ID !== 0) {
    alert(`${USER_ID}번 유저가 삭제되었습니다.`);
  } else {
    alert(`환자가 선택되지 않았습니다.`);
  }
  const res = await api.delete(`${USER_PATH}/${USER_ID}`);
  return res.status === 204;
};

export const updateUserAPI = async (
  USER_ID: number,
  CATEGORY: string,
  DEPARTMENT: string,
  EMAIL: string,
  LOGIN_ID: string,
  PASSWORD: string,
  PHONE_NUMBER: string,
  USER_NAME: string
): Promise<UserType> => {
  const response = await api.put(`${USER_PATH}/${USER_ID}`, {
    USER_ID,
    CATEGORY,
    DEPARTMENT,
    EMAIL,
    LOGIN_ID,
    PASSWORD,
    PHONE_NUMBER,
    USER_NAME,
  });

  return response.data;
};
