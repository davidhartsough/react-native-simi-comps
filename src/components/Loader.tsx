import React from "react";
import { ActivityIndicator } from "react-native";

import PrimaryColorContext from "../PrimaryColorContext";

import View from "./View";

export default function Loader({
  size = "large",
}: {
  size?: "large" | "small";
}) {
  return (
    <PrimaryColorContext.Consumer>
      {(primaryColor) => (
        <View flexed padded={size === "large"} centered>
          <ActivityIndicator color={primaryColor} size={size} />
        </View>
      )}
    </PrimaryColorContext.Consumer>
  );
}
