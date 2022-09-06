import React from "react";
import { Pressable, PressableProps } from "react-native";

import IconButton from "./IconButton";
import Text from "./Text";
import View from "./View";

export default function Chip({
  text,
  onTextPress,
  onRemove,
  inline = true,
}: {
  text: string;
  onTextPress?: PressableProps["onPress"];
  onRemove?: PressableProps["onPress"];
  inline?: boolean;
}) {
  return (
    <View
      style={
        inline
          ? {
              marginRight: 4,
              marginVertical: 4,
              overflow: "hidden",
              flexShrink: 1,
            }
          : undefined
      }
    >
      <View row bordered style={{ borderRadius: 16, paddingRight: 2 }}>
        <Pressable
          onPress={onTextPress}
          style={{ paddingLeft: 12, flexShrink: 1 }}
        >
          <Text text={text} numberOfLines={1} />
        </Pressable>
        {onRemove !== undefined && (
          <IconButton onPress={onRemove} icon="x" size={14} bordered={false} />
        )}
      </View>
    </View>
  );
}
