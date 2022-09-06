import React from "react";
import { TextInput as DefaultTextInput, TextInputProps } from "react-native";

import useThemeColor from "../useThemeColor";

export default function Input(props: TextInputProps) {
  const { style, ...otherProps } = props;
  const color = useThemeColor("text");
  const borderColor = useThemeColor("border");
  const placeholderTextColor = useThemeColor("placeholder");
  return (
    <DefaultTextInput
      style={[
        {
          color,
          borderColor,
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 10,
          paddingVertical: 7,
          marginVertical: 4,
          borderStyle: "solid",
          fontSize: 16,
          flexGrow: 1,
        },
        style,
      ]}
      placeholderTextColor={placeholderTextColor}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    />
  );
}
