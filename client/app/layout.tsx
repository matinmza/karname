import "./globals.css";
import type { Metadata } from "next";
import ThemeRegistry from "./ThemeRegistry";
import { yekan } from "./font";
import { AppBar, Container, Typography, styled } from "@mui/material";
import SHARED_STRINGS from "constant/strings/shared-strings.constant";
import HeaderNavbar from "@/components/layout/HeaderNavbar";
import { StyleT } from "types/shared.type";
import { FC, PropsWithChildren } from "react";
import "validation/yupConfig";
import Title from "@/components/shared/Title";
import ReactQueryProvider from "./ReactQueryProvider";

export const metadata: Metadata = {
  title: "سوال ها",
  description: "پرسیدن سوالات تخصصی خود و جواب از متخصصان",
};

const containerStyle: StyleT = {
  height: "100%",
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html dir="rtl" lang="fa-IR">
      <body className={yekan.className}>
        <ReactQueryProvider>
          <ThemeRegistry>
            <AppBar position="static">
              <Container sx={containerStyle}>
                <Title />
                <HeaderNavbar />
              </Container>
            </AppBar>
            {children}
          </ThemeRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  );
};
export default RootLayout;
