import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Keyboard,
} from "react-native";
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import React from "react";
import Background from "./Background";
import Field from "./Field";
import Btn from "./Btn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native";
import colors from "./Constants";
import Icon, { Icons } from "../src/bottomtab/Icon";

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

    const handleLogin = async () => {
        try {
            const response = await fetch('http://146.255.156.211:8000/accounts/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: fields.username,
                    password1: fields.password,
                    password2: fields.confirmpassword
                }),
            });

            const data = await response.json();

        } catch (error) {
            console.error('Error signing in:', error);
        }

    };

    GoogleSignin.configure({
        webClientId: 'WEB_CLIENT_ID',
        offlineAccess: true, // if you want to access tokens even when the user is offline
    });

    const signInWithGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('Google Sign-In Success', userInfo);
            // Now you can use userInfo.idToken to send to your Django API
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('Google Sign-In Cancelled');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('Google Sign-In In Progress');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('Play Services Not Available');
            } else {
                console.log('Google Sign-In Error', error);
            }
        }
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

export default Signup;
