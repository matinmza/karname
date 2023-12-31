import { FC, PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Backdrop, Fade, IconButton, Tooltip, Typography } from "@mui/material";
import IconClose from "components/icons/IconClose";
import SHARED_STRINGS from "constant/strings/shared-strings.constant";
import { StyleT } from "@/types/shared.type";

interface PropI {
  onClose: () => any;
  open: boolean;
  title?: string;
}

const rootStyle: StyleT = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 700,
  bgcolor: "#FFFFFF",
  borderRadius: "0.5rem",
  boxShadow:
    "0px 0px 1px 0px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
  backgroundColor: "gray.lightest",
};
const headerModalStyle: StyleT = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: "1.5rem",
  paddingRight: "1rem",
  borderTopLeftRadius: "0.5rem",
  borderTopRightRadius: "0.5rem",
  bgcolor: "naturals.white",
  height: "3rem",
  boxShadow:
    "0px 0px 1px 0px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
};

const CustomModal: FC<PropsWithChildren<PropI>> = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          sx: { backgroundColor: "rgba(0, 0, 0, 0.38)" },
        },
      }}
    >
      <Fade in={props.open}>
        <Box sx={rootStyle}>
          {props.title && (
            <Box sx={headerModalStyle}>
              <Typography variant="h2">{props.title}</Typography>
              <Tooltip title={SHARED_STRINGS.CLOSE}>
                <IconButton onClick={props.onClose}>
                  <IconClose />
                </IconButton>
              </Tooltip>
            </Box>
          )}
          <Box padding={"1.25rem"}>{props.children}</Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default CustomModal;
