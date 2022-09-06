import React, { ComponentProps } from "react";
import { Feather } from "@expo/vector-icons";

export type IconOptions = ComponentProps<typeof Feather>["name"];

export default function Icon({
  name,
  size = 16,
  color = "#000",
}: {
  name: IconOptions;
  size?: number;
  color?: string;
}) {
  return <Feather name={name} color={color} size={size} />;
}
