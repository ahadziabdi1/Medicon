import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Keyboard,
} from "react-native";
import React from "react";
import Background from "../Background";
import Field from "../Field";
import Btn from "../Btn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../Constants";

const windowWidth = Dimensions.get("window").width;

const ForgetPassword = (props) => {
  const [fields, setFields] = React.useState({
    email: "",
  });
  const [errors, setErrors] = React.useState({});
  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    setErrors({});
    if (!fields.email) {
      handleError("Please enter a email", "email");
      valid = false;
    }
    if (valid) {
      props.navigation.navigate("Verification");
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
          <Text style={styles.heading}>Forget Password</Text>
          <Text style={styles.subHeading}>Enter Email Address</Text>
          <View style={styles.formContainer}>
            <Field
              placeholder="Email"
              error={errors.email}
              onFocus={() => {
                handleError(null, "email");
              }}
              onChangeText={(text) => handleOnChange(text, "email")}
            />
            <View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Login")}
              >
                <Text style={styles.forgetPassword}>Back to sign in</Text>
              </TouchableOpacity>
            </View>
            <Btn
              onPress={validate}
              bgColor="#8EA3B8"
              textColor="white"
              btnLable="Send"
            />
          </View>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
            >
              <Text style={styles.loginLink}>Sign Up</Text>
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
  forgetPassword: {
    color: colors.pineGreen,
    fontSize: 12,
    padding: 5,
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

export default ForgetPassword;
