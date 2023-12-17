import { api } from ".";
import { PatientType } from "../types/patient";

const PATIENT_PATH = "/patient";

// 임시
export const createPatientAPI = async (
  Patient: string
): Promise<PatientType> => {
  const response = await api.post(PATIENT_PATH, { Patient });

  return response.data;
};

export const getPatientAPI = async (): Promise<PatientType[]> => {
  const response = (await api.get(PATIENT_PATH)).data;
  return response.patients;
};

const todayPatient = async (): Promise<PatientType[]> => {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate() > 9 ? today.getDate() : `0${today.getDate()}`;
  let response = (await api.get(PATIENT_PATH)).data.patients;
  let arr = [];

  for (let i = 0; i < response.length; i++) {
    if (response[i].RESERVATION_DATE === null) {
      continue;
    }

    if (
      response[i].RESERVATION_DATE.substring(
        0,
        response[i].RESERVATION_DATE.indexOf(" ")
      ) === `${year}-${month}-${date}`
    ) {
      arr.push(response[i]);
    }
  }
  return arr;
};

export const getTodayPatientAPI = async (): Promise<PatientType[]> => {
  return todayPatient();
};

export const updatePatientAPI = async (
  GENDER: string,
  AGE: number,
  ADDRESS: string,
  PHONE_NUMBER: string,
  RESIDENT_REGISTRATION_NUMBER: string,
  SPECIAL_NOTE: string,
  PATIENT_NAME: string,
  USER_NAME: string,
  DEPARTMENT: string
): Promise<PatientType> => {
  const response = await api.post(`${PATIENT_PATH}`, {
    GENDER,
    AGE,
    ADDRESS,
    PHONE_NUMBER,
    RESIDENT_REGISTRATION_NUMBER,
    SPECIAL_NOTE,
    PATIENT_NAME,
    USER_NAME,
    DEPARTMENT,
  });

  return response.data;
};

export const deletePatientAPI = async (PATIENT_ID: number) => {
  if (PATIENT_ID !== 0) {
    alert(`${PATIENT_ID}번 환자가 삭제되었습니다.`);
  } else {
    alert(`환자가 선택되지 않았습니다.`);
  }
  const res = await api.delete(`${PATIENT_PATH}/${PATIENT_ID}`);
  return res.status === 204;
};
