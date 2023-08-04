import { FC, PropsWithChildren } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  Backdrop,
  Fade,
  IconButton,
  SxProps,
  Theme,
  Tooltip,
  Typography,
} from "@mui/material";
import IconClose from "components/icons/IconClose";
import SHARED_STRINGS from "constant/strings/shared-strings.constant";

interface PropI {
  onClose: () => any;
  open: boolean;
  title?: string;
}

const style: SxProps<Theme> = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 700,
  bgcolor: "#FFFFFF",
  borderRadius: "8px",
  boxShadow:
    "0px 0px 1px 0px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
  backgroundColor: "gray.lightest",
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
          sx: { backgroundColor: "#00000038" },
        },
      }}
    >
      <Fade in={props.open}>
        <Box sx={style}>
          {props.title && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: "24px",
                paddingRight: "16px",
                paddingY: "12px",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                bgcolor: "naturals.white",
                boxShadow:
                  "0px 0px 1px 0px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05)",
              }}
            >
              <Typography variant="h2">{props.title}</Typography>
              <Tooltip title={SHARED_STRINGS.CLOSE}>
                <IconButton onClick={props.onClose}>
                  <IconClose />
                </IconButton>
              </Tooltip>
            </Box>
          )}
          <Box padding={"20px"}>{props.children}</Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default CustomModal;
