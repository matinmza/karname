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
};

export default FORM_STRINGS;
