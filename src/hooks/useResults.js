import React, { useEffect } from "react";
import API from "./../API/Api";

export default () => {
  const [business, setBusiness] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState("");

  const searchAPI = async (searchTerm) => {
    try {
      const response = await API.get("/search", {
        params: {
          limit: 50,
          location: "New York",
          term: searchTerm,
        },
      });
      setBusiness(response.data.businesses);
      console.log(response.data.businesses.length);
    } catch (error) {
      console.log(error);
      setErrorMessage("something went wrong");
    }
  };

  useEffect(() => {
    searchAPI("Pasta");
  }, []);

  return [searchAPI, business, errorMessage];
};
