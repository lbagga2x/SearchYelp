import React from "react";
import { Text, View } from "react-native";
import SearchBar from "./Components/SearchBar";
import API from "./API/Api";

export default function Screen() {
  const [value, setText] = React.useState("");
  const [business, setBusiness] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState("");

  const searchAPI = async () => {
    try {
      const response = await API.get("/search", {
        params: {
          limit: 50,
          value,
        },
      });
      setBusiness(response.data.businesses);
    } catch (error) {
      setErrorMessage("something went wrong");
    }
  };

  return (
    <View>
      <SearchBar
        value={value}
        onChangeText={(newTerm) => setText(newTerm)}
        onEndEditing={() => searchAPI()}
      />
      <Text>{errorMessage}</Text>
    </View>
  );
}
