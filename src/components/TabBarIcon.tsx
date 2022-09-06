import React from "react";

import Icon, { IconOptions } from "./Icon";
import View from "./View";

export default function TabBarIcon({
  name,
  color,
}: {
  name: IconOptions;
  color: string;
}) {
  return (
    <View style={{ marginBottom: -3, backgroundColor: "transparent" }}>
      <Icon size={30} name={name} color={color} />
    </View>
  );
}
