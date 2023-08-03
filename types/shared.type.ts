import { SxProps, Theme } from "@mui/material";
import { NextPage } from "next";

export type StyleT = SxProps<Theme>;
export type ParamT<T extends string> = {
  params: { [P in T]: string };
};

export type NextPageWithParam<T extends string> = NextPage<ParamT<T>>;
