import { FormFieldsE } from "@/types/form.type";
import { Formik } from "formik";
import React, { FC } from "react";
import "validation/yupConfig";

import * as yup from "yup";

import FormikInput from "../formik-fields/FormikInput";
import { Box, Button, Stack } from "@mui/material";
import SHARED_STRINGS from "@/constant/strings/shared-strings.constant";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createQuestion } from "@/apis/questions";
const validationSchema = yup.object().shape({
  [FormFieldsE.questionText]: yup.string().required(),
  [FormFieldsE.subject]: yup.string().required(),
});
const FormNewQuestion: FC<{ onClose: () => any }> = (props) => {
  const queryClient = useQueryClient();
  const createQuestionMutation = useMutation({
    mutationFn: createQuestion,
    onSuccess: (data) => {
      queryClient.setQueryData(["questions", data.id], data);
      queryClient.invalidateQueries(["questions"], { exact: true });
      props.onClose();
    },
  });

  const handleSubmit = (values: any) => {
    createQuestionMutation.mutate({
      questionText: values[FormFieldsE.questionText],
      subject: values[FormFieldsE.subject],
    });
  };

  return (
    <Formik
      initialValues={{
        [FormFieldsE.subject]: "",
        [FormFieldsE.questionText]: "",
      }}
      validateOnBlur
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Stack gap="14px" component="form" onSubmit={formik.handleSubmit}>
          <FormikInput name={FormFieldsE.subject} />
          <FormikInput name={FormFieldsE.questionText} multiline rows={7.5} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "16px",
              mt: "10px",
            }}
          >
            <Button
              variant="text"
              sx={{ px: "25px" }}
              onClick={props.onClose}
              disabled={createQuestionMutation.isLoading}
            >
              {SHARED_STRINGS.CANCEL}
            </Button>
            <Button
              disabled={createQuestionMutation.isLoading}
              type="submit"
              sx={{ px: "14px" }}
            >
              {SHARED_STRINGS.CREATE_QUESTION}
            </Button>
          </Box>
        </Stack>
      )}
    </Formik>
  );
};

export default FormNewQuestion;
