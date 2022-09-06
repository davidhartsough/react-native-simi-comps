import React from "react";
import { Pressable, PressableProps } from "react-native";

import useThemeColor from "../useThemeColor";
import { usePrimaryColor } from "../PrimaryColorContext";

import Text from "./Text";

type ButtonTypeOptions = "default" | "primary" | "danger";

const dangerColor = "#f65555";

export default function TextButton({
  text,
  onPress,
  type = "default",
  bgColor,
  textColor,
  disabled = false,
  flex = true,
  margin,
  marginHorizontal,
  marginVertical,
  marginLeft,
  marginRight,
}: {
  text: string;
  onPress: PressableProps["onPress"];
  type?: ButtonTypeOptions;
  bgColor?: string;
  textColor?: string;
  disabled?: boolean;
  flex?: boolean;
  margin?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  marginLeft?: number;
  marginRight?: number;
}) {
  const defaultTextColor = useThemeColor("text");
  const defaultBorderColor = useThemeColor("border");
  const disabledTextColor = useThemeColor("disabledText");
  const disabledBgColor = useThemeColor("disabledBg");
  const disabledBorderColor = useThemeColor("disabledBorder");
  const primaryColor = usePrimaryColor();
  const backgroundColor =
    bgColor ?? type === "primary"
      ? primaryColor
      : type === "danger"
      ? dangerColor
      : "transparent";
  const borderColor =
    bgColor ?? type === "primary"
      ? primaryColor
      : type === "danger"
      ? dangerColor
      : defaultBorderColor;
  const color = textColor ?? type === "default" ? defaultTextColor : "#fff";
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={{
        flex: flex ? 1 : 0,
        flexShrink: flex === false ? 1 : undefined,
        flexGrow: flex === false ? 0 : undefined,
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        justifyContent: "center",
        alignItems: "center",
        elevation: 0,
        margin,
        marginHorizontal,
        marginVertical,
        marginLeft,
        marginRight,
        backgroundColor: disabled ? disabledBgColor : backgroundColor,
        borderColor: disabled ? disabledBorderColor : borderColor,
      }}
    >
      <Text
        text={text}
        color={disabled ? disabledTextColor : color}
        size={18}
        bold
        centered
        spaced
        numberOfLines={1}
        selectable={false}
      />
    </Pressable>
  );
}
