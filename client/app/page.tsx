"use client";
import { getQuestions } from "@/apis/questions";
import CardQuestion from "@/components/cards/CardQuestion";
import { questionI } from "@/types/question.type";
import { Box, CircularProgress, Container, Stack } from "@mui/material";
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

  return (
    <main>
      <Container sx={{ py: "32px" }}>
        <Stack gap="20px">
          {questionsQuery.data?.map((item) => (
            <CardQuestion key={item.id} {...item} />
          ))}
        </Stack>
      </Container>
    </main>
  );
};

export default Home;
