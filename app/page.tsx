import CardQuestion from "@/components/cards/CardQuestion";
import { Box, Container, Stack } from "@mui/material";

import { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <main>
      <Container sx={{ py: "32px" }}>
        <Stack gap="20px">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <CardQuestion
              createOn={new Date().toISOString()}
              key={item}
              id={item}
              questionText="سلام من توی ساخت authentication ساده تو ری اکت مشکل دارم"
              subject="مشکل auth در react"
            />
          ))}
        </Stack>
      </Container>
    </main>
  );
};

export default Home;
