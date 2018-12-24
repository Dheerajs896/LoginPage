import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "react-native-material-bottom-navigation";
//import { Icon } from "react-native-vector-icon";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}
class Marks extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Marks</Text>
      </View>
    );
  }
}
class Result extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Result</Text>
      </View>
    );
  }
}
class NoticeBoard extends React.Component {
  render() {
    return (
      <View>
        <Text>NoticeBoard</Text>
      </View>
    );
  }
}

export default createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home"
        // tabBarIcon: ({ tintColor }) => (
        //   <Icon name="ios-home" color={tintColor} size={24} />
        // )
      }
    },
    Marks: {
      screen: Marks,
      navigationOptions: {
        tabBarLabel: "Marks"
        // tabBarIcon: ({ tintColor }) => (
        //   <Icon name="ios-home" color={tintColor} size={24} />
        // )
      }
    },
    Results: {
      screen: Result,
      navigationOptions: {
        tabBarLabel: "Results"
        // tabBarIcon: ({ tintColor }) => (
        //   <Icon name="ios-home" color={tintColor} size={24} />
        // )
      }
    },
    Notice: {
      screen: NoticeBoard,
      navigationOptions: {
        tabBarLabel: "Notice"
        // tabBarIcon: ({ tintColor }) => (
        //   <Icon name="ios-home" color={tintColor} size={24} />
        // )
      }
    }
  },
  {
    initialRouteName: "Home",
    order: ["Home", "Marks", "Results", "Notice"],
    activeTintColor: "white",
    shifting: true
  }
);

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
