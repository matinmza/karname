import SHARED_STRINGS from "@/constant/strings/shared-strings.constant";
import { answerI } from "@/types/question.type";
import server from "apis/server"

export const getAnswer = (questionId: number) => {
  return server
    .get("/answers", {
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

  return server
    .post("/answers", {
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
  return server
    .put( "/answers/" + answer.id, {
      ...answer,
      [status]: answer[status] + 1,
    })
    .then((res) => res.data);
}
