export interface answerI {
  createOn: string;
  isGood: number;
  isBad: number;
  text: string;
  id: number;
  fullName: string;
}
export interface questionI {
  subject: string;
  questionText: string;
  createOn: string;
  id: number;
  answer: answerI[];
}
