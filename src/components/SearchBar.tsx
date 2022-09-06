import React from "react";

import Icon from "./Icon";
import IconButton from "./IconButton";
import Input from "./Input";
import View from "./View";

export default function SearchBar({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (text: string) => void;
}) {
  const clear = () => setQuery("");
  return (
    <View row flexed margin={8}>
      <View row style={{ position: "relative" }}>
        <View
          style={{
            position: "absolute",
            left: 10,
            top: "50%",
            transform: [{ translateY: -9 }],
            zIndex: -1,
          }}
        >
          <Icon size={18} name="search" />
        </View>
        <Input
          style={{ paddingLeft: 36 }}
          value={query}
          onChangeText={setQuery}
          placeholder="Search"
        />
      </View>
      {query.length > 0 && (
        <View
          style={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: [{ translateY: -13 }],
          }}
        >
          <IconButton
            onPress={clear}
            icon="x"
            size={18}
            bordered={false}
            style={{ padding: 4 }}
          />
        </View>
      )}
    </View>
  );
}
