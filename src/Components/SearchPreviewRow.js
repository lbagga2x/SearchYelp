import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const SearchPreviewRow = () => {
  return (
    <View style={styles.container}>
      {/* //Image view and text view container */}
      <View style={styles.elementContainer}>
        <View
          style={{
            height: 54,
            width: 54,
            backgroundColor: "#000",
            alignSelf: "center",
          }}
        />
        <View style={{ marginStart: 8, justifyContent: "center" }}>
          {/* Name and connection View */}
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.titleStyle}>Alberta Farmers</Text>
            <View
              style={{
                height: 20,
                width: 20,
                marginStart: 16,
                backgroundColor: "#000",
              }}
            />
          </View>
          <Text style={styles.subtitle}>Grain Farmers</Text>
        </View>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 86,
  },
  elementContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
  },

  titleStyle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3F444D",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#3F444D",
    opacity: 7,
  },
  divider: {
    backgroundColor: "#dde0e2",
    height: 1,
  },
});

export default SearchPreviewRow;
