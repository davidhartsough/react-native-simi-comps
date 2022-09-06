import React, { createContext, useContext, ReactNode } from "react";

export const PrimaryColorContext = createContext<string>("#1471eb");

export const PrimaryColorProvider = ({
  value,
  children,
}: {
  value: string;
  children: ReactNode;
}) => (
  <PrimaryColorContext.Provider value={value}>
    {children}
  </PrimaryColorContext.Provider>
);

export const usePrimaryColor = () => useContext(PrimaryColorContext);
