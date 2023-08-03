import { setLocale } from "yup";
import FORM_STRINGS from "constant/strings/form-string.constant";
import VALIDATION_STRINGS from "constant/strings/validation-strings.constant";
import { FormFieldsE } from "types/form.type";

setLocale({
  mixed: {
    required: ({ path }) =>
      VALIDATION_STRINGS.REQUIRED(
        FORM_STRINGS[path as FormFieldsE].validationName ??
          FORM_STRINGS[path as FormFieldsE].label
      ),
  },
  string: {
    length: ({ path, length }) =>
      VALIDATION_STRINGS.LENGTH(
        FORM_STRINGS[path as FormFieldsE].validationName ??
          FORM_STRINGS[path as FormFieldsE].label,
        length
      ),
    min: ({ path, min }) =>
      VALIDATION_STRINGS.STRING_MINIMUM(
        FORM_STRINGS[path as FormFieldsE].validationName ??
          FORM_STRINGS[path as FormFieldsE].label,
        min.toString()
      ),
  },
});
