import CardAnswer from "@/components/cards/CardAnswer";
import CardQuestion from "@/components/cards/CardQuestion";
import FormAnswerQuestion from "@/components/forms/FormAwnserQuestion";
import SHARED_STRINGS from "@/constant/strings/shared-strings.constant";
import { NextPageWithParam } from "@/types/shared.type";
import { Container, Stack, Typography } from "@mui/material";
import React from "react";

const QuestionSinglePage: NextPageWithParam<"id"> = (props) => {
  return (
    <Container sx={{ py: "32px" }}>
      <CardQuestion
        createOn={new Date().toISOString()}
        id={1}
        questionText="سلام من توی ساخت authentication ساده تو ری اکت مشکل دارم"
        subject="مشکل auth در react"
        showDetailButton={false}
      />
      <Typography variant="h2" mt="24px" mb="16px">
        {SHARED_STRINGS.ANSWERS}
      </Typography>
      <Stack gap="20px">
        {[1, 2].map((item) => (
          <CardAnswer
            key={item}
            createOn={new Date().toISOString()}
            text="سلام من توی ساخت authentication ساده تو ری اکت مشکل دارم"
            fullName="علی کیا"
            id={1}
            isBad={12}
            isGood={22}
          />
        ))}
      </Stack>
      <Typography variant="h2" mt="24px" mb="18px">
        {SHARED_STRINGS.SUBMIT_YOUR_ANSWER}
      </Typography>
      <FormAnswerQuestion />
    </Container>
  );
};

export default QuestionSinglePage;
