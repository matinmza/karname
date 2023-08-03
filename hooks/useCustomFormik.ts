import { useMemo } from "react";
import { FieldHelperProps, FieldInputProps, useField } from "formik";

import FORM_STRINGS from "constant/strings/form-string.constant";

import { FormFieldsE, FormStringsI } from "types/form.type";

const defaultFormString = {
  label: "",

  placeholder: "",

  textHelper: "",

  validationName: "",
};

type ErrorT = string | false | undefined;

type UseCustomFormikT = (
  name: FormFieldsE | string,

  formString?: FormStringsI
) => {
  field: FieldInputProps<any>;

  helper: FieldHelperProps<any>;

  formStrings: FormStringsI;

  error: ErrorT;

  fill: boolean;
};

const useCustomFormik: UseCustomFormikT = (name, formString) => {
  const [field, meta, helper] = useField(name as string);
  const formStrings = useMemo<FormStringsI>(
    () =>
      formString
        ? formString
        : FORM_STRINGS[name]
        ? FORM_STRINGS[name]
        : defaultFormString,
    [name]
  );

  const error = useMemo<ErrorT>(
    () => meta.touched && meta.error,

    [meta.touched, meta.error]
  );

  const fill = useMemo<boolean>(() => Boolean(meta.value), [meta.value]);

  return { field, helper, formStrings, error, fill };
};

export default useCustomFormik;
