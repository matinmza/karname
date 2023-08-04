import SHARED_STRINGS from "@/constant/strings/shared-strings.constant";
import { answerI } from "@/types/question.type";
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
  const avatar = "/img/avatar2.svg";
  const isGood = 0;
  const isBad = 0;

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

export function addStatusAnswer(answer: answerI, status: "isGood" | "isBad") {
  return axios
    .put(BASE_URL + "/answers/" + answer.id, {
      ...answer,
      [status]: answer[status] + 1,
    })
    .then((res) => res.data);
}
