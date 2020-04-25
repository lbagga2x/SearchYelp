import React from "react";
import { Text, View } from "react-native";
import SearchBar from "./Components/SearchBar";
import userResult from "./hooks/useResults";

export default function Screen() {
  const [value, setText] = React.useState("");
  const [searchAPI, business, errorMessage] = userResult();

  return (
    <View>
      <SearchBar
        value={value}
        onChangeText={(newTerm) => setText(newTerm)}
        onEndEditing={() => searchAPI(value)}
      />
      <Text>{business.length}</Text>
    </View>
  );
}
