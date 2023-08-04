"use client";
import { FC } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { Typography } from "@mui/material";
import HEADER_TITLE_STRINGS from "@/constant/strings/headerTitle-string.constants";

const HeaderTitle: FC = () => {
  const segment = useSelectedLayoutSegment() || "";
  return <Typography variant="h1">{HEADER_TITLE_STRINGS[segment]}</Typography>;
};

export default HeaderTitle;
