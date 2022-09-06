import React, { ComponentProps } from "react";
import { Feather } from "@expo/vector-icons";
import useThemeColor from "../useThemeColor";

export type IconOptions = ComponentProps<typeof Feather>["name"];

export default function Icon({
  name,
  size = 24,
  color,
}: {
  name: IconOptions;
  size?: number;
  color?: string;
}) {
  const defaultColor = useThemeColor("icon");
  return <Feather name={name} color={color || defaultColor} size={size} />;
}
