import Image from "next/image";

import { Button, Container, Typography } from "@mui/material";
import SHARED_STRINGS from "@/constant/strings/shared-strings.constant";

export default function Home() {
  return (
    <main>
      <Container>
        <Typography variant="h1">{SHARED_STRINGS.QUESTION_LIST}</Typography>
      </Container>
    </main>
  );
}
