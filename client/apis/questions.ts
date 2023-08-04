import { questionI } from "@/types/question.type";
import axios from "axios";
const BASE_URL = "http://localhost:8800";
export const getQuestions = () =>
  axios.get(BASE_URL + "/questions").then((res) => res.data);
export const createQuestion = (dto: {
  questionText: string;
  subject: string;
}) => {
  const createOn = new Date().toISOString();
  const avatar = "/img/avatar2.svg";

  return axios
    .post(BASE_URL + "/questions", { createOn, avatar, ...dto })
    .then((res) => res.data);
};

export function getQuestion(id: string | number) {
  return axios.get(BASE_URL + "/questions/" + id).then((res) => res.data);
}

export function addAnswerLength(question: questionI) {
  return axios
    .put(BASE_URL + "/questions/" + question.id, {
      ...question,
      answerLength: question.answerLength + 1,
    })
    .then((res) => res.data);
}
