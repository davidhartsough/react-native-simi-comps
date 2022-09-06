import React from "react";
import { Pressable, PressableProps } from "react-native";

import useThemeColor from "../useThemeColor";
import { usePrimaryColor } from "../PrimaryColorContext";

import Icon, { IconOptions } from "./Icon";
import Text from "./Text";

export default function ActionButton({
  text,
  icon,
  onPress,
  type = "default",
  disabled = false,
  align,
}: {
  text: string;
  icon: IconOptions;
  onPress: PressableProps["onPress"];
  type?: "default" | "primary";
  disabled?: boolean;
  align?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "stretch"
    | "baseline"
    | "auto";
}) {
  const defaultTextColor = useThemeColor("text");
  const defaultBorderColor = useThemeColor("border");
  const disabledTextColor = useThemeColor("disabledText");
  const disabledBgColor = useThemeColor("disabledBg");
  const disabledBorderColor = useThemeColor("disabledBorder");
  const defaultIconColor = useThemeColor("icon");
  const primaryColor = usePrimaryColor();
  const backgroundColor = disabled
    ? disabledBgColor
    : type === "primary"
    ? primaryColor
    : "transparent";
  const borderColor = disabled
    ? disabledBorderColor
    : type === "primary"
    ? primaryColor
    : defaultBorderColor;
  const iconColor = disabled
    ? disabledTextColor
    : type === "primary"
    ? "#fff"
    : defaultIconColor;
  const textColor = disabled
    ? disabledTextColor
    : type === "primary"
    ? "#fff"
    : defaultTextColor;
  return (
    <Pressable
      onPress={onPress}
      style={{
        borderRadius: 32,
        borderWidth: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 0,
        backgroundColor,
        borderColor,
        alignSelf: align,
      }}
      disabled={disabled}
    >
      <Icon name={icon} size={20} color={iconColor} />
      <Text
        bold
        marginLeft={8}
        spaced
        text={text}
        color={textColor}
        marginRight={2}
        selectable={false}
      />
    </Pressable>
  );
}
