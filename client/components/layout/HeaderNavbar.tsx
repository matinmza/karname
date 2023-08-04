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
      <Button variant="text">
        <Avatar sx={{ width: "42px", height: "42px" }} src="/img/avatar.svg" />
        <Typography
          variant="h4"
          sx={{
            paddingRight: "16px",
            paddingLeft: "12px",
            color: "gray.darker",
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
        sx={{ px: "21px", gap: "8px" }}
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