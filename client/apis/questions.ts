import { questionI } from "@/types/question.type";
import server from 'apis/server'
export const getQuestions = () =>
server.get("/questions").then((res) => res.data);
export const createQuestion = (dto: {
  questionText: string;
  subject: string;
}) => {
  const createOn = new Date().toISOString();
  const avatar = "/img/avatar2.svg";
  const answerLength = 0;
  return server
    .post("/questions", { createOn, avatar, answerLength, ...dto })
    .then((res) => res.data);
};

export function getQuestion(id: string | number) {
  return server.get("/questions/" + id).then((res) => res.data);
}

export function addAnswerLength(question: questionI) {
  return server
    .put("/questions/" + question.id, {
      ...question,
      answerLength: question.answerLength + 1,
    })
    .then((res) => res.data);
}
