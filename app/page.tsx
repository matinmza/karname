import { Box, Container, Typography } from "@mui/material";
import SHARED_STRINGS from "@/constant/strings/shared-strings.constant";
import Grid from "@mui/material/Grid";
export default function Home() {
  return (
    <main>
      <Container>
        <Grid container>
          <Grid item xs={1}>
            <Box sx={{ background: "red" }}>1</Box>
          </Grid>
          <Grid item xs={11}>
            <Box sx={{ background: "blue" }}>1</Box>
          </Grid>
        </Grid>
        <Typography variant="h1">{SHARED_STRINGS.QUESTION_LIST}</Typography>
      </Container>
    </main>
  );
}
