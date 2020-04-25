import React from "react";
import { Text, View, StyleSheet } from "react-native";

const SearchTab = ({ name, showView }) => {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", flex: 1 }}>
        <Text style={showView ? styles.selectedText : styles.unselectedText}>
          {" "}
          {name}
        </Text>
      </View>
      {showView ? <View style={styles.bottomBar} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  unselectedText: {
    fontSize: 16,
    textAlign: "center",
    color: "#3F444D80",
  },
  selectedText: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    color: "#000",
  },
  container: {
    flex: 1,
    backgroundColor: "#F6F5EF",
  },
  bottomBar: {
    backgroundColor: "#000",
    height: 2,
    bottom: 0,
  },
});

export default SearchTab;
