import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Login from "./src/Login";
import Navigation from "./src/Navigation";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>Hello world</Text> */}
        <Navigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#351417"
  }
});
