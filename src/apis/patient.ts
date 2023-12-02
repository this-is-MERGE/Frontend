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

export const updatePatientAPI = async (
  PATIENT_ID: number,
  GENDER: string,
  AGE: number,
  ADDRESS: string,
  PHONE_NUMBER: number,
  RESIDENT_REGISTRATION_NUMBER: string,
  SPECIAL_NOTE: string,
  USER_NAME: string,
  NAME: string
): Promise<PatientType> => {
  const response = await api.put(`${PATIENT_PATH}/${PATIENT_ID}`, {
    PATIENT_ID,
    GENDER,
    AGE,
    ADDRESS,
    PHONE_NUMBER,
    RESIDENT_REGISTRATION_NUMBER,
    SPECIAL_NOTE,
    USER_NAME,
    NAME,
  });

  return response.data;
};

export const deletePatient = async (PATIENT_ID: number): Promise<boolean> => {
  const res = await api.delete(`${PATIENT_PATH}/${PATIENT_ID}`);
  return res.status === 204;
};
