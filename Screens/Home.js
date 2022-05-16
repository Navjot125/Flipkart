import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";

const Home = () => {
  return (
    <View style={styles.container}>
      <NavBar />
      <Main />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    alignSelf: "center",
  },
});
