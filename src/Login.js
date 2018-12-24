import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoArea}>
          <Text>LOGO HERE</Text>
        </View>
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.adjectLoginField}
        >
          <TextInput
            style={styles.TextInput1}
            placeholder="Enter Username"
            returnkeyType="next"
          />
          <TextInput
            style={styles.TextInput2}
            placeholder="Enter Password"
            returnkeyType="go"
            secureTextEntry
          />
          <TouchableOpacity style={styles.textButton}>
            <Text style={styles.textLabel}>Login</Text>
          </TouchableOpacity>
          <View style={styles.forgetPassword}>
            <Text style={styles.forgetPasswdText}>Forget Password?</Text>
          </View>
        </KeyboardAvoidingView>
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
  },
  TextInput1: {
    borderWidth: 1,
    width: 320,
    height: 40,
    borderRadius: 20,
    borderColor: "#fff",
    textAlign: "center",
    color: "#fff"
  },
  TextInput2: {
    borderWidth: 1,
    width: 320,
    height: 40,
    borderRadius: 20,
    borderColor: "#fff",
    marginTop: 15,
    textAlign: "center",
    color: "#fff"
  },
  textButton: {
    width: 250,
    height: 40,
    backgroundColor: "#fff",
    color: "#351417",
    marginTop: 18,
    borderRadius: 20,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000000"
  },
  textLabel: {
    fontSize: 18,
    fontWeight: "bold"
  },
  logoArea: {
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    marginBottom: 100,
    width: 100,
    height: 100,
    borderWidth: 3,
    borderRadius: 50,
    borderColor: "#fff",
    backgroundColor: "#fff"
  },
  forgetPasswdText: {
    fontSize: 14,
    marginTop: 10,
    color: "#fff"
  },
  adjectLoginField: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Login;
