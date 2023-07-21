import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import Background from "./Background";
import Field from "./Field";
import Btn from "./Btn";

const windowWidth = Dimensions.get("window").width;

const Signup = (props) => {
  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.heading}>Sign Up</Text>
        <Text style={styles.subHeading}>Sign Up to continue</Text>
        <View style={styles.formContainer}>
          <Field placeholder="Email" keyboardType={"email-address"} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <Btn
            bgColor="#8EA3B8"
            textColor="white"
            btnLable="Sign Up"
            Press={() => {
              alert(
                "Thanks for signing up! \n We have sent you an email confirmation. \n Please confirm your email."
              );
              props.navigation.navigate("Login");
            }}
          />
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
            <Text style={styles.loginLink}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: windowWidth * 0.05,
  },
  heading: {
    color: "white",
    fontSize: 42,
    marginTop: windowWidth * 0.5,
  },
  subHeading: {
    color: "#8EA3B8",
    fontSize: 18,
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: "#CDD7E0",
    borderRadius: 16,
    paddingVertical: 30,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  loginText: {
    fontSize: 14,
    color: "#8EA3B8",
  },
  loginLink: {
    color: "#49C9B3",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 5,
  },
});

export default Signup;
