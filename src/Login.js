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
import Background from "./Background";
import Field from "./Field";
import Btn from "./Btn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "./Constants";
import Icon, { Icons } from "../src/bottomtab/Icon";

const windowWidth = Dimensions.get("window").width;

const Login = (props) => {
  const [fields, setFields] = React.useState({
    email: "",
    password: "",
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
    if (!fields.password) {
      handleError("Please enter a password", "password");
      valid = false;
    }

    if (valid) {
      alert(
        "Welcome back! \n We have sent you an email confirmation. \n Please confirm your email."
      );
      props.navigation.navigate("NavigationTab");
    }
    /*setTimeout(async () => {
      let userData = await AsyncStorage.getItem("user");
      if (userData) {
        userData = JSON.parse(userData);
        if (
          fields.email == userData.email &&
          fields.password == userData.password
        ) {
        }
      }
    }, 3000); */
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
          <Text style={styles.heading}>Sign In</Text>
          <Text style={styles.subHeading}>Welcome back!</Text>
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
                handleError(null, "passwords");
              }}
              onChangeText={(text) => handleOnChange(text, "password")}
            />
            <View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("ForgetPassword")}
              >
                <Text style={styles.forgetPassword}>Forget Password?</Text>
              </TouchableOpacity>
            </View>
            <Btn
              onPress={validate}
              bgColor="#8EA3B8"
              textColor="white"
              btnLable="Sign In"
            />
            <View style={styles.OR}>
              <Text style={styles.network}>OR</Text>
              <View style={styles.iconContainer}>
                <TouchableOpacity
                  onPress={() => {
                    /* Handle google icon press */
                  }}
                >
                  <Icon
                    style={{
                      padding: 8,
                      color: colors.fireEngineRed,
                      fontSize: 18,
                    }}
                    type={Icons.FontAwesome}
                    name="google"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    /* Handle facebook icon press */
                  }}
                >
                  <Icon
                    style={{
                      padding: 8,
                      color: colors.cornflowerBlue,
                      fontSize: 18,
                    }}
                    type={Icons.FontAwesome}
                    name="facebook"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    /* Handle linkedin icon press */
                  }}
                >
                  <Icon
                    style={{ padding: 8, color: colors.sapphire, fontSize: 18 }}
                    type={Icons.FontAwesome}
                    name="linkedin"
                  />
                </TouchableOpacity>
              </View>
            </View>
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
    color: colors.frenchGray,
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
    marginLeft: windowWidth * 0.45,
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
  OR: {
    justifyContent: "center",
    alignItems: "center",
  },
  network: {
    color: "#8EA3B8",
    fontSize: 14,
    marginTop: 20,
  },
  iconContainer: {
    flexDirection: "row",
    paddingTop: 8,
  },
});

export default Login;
