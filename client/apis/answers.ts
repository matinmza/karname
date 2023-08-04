import SHARED_STRINGS from "@/constant/strings/shared-strings.constant";
import axios from "axios";
const BASE_URL = "http://localhost:8800";
export const getAnswer = (questionId: number) => {
  return axios
    .get(BASE_URL + "/answers", {
      params: {
        questionId,
      },
    })
    .then((res) => res.data);
};
export const createAnswer = (text: string, questionId: number) => {
  const createOn = new Date().toISOString();
  const fullName = SHARED_STRINGS.STATIC_PROFILE_NAME;
  const avatar = "/img/avatar.svg";
  const isGood = Math.floor(Math.random() * 100);
  const isBad = Math.floor(Math.random() * 100);

  return axios
    .post(BASE_URL + "/answers", {
      createOn,
      avatar,
      fullName,
      text,
      isBad,
      isGood,
      questionId,
    })
    .then((res) => res.data);
};
