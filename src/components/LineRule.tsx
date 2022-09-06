import React from "react";

import useThemeColor from "../useThemeColor";

import View from "./View";

export default function LineRule() {
  const borderColor = useThemeColor("border");
  return (
    <View
      style={{
        height: 1,
        backgroundColor: borderColor,
      }}
    />
  );
}
