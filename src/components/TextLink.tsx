import React from "react";
import { Pressable, PressableProps } from "react-native";

import Text from "./Text";

export default function TextLink({
  onPress,
  text,
  color = "#0062f5",
}: {
  onPress: PressableProps["onPress"];
  text: string;
  color?: string;
}) {
  return (
    <Pressable onPress={onPress}>
      <Text
        text={text}
        color={color}
        style={{ textDecorationLine: "underline" }}
      />
    </Pressable>
  );
}
