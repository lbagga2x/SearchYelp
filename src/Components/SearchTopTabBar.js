import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import SearchTab from "./SearchTab";

const SearchTopTabBar = () => {
  const [firstTab, setFirstTab] = useState(true);
  const [secondTab, setSecondTab] = useState(false);
  const [thirdTab, setThirdTab] = useState(false);

  const onPressButton = (param) => {
    switch (param) {
      case 1:
        setFirstTab(true);
        setSecondTab(false);
        setThirdTab(false);
        break;
      case 2:
        setFirstTab(false);
        setSecondTab(true);
        setThirdTab(false);
        break;
      case 3:
        setFirstTab(false);
        setSecondTab(false);
        setThirdTab(true);
        break;
    }
  };

  return (
    <View style={style.baseStyle}>
      <TouchableOpacity style={{ flex: 1 }} onPress={() => onPressButton(1)}>
        <SearchTab name="All" showView={firstTab} />
      </TouchableOpacity>

      <TouchableOpacity style={{ flex: 1 }} onPress={() => onPressButton(2)}>
        <SearchTab name="People" showView={secondTab} />
      </TouchableOpacity>

      <TouchableOpacity style={{ flex: 1 }} onPress={() => onPressButton(3)}>
        <SearchTab name="Business" showView={thirdTab} />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  baseStyle: {
    flexDirection: "row",
    backgroundColor: "#FFFFF8",
    height: 60,
  },
});

export default SearchTopTabBar;
