import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.backgroundView}>
      <FontAwesome name="search" size={20} style={{ alignSelf: "center" }} />
      <TextInput style={styles.textInput} placeholder="Search Business" />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundView: {
    margin: 16,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000",
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: "row",
  },

  textInput: {
    borderColor: "#000",
    flex: 1,
    marginLeft: 8,
    marginRight: 8,
  },
});

export default SearchBar;
