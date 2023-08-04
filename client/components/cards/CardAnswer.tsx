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
  borderRadius: "8px",
  backgroundColor: "gray.lightest",
  width: "100%",
};
const headerStyle = {
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow:
    " 0px 0px 1px 0px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
  paddingX: "16px",
  paddingY: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const errorButtonStyle = {
  color: "annotations.error",
  gap: "8px",
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
        <Box display="flex" alignItems="center" gap="28px">
          <ShowTime time={props.createOn} />
          <StatusAnswer sadLength={props.isBad} happyLength={props.isGood} />
        </Box>
      </Box>
      <Box padding="16px">
        <Typography variant="body1">{props.text}</Typography>
        <Box display="flex" justifyContent="flex-end" gap={1}>
          <Button
            variant="outlined"
            sx={{
              color: "annotations.success",
              gap: "8px",
            }}
          >
            <IconHappy sx={{ fill: "#66CB9F" }} />

            {SHARED_STRINGS.ANSWER_WAS_GOOD}
          </Button>
          <Button variant="outlined" sx={errorButtonStyle}>
            <IconHappy sx={{ fill: "#F16063" }} />

            {SHARED_STRINGS.ANSWER_WAS_NOT_GOOD}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CardAnswer;