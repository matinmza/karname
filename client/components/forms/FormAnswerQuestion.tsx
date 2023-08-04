"use client";
import { FormFieldsE } from "@/types/form.type";
import { Formik } from "formik";
import React, { FC } from "react";
import "validation/yupConfig";

import * as yup from "yup";

import FormikInput from "../formik-fields/FormikInput";
import { Box, Button, Stack } from "@mui/material";
import SHARED_STRINGS from "@/constant/strings/shared-strings.constant";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createAnswer } from "@/apis/answers";
import { questionI } from "@/types/question.type";
import { addAnswerLength, getQuestion } from "@/apis/questions";
const validationSchema = yup.object().shape({
  [FormFieldsE.answerText]: yup.string().required(),
});
const FormAnswerQuestion: FC<{ question: questionI }> = ({ question }) => {
  const questionId = question.id;

  const queryClient = useQueryClient();

  const changeQuestionMutation = useMutation({
    mutationFn: () => addAnswerLength(question),
    onSuccess: (data) => {
      queryClient.setQueryData(["questions", "" + data.id], data);
      queryClient.invalidateQueries(["questions"], { exact: true });
      queryClient.invalidateQueries(["questions", "" + data.id]);
    },
  });
  const createAnswerMutation = useMutation({
    mutationFn: (val: string) => createAnswer(val, questionId),
    onSuccess: (data) => {
      queryClient.setQueryData(["answers", data.id], data);
      queryClient.invalidateQueries(["answers", "" + questionId], {
        exact: true,
      });
      changeQuestionMutation.mutate();
    },
  });

  const handleSubmit = (values: any, { resetForm }: any) => {
    createAnswerMutation.mutate(values[FormFieldsE["answerText"]]);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        [FormFieldsE.answerText]: "",
      }}
      validateOnBlur
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Stack gap="1.5rem" component="form" onSubmit={formik.handleSubmit}>
          <FormikInput name={FormFieldsE.answerText} multiline rows={6} />
          <Box>
            <Button
              disabled={createAnswerMutation.isLoading}
              type="submit"
              sx={{ width: "12.5rem" }}
            >
              {SHARED_STRINGS.SEND_RESPONSE}
            </Button>
          </Box>
        </Stack>
      )}
    </Formik>
  );
};

export default FormAnswerQuestion;
