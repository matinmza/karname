"use client";
import { getQuestions } from "@/apis/questions";
import CardQuestion from "@/components/cards/CardQuestion";
import SHARED_STRINGS from "@/constant/strings/shared-strings.constant";
import { questionI } from "@/types/question.type";
import { Alert, Box, CircularProgress, Container, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { NextPage } from "next";
const Home: NextPage = () => {
  const questionsQuery = useQuery<questionI[]>({
    queryKey: ["questions"],
    queryFn: getQuestions,
  });

  if (questionsQuery.isLoading) {
    return (
      <Box display="flex" justifyContent="center" paddingY={10}>
        <CircularProgress />
      </Box>
    );
  }
  if (questionsQuery.isError) {
    return (
      <Alert sx={{ m: 5 }} severity="error">
        {SHARED_STRINGS.ERROR_TO_GET_QUESTIONS}
      </Alert>
    );
  }
  return (
    <main>
      <Container sx={{ py: "2rem" }}>
        <Stack gap="1.25rem">
          {questionsQuery.data?.map((item) => (
            <CardQuestion key={item.id} {...item} />
          ))}
        </Stack>
      </Container>
    </main>
  );
};

export default Home;
