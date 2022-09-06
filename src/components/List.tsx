import React, { useState, useEffect, ReactNode } from "react";
import { FlatList, FlatListProps } from "react-native";

import LineRule from "./LineRule";
import SearchBar from "./SearchBar";
import Text from "./Text";
import View from "./View";

export default function List({
  name,
  items,
  renderItem,
  onSearch,
  bordered = true,
  headerExtra,
}: {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: FlatListProps<any>["data"];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderItem: FlatListProps<any>["renderItem"];
  onSearch: (query: string) => void;
  bordered?: boolean;
  headerExtra?: ReactNode;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    onSearch(searchQuery.toLowerCase());
  }, [searchQuery]);
  useEffect(() => {
    setSearchQuery("");
  }, [name]);
  const border = bordered ? <LineRule /> : null;
  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={({ id }) => id}
      ListEmptyComponent={
        <Text text={`No ${name} match "${searchQuery}"`} centered margin={16} />
      }
      ListHeaderComponent={
        <View flexed>
          {headerExtra}
          <SearchBar query={searchQuery} setQuery={setSearchQuery} />
          <LineRule />
        </View>
      }
      ListFooterComponent={border}
      ItemSeparatorComponent={() => border}
      contentContainerStyle={{ paddingBottom: 32 }}
      stickyHeaderIndices={[0]}
    />
  );
}
