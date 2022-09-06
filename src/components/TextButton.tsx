import React from "react";
import { Pressable, PressableProps } from "react-native";

import useThemeColor from "../useThemeColor";
import PrimaryColorContext from "../PrimaryColorContext";

import Text from "./Text";

type ButtonTypeOptions = "default" | "primary" | "danger";

const dangerColor = "#f65555"; // #e82110
function getColor(
  type: ButtonTypeOptions,
  primaryColor: string,
  defaultColor: string
): string {
  if (type === "danger") return dangerColor;
  if (type === "primary") return primaryColor;
  return defaultColor;
}

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
  const themedTextColor = type !== "default" ? "#fff" : useThemeColor("text");
  return (
    <PrimaryColorContext.Consumer>
      {(primaryColor) => (
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
            backgroundColor: disabled
              ? useThemeColor("disabledBg")
              : bgColor ?? getColor(type, primaryColor, "transparent"),
            borderColor: disabled
              ? useThemeColor("disabledBorder")
              : bgColor ??
                getColor(type, primaryColor, useThemeColor("border")),
          }}
        >
          <Text
            text={text}
            color={
              disabled
                ? useThemeColor("disabledText")
                : textColor ?? themedTextColor
            }
            size={18}
            bold
            centered
            spaced
            numberOfLines={1}
            selectable={false}
          />
        </Pressable>
      )}
    </PrimaryColorContext.Consumer>
  );
}
