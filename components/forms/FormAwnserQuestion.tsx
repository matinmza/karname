"use client";
import { FormFieldsE } from "@/types/form.type";
import { Formik } from "formik";
import React, { FC } from "react";
import "validation/yupConfig";

import * as yup from "yup";

import FormikInput from "../formik-fields/FormikInput";
import { Box, Button, Stack } from "@mui/material";
import SHARED_STRINGS from "@/constant/strings/shared-strings.constant";
const validationSchema = yup.object().shape({
  [FormFieldsE.answerText]: yup.string().required(),
});
const FormAnswerQuestion: FC = () => {
  const handleSubmit = () => {};

  return (
    <Box>
      <Formik
        initialValues={{
          [FormFieldsE.answerText]: "",
        }}
        validateOnBlur
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Stack gap="24px" component="form" onSubmit={formik.handleSubmit}>
            <FormikInput name={FormFieldsE.answerText} multiline rows={6} />
            <Box mt="10px">
              <Button type="submit" sx={{ width: 200 }}>
                {SHARED_STRINGS.SEND_RESPONSE}
              </Button>
            </Box>
          </Stack>
        )}
      </Formik>
    </Box>
  );
};

export default FormAnswerQuestion;
