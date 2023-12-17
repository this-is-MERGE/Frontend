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
