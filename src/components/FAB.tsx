import React from "react";

import { usePrimaryColor } from "../PrimaryColorContext";

import type { IconOptions } from "./Icon";
import IconButton from "./IconButton";

export default function FAB({
  icon = "plus",
  onPress,
}: {
  icon?: IconOptions;
  onPress: () => void;
}) {
  const primaryColor = usePrimaryColor();
  return (
    <IconButton
      onPress={onPress}
      style={{
        position: "absolute",
        bottom: 24,
        right: 24,
        zIndex: 3,
        padding: 24,
        borderWidth: 0,
        borderRadius: 36,
        backgroundColor: primaryColor,
      }}
      color="#fff"
      icon={icon}
      size={24}
    />
  );
}
