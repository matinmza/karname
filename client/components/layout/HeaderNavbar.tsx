"use client";
import React, { FC, useState } from "react";

import SHARED_STRINGS from "constant/strings/shared-strings.constant";
import { Avatar, Box, Button, Tooltip, Typography, Modal } from "@mui/material";
import IconArrowDown from "components/icons/IconArrowDown";
import IconPlus from "components/icons/IconPlus";
import CustomModal from "components/shared/CustomModal";
import FormNewQuestion from "components/forms/FormNewQuestion";
const ProfileMenu: FC = () => {
  return (
    <Tooltip title={SHARED_STRINGS.PROFILE}>
      <Button variant="text" sx={{ height: "100%" }}>
        <Avatar
          src="/img/avatar.svg"
          sx={{
            width: "2.75rem",
            height: "2.75rem",
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        />
        <Typography
          variant="h4"
          sx={{
            paddingRight: "1rem",
            paddingLeft: "0.75rem",
            color: "gray.darker",
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          {SHARED_STRINGS.STATIC_PROFILE_NAME}
        </Typography>
        <IconArrowDown />
      </Button>
    </Tooltip>
  );
};
const HeaderNavbar: FC = () => {
  const [newQuestionModal, setNewQuestionModal] = useState(false);
  const handleOpenModalNewQuestion = () => {
    setNewQuestionModal(true);
  };
  const handleCloseModalNewQuestion = () => {
    setNewQuestionModal(false);
  };
  return (
    <Box display="flex" alignItems="center" gap="2rem">
      <Button
        sx={{ px: "1.3125rem", gap: "0.5rem" }}
        onClick={handleOpenModalNewQuestion}
      >
        <IconPlus />
        {SHARED_STRINGS.NEW_QUESTION}
      </Button>
      <ProfileMenu />
      <CustomModal
        onClose={handleCloseModalNewQuestion}
        open={newQuestionModal}
        title={SHARED_STRINGS.CREATE_NEW_QUESTION}
      >
        <FormNewQuestion onClose={handleCloseModalNewQuestion} />
      </CustomModal>
    </Box>
  );
};

export default HeaderNavbar;
