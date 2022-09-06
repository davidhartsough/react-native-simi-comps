import React from "react";
import { Pressable, PressableProps, ViewProps } from "react-native";

import useThemeColor from "../useThemeColor";
import Icon, { IconOptions } from "./Icon";

export default function IconButton({
  icon,
  onPress,
  style,
  size = 24,
  color,
  bordered = true,
}: {
  icon: IconOptions;
  onPress: PressableProps["onPress"];
  style?: ViewProps["style"];
  size?: number;
  color?: string;
  bordered?: boolean;
}) {
  const borderColor = useThemeColor("border");
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          borderRadius: 32,
          borderWidth: bordered ? 1 : 0,
          borderColor,
          justifyContent: "center",
          alignItems: "center",
          padding: bordered ? 6 : 8,
        },
        style,
      ]}
    >
      <Icon name={icon} size={size} color={color} />
    </Pressable>
  );
}
