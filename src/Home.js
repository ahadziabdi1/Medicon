import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Background from "./Background";
import { Dimensions } from "react-native";
import Btn from "./Btn";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Home = (props) => {
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.centeredContent}>
          <Text style={styles.text}>Welcome to</Text>
          <Text style={[styles.text, styles.color]}>MEDICON'23 & </Text>
          <Text style={[styles.text, styles.color]}>CMBEBIH'23</Text>
        </View>
        <View style={styles.bottomButtons}>
          <Btn
            bgColor="#8EA3B8"
            textColor="white"
            btnLable="Sign Up"
            onPress={() => props.navigation.navigate("Signup")}
          />
          <Btn
            textColor="#8EA3B8"
            btnLable="Sign In"
            onPress={() => props.navigation.navigate("Login")}
          />
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: windowWidth * 0.1,
    marginVertical: windowHeight * 0.1,
  },
  centeredContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomButtons: {
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 100,
  },
  text: {
    fontSize: 42,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 10,
  },
  color: {
    color: "#8EA3B8",
  },
});

export default Home;
