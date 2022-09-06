import React from "react";
import { Switch, SwitchProps } from "react-native";

import Text from "./Text";
import View from "./View";

export default function Toggle({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: SwitchProps["onValueChange"];
}) {
  return (
    <View row separate style={{ marginVertical: 8 }}>
      <Text text={label} bold />
      <Switch value={value} onValueChange={onChange} />
    </View>
  );
}
