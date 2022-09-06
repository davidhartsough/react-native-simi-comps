import React from "react";
import { Pressable, PressableProps } from "react-native";

import useThemeColor from "../useThemeColor";
import PrimaryColorContext from "../PrimaryColorContext";

import Icon, { IconOptions } from "./Icon";
import Text from "./Text";

export default function ThemedActionButton({
  text,
  icon,
  onPress,
  type = "default",
  disabled = false,
}: {
  text: string;
  icon: IconOptions;
  onPress: PressableProps["onPress"];
  type?: "default" | "primary";
  disabled?: boolean;
}) {
  const textColor = disabled
    ? useThemeColor("disabledText")
    : useThemeColor("text");
  const borderColor = disabled
    ? useThemeColor("disabledBorder")
    : useThemeColor("border");
  const backgroundColor = disabled
    ? useThemeColor("disabledBg")
    : "transparent";
  return (
    <PrimaryColorContext.Consumer>
      {(primaryColor) => (
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
            backgroundColor:
              type === "default" ? backgroundColor : primaryColor,
            borderColor: type === "default" ? borderColor : primaryColor,
          }}
          disabled={disabled}
        >
          <Icon
            name={icon}
            size={20}
            color={type === "default" ? textColor : "#fff"}
          />
          <Text
            bold
            marginLeft={8}
            spaced
            text={text}
            color={type === "default" ? textColor : "#fff"}
          />
        </Pressable>
      )}
    </PrimaryColorContext.Consumer>
  );
}
