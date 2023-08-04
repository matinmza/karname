"use client";
import { getAnswer } from "@/apis/answers";
import { getQuestion } from "@/apis/questions";
import CardAnswer from "@/components/cards/CardAnswer";
import CardQuestion from "@/components/cards/CardQuestion";
import FormAnswerQuestion from "@/components/forms/FormAnswerQuestion";

import SHARED_STRINGS from "@/constant/strings/shared-strings.constant";
import { answerI, questionI } from "@/types/question.type";
import { NextPageWithParam } from "@/types/shared.type";
import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const QuestionSinglePage: NextPageWithParam<"id"> = (props) => {
  const questionQuery = useQuery<questionI>({
    queryKey: ["posts", props.params.id],
    queryFn: () => getQuestion(props.params.id),

    onError: () => {},
    retry: 1,
  });
  const answersQuery = useQuery<answerI[]>({
    queryKey: ["answers", questionQuery?.data?.id],
    enabled: questionQuery?.data?.id != null,
    queryFn: (val) => {
      return getAnswer(questionQuery?.data?.id as number);
    },
  });
  if (questionQuery.isLoading) {
    return (
      <Box display="flex" justifyContent="center" paddingY={10}>
        <CircularProgress />
      </Box>
    );
  }
  if (questionQuery.isError) {
    return (
      <Alert sx={{ m: 5 }} severity="error">
        {SHARED_STRINGS.ERROR_TO_GET_QUESTIONS}
      </Alert>
    );
  }
  if (answersQuery.isError) {
    return (
      <Alert sx={{ m: 5 }} severity="error">
        {SHARED_STRINGS.ERROR_TO_GET_ANSWER}
      </Alert>
    );
  }
  return (
    <Container sx={{ py: "32px" }}>
      {questionQuery.data && (
        <CardQuestion
          {...questionQuery.data}
          showDetailButton={false}
          showAvatar
        />
      )}
      {answersQuery.data && answersQuery.data.length > 0 ? (
        <Typography component="h2" variant="h1" mt="24px" mb="16px">
          {SHARED_STRINGS.ANSWERS}
        </Typography>
      ) : null}

      <Stack gap="20px">
        {answersQuery.data?.map((item) => (
          <CardAnswer key={item.id} {...item} />
        ))}
      </Stack>
      <Typography component="h2" variant="h1" mt="24px" mb="18px">
        {SHARED_STRINGS.SUBMIT_YOUR_ANSWER}
      </Typography>
      {typeof questionQuery?.data?.id !== "undefined" ? (
        <FormAnswerQuestion questionId={questionQuery.data.id} />
      ) : null}
    </Container>
  );
};

export default QuestionSinglePage;
