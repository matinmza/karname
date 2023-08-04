import { Box, Typography } from "@mui/material";
import React, { FC, useMemo } from "react";
import { format } from "date-fns-jalali";
import SHARED_STRINGS from "constant/strings/shared-strings.constant";
import IconLine from "components/icons/IconLine";

const ShowTime: FC<{ time: string }> = ({ time }) => {
  const values = useMemo<{ hour: string; date: string }>(() => {
    const hour = format(new Date(time), "k:mm");
    const date = format(new Date(time), "yyyy/LL/dd");
    return {
      hour,
      date,
    };
  }, [time]);

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography variant="body2" color="gray.dark">
        {SHARED_STRINGS.HOUR}:
      </Typography>

      <Typography variant="h4">{values.hour}</Typography>
      <Box mx="12px" sx={{ display: "flex", alignItems: "center" }}>
        <IconLine />
      </Box>
      <Typography variant="body2" color="gray.dark">
        {SHARED_STRINGS.DATE}:
      </Typography>
      <Typography variant="h4">{values.date}</Typography>
    </Box>
  );
};

export default ShowTime;
