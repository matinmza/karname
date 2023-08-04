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

export function getQuestion(id: string) {
  return axios.get(BASE_URL + "/questions/" + id).then((res) => res.data);
}
