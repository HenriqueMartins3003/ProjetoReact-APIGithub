"use client";

import { SessionProvider } from "next-auth/react";
import { type } from "os";

type Props = {
  children?: React.ReactNode;
};

export const NextProvider = ({ children }: Props) => {
  return <SessionProvider> {children} </SessionProvider>;
};
