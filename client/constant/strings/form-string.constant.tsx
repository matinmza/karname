import { FormFieldsE, FormStringsI } from "types/form.type";

const FORM_STRINGS: Record<FormFieldsE | string, FormStringsI> = {
  [FormFieldsE.subject]: {
    label: "موضوع",
    placeholder: "مشکل در اجرای کد",
  },
  [FormFieldsE.questionText]: {
    label: "متن سوال",
    placeholder: "مشکل در اجرای کد",
    validationName: "سوال",
  },
  [FormFieldsE.answerText]: {
    label: " پاسخ خود را بنویسید",
    placeholder: " متن پاسخ ...",
    validationName: "پاسخ",
  },
};

export default FORM_STRINGS;
