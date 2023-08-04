import { Box, Button, Typography } from "@mui/material";
import React, { FC } from "react";
import ShowTime from "components/shared/ShowTime";
import IconComment from "components/icons/IconComment";
import SHARED_STRINGS from "@/constant/strings/shared-strings.constant";
import Link from "next/link";
import { questionI } from "@/types/question.type";

const CardQuestion: FC<
  Omit<questionI, "answer"> & { showDetailButton?: boolean }
> = ({ showDetailButton = true, ...props }) => {
  return (
    <Box
      sx={{
        boxShadow:
          " 0px 0px 1px 0px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
        borderRadius: "8px",
        backgroundColor: "gray.lightest",
        width: "100%",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow:
            " 0px 0px 1px 0px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
          paddingX: "16px",
          paddingY: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h3">{props.subject}</Typography>
        <Box display="flex" alignItems="center" gap="28px">
          <ShowTime time={props.createOn} />
          <Box display="flex" alignItems="center" gap={1}>
            <IconComment />
            <Typography color="gray.dark" variant="h4">
              20
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box padding="16px">
        <Typography variant="body1">{props.questionText}</Typography>
        {showDetailButton && (
          <Box display="flex" justifyContent="flex-end">
            <Button
              LinkComponent={Link}
              href={"question/" + props.id}
              variant="outlined"
            >
              {SHARED_STRINGS.SEE_DETAILS}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CardQuestion;
