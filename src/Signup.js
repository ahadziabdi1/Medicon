import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Keyboard,
} from "react-native";
import React from "react";
import Background from "./Background";
import Field from "./Field";
import Btn from "./Btn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native";

const windowWidth = Dimensions.get("window").width;

const Signup = (props) => {
  const [fields, setFields] = React.useState({
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = React.useState({});
  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    setErrors({});
    if (!fields.email) {
      handleError("Please enter a email", "email");
      valid = false;
    } else if (!fields.email.match(/^\S+@\S+\.\S+$/)) {
      handleError("Please enter a valid email", "email");
      valid = false;
    }

    if (!fields.password) {
      handleError("Please enter a password", "password");
      valid = false;
    } else if (fields.password.length < 8) {
      handleError("It must be at least 8 characters in length", "password");
      valid = false;
    }
    if (fields.password !== fields.confirmpassword) {
      handleError("Passwords do not match", "confirmpassword");
      valid = false;
    }

    if (valid) {
      alert(
        "Thanks for signing up! \n We have sent you an email confirmation. \n Please confirm your email."
      );
      props.navigation.navigate("Initial");
    }
  };
  const handleOnChange = (text, field) => {
    setFields((prevState) => ({ ...prevState, [field]: text }));
  };
  const handleError = (errorMessage, field) => {
    setErrors((prevState) => ({ ...prevState, [field]: errorMessage }));
  };
  return (
    <Background>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.heading}>Sign Up</Text>
          <Text style={styles.subHeading}>Sign Up to continue</Text>
          <View style={styles.formContainer}>
            <Field
              placeholder="Email"
              error={errors.email}
              onFocus={() => {
                handleError(null, "email");
              }}
              onChangeText={(text) => handleOnChange(text, "email")}
            />
            <Field
              placeholder="Password"
              password
              error={errors.password}
              onFocus={() => {
                handleError(null, "password");
              }}
              onChangeText={(text) => handleOnChange(text, "password")}
            />
            <Field
              placeholder="Confirm Password"
              password
              error={errors.confirmpassword}
              onFocus={() => {
                handleError(null, "confirmpassword");
              }}
              onChangeText={(text) => handleOnChange(text, "confirmpassword")}
            />
            <Btn
              onPress={validate}
              bgColor="#8EA3B8"
              textColor="white"
              btnLable="Sign Up"
            />
          </View>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text style={styles.loginLink}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
