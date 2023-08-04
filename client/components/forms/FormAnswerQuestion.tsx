"use client";
import { FormFieldsE } from "@/types/form.type";
import { Formik } from "formik";
import React, { FC } from "react";
import "validation/yupConfig";

import * as yup from "yup";

import FormikInput from "../formik-fields/FormikInput";
import { Box, Button, Stack } from "@mui/material";
import SHARED_STRINGS from "@/constant/strings/shared-strings.constant";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAnswer } from "@/apis/answers";
const validationSchema = yup.object().shape({
  [FormFieldsE.answerText]: yup.string().required(),
});
const FormAnswerQuestion: FC<{ questionId: number }> = ({ questionId }) => {
  const queryClient = useQueryClient();
  const createAnswerMutation = useMutation({
    mutationFn: (val: string) => createAnswer(val, questionId),
    onSuccess: (data) => {
      queryClient.setQueryData(["answers", data.id], data);
      queryClient.invalidateQueries(["answers", questionId], { exact: true });
    },
  });

  const handleSubmit = (values: any, { resetForm }: any) => {
    createAnswerMutation.mutate(values[FormFieldsE["answerText"]]);
    resetForm();
  };

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
              <Button
                disabled={createAnswerMutation.isLoading}
                type="submit"
                sx={{ width: 200 }}
              >
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
