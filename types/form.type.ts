export interface FormStringsI {
  label: string;
  placeholder: string;
  validationName?: string;
  textHelper?: string;
}

export interface FormikFieldI {
  name: FormFieldsE;
  formString?: FormStringsI;
  disabled?: boolean;
  optional?: boolean;
}

export enum FormFieldsE {
  subject = "subject",
  questionText = "questionText",
}
