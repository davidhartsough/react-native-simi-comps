import React from "react";
import { ActivityIndicator } from "react-native";

import { usePrimaryColor } from "../PrimaryColorContext";

import View from "./View";

export default function Loader({ size = 24 }: { size?: number }) {
  const primaryColor = usePrimaryColor();
  return (
    <View flexed centered>
      <ActivityIndicator color={primaryColor} size={size} />
    </View>
  );
}
