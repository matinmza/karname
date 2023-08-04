import { Avatar, Box, Button, Typography } from "@mui/material";
import React, { FC } from "react";
import ShowTime from "components/shared/ShowTime";

import SHARED_STRINGS from "@/constant/strings/shared-strings.constant";

import { answerI } from "@/types/question.type";
import IconHappy from "components/icons/IconHappy";
import IconSad from "components/icons/IconSad";
import { Stack } from "@mui/system";

const RootStyle = {
  boxShadow:
    " 0px 0px 1px 0px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
  borderRadius: "0.5rem",
  backgroundColor: "gray.lightest",
  width: "100%",
};
const headerStyle = {
  backgroundColor: "#fff",
  borderRadius: "0.5rem",
  boxShadow:
    " 0px 0px 1px 0px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
  paddingX: "1rem",
  paddingY: "0.5rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const errorButtonStyle = {
  color: "annotations.error",
  gap: "0.5rem",
  paddingX: "9px",
  "&:hover": {
    color: "red",
    borderColor: "red",
  },
};

const StatusAnswer: FC<{ sadLength: number; happyLength: number }> = ({
  happyLength,
  sadLength,
}) => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Box display="flex" alignItems="center" gap={1}>
        <IconHappy sx={{ fill: "#9CAEBB" }} />
        <Typography color="gray.dark" variant="h4">
          {happyLength}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <IconSad sx={{ fill: "#9CAEBB" }} />
        <Typography color="gray.dark" variant="h4">
          {sadLength}
        </Typography>
      </Box>
    </Box>
  );
};

const CardAnswer: FC<answerI> = (props) => {
  return (
    <Box sx={RootStyle}>
      <Box sx={headerStyle}>
        <Stack flexDirection="row" alignItems="center" gap={1}>
          <Avatar variant="rounded" src={props.avatar} />
          <Typography variant="h3">{props.fullName}</Typography>
        </Stack>
        <Box display="flex" alignItems="center" gap="1.75rem">
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ShowTime time={props.createOn} />
          </Box>
          <StatusAnswer sadLength={props.isBad} happyLength={props.isGood} />
        </Box>
      </Box>
      <Box padding="1rem">
        <Typography variant="body1">{props.text}</Typography>
        <Box display="flex" justifyContent="flex-end" gap={"0.75rem"}>
          <Button
            variant="outlined"
            sx={{
              color: "annotations.success",
              gap: "0.5rem",
              paddingX: "11.5px",
            }}
          >
            <IconHappy
              sx={{ fill: "#66CB9F", width: "1rem", height: "1rem" }}
            />

            {SHARED_STRINGS.ANSWER_WAS_GOOD}
          </Button>
          <Button variant="outlined" sx={errorButtonStyle}>
            <IconSad sx={{ fill: "#F16063", width: "1rem", height: "1rem" }} />

            {SHARED_STRINGS.ANSWER_WAS_NOT_GOOD}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CardAnswer;
