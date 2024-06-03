"use client";

import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

import DashTailLogo from "@/public/images/logo/logo-2.png"
export const VerifyOtp = () => {
  return (
    <Html>
      <Head />
      <Preview>Reset your password</Preview>
      <Tailwind>
        <Body style={main}>
          <Container style={container}>
            <Section>
              <Column className="flex flex-col items-center pt-10">
                <Img
                  src={DashTailLogo.src}
                  alt="Dropbox"
                  className="w-[160px]"
                />
                <Text className="mt-8 text-xl font-medium text-slate-900 ">
                  Verify your email address
                </Text>
                <Text className="text-sm  text-center my-0 text-slate-900">
                  To get started with DashTail, we simply need <br /> to verify your email address.
                </Text>
                <Text className="text-base font-medium text-center text-slate-900">Verification Code</Text>
                <Text className="text-3xl  font-bold text-center text-slate-900 my-0 ">987564</Text>
                <Text className="text-sm  text-center my-0 text-slate-900 mt-4">(this code is valid for 5 minutes)</Text>
                <Text className="text-sm font-medium  text-center  text-slate-900">Or Click the below to verify your email 👎</Text>
                <Button className="bg-violet-600 mb-10 mt-4" style={button} href="/">
                  Verify Email
                </Button>
              </Column>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};


export default VerifyOtp;

const main = {
  backgroundColor: "#fff",
  padding: "10px 0",
};

const container = {
  backgroundColor: "#fff",
  border: "1px solid #f0f0f0",
};



const button = {
  borderRadius: "4px",
  color: "#fff",
  fontFamily: "'Open Sans', 'Helvetica Neue', Arial",
  fontSize: "15px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  width: "210px",
  padding: "12px 7px",
  marginLeft: "40px"
};

