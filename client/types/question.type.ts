export interface answerI {
  createOn: string;
  isGood: number;
  isBad: number;
  text: string;
  id: number;
  fullName: string;
  avatar: string;
}
export interface questionI {
  subject: string;
  questionText: string;
  createOn: string;
  id: number;
  avatar: string;
}
