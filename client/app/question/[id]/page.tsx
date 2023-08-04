"use client";
import { getAnswer } from "@/apis/awnsers";
import { getQuestion } from "@/apis/questions";
import CardAnswer from "@/components/cards/CardAnswer";
import CardQuestion from "@/components/cards/CardQuestion";
import FormAnswerQuestion from "@/components/forms/FormAwnserQuestion";
import SHARED_STRINGS from "@/constant/strings/shared-strings.constant";
import { answerI, questionI } from "@/types/question.type";
import { NextPageWithParam } from "@/types/shared.type";
import {
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
  });
  const answersQuery = useQuery<answerI[]>({
    queryKey: ["answers", questionQuery?.data?.id],
    enabled: questionQuery?.data?.id != null,
    queryFn: (val) => {
      return getAnswer(questionQuery?.data?.id as number);
    },
  });

  if (questionQuery.isLoading || answersQuery.isLoading) {
    return (
      <Box display="flex" justifyContent="center" paddingY={10}>
        <CircularProgress />
      </Box>
    );
  }
  if (questionQuery.isError) {
    <div>{JSON.stringify(questionQuery.error)}</div>;
  }
  return (
    <Container sx={{ py: "32px" }}>
      {questionQuery.data && (
        <CardQuestion {...questionQuery.data} showDetailButton={false} />
      )}
      {answersQuery.data && answersQuery.data.length > 0 ? (
        <Typography variant="h2" mt="24px" mb="16px">
          {SHARED_STRINGS.ANSWERS}
        </Typography>
      ) : null}

      <Stack gap="20px">
        {answersQuery.data?.map((item) => (
          <CardAnswer key={item.id} {...item} />
        ))}
      </Stack>
      <Typography variant="h2" mt="24px" mb="18px">
        {SHARED_STRINGS.SUBMIT_YOUR_ANSWER}
      </Typography>
      {typeof questionQuery?.data?.id !== "undefined" ? (
        <FormAnswerQuestion questionId={questionQuery.data.id} />
      ) : null}
    </Container>
  );
};

export default QuestionSinglePage;
