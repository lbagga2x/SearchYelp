import React from "react";
import { View, StyleSheet } from "react-native";
import SearchTopTabBar from "./../Components/SearchTopTabBar";
import SearchPreviewRow from "./../Components/SearchPreviewRow";

const ViewBoxesWithColorAndText = () => {
  return (
    <View style={styles.container}>
      <SearchTopTabBar />
      <View style={styles.elementContainer}>
        <SearchPreviewRow />
        <SearchPreviewRow />
        <SearchPreviewRow />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFFFF8",
  },
  elementContainer: {
    backgroundColor: "#FFFFF8",
    marginStart: 16,
    marginEnd: 16,
  },
});

export default ViewBoxesWithColorAndText;
