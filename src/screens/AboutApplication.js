import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
import Background from "../Background";
import colors from "../Constants";
import Icon, { Icons } from "../bottomtab/Icon";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AboutApplication = (props) => {
  const openLinkedInProfileFaruk = () => {
    const linkedinProfileURL =
      "https://www.linkedin.com/in/faruk-becirovic-57b7101a0/";
    Linking.openURL(linkedinProfileURL).catch((err) =>
      console.error("Error opening LinkedIn profile:", err)
    );
  };

  const openLinkedInProfileAida = () => {
    const linkedinProfileURL =
      "https://www.linkedin.com/in/aida-hadžiabdić-351248256/";
    Linking.openURL(linkedinProfileURL).catch((err) =>
      console.error("Error opening LinkedIn profile:", err)
    );
  };

  const navigation = useNavigation();

  
  return (
    <Background>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>
            The application has been created for the purpose of the conference.
            The application provides you with insight into the events during the
            conference, the possibility to establish connections with other
            participants, edit your profile, within which you choose your reason
            for being here, and information about your interests based on which
            you establish connections with others. {"\n\n"} The application has
            been developed by interns, Faruk Bečirović and Aida Hadžiabdić, as
            part of their internship at Verlab.
          </Text>
        </View>
        <View style={styles.iconView}>
          <View style={styles.iconTextView}>
            <TouchableOpacity onPress={openLinkedInProfileFaruk}>
              <Icon
                type={Icons.Feather}
                name="user"
                color={colors.frenchGray}
              />
            </TouchableOpacity>
            <Text style={styles.dateText}>Faruk Bečirović</Text>
          </View>

          <View style={styles.iconTextView}>
            <TouchableOpacity onPress={openLinkedInProfileAida}>
              <Icon
                type={Icons.Feather}
                name="user"
                color={colors.frenchGray}
              />
            </TouchableOpacity>
            <Text style={styles.dateText}>Aida Hadžiabdić</Text>
          </View>

          <View style={styles.signoutContainer}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Initial")}
            >
              <Icon
                style={styles.signouticon}
                type={Icons.FontAwesome}
                name="arrow-right"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: windowWidth * 0.1,
    marginVertical: windowHeight * 0.1,
  },
  viewStyle: {
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 20,
  },
  textStyle: {
    backgroundColor: colors.cadetGray,
    padding: 15,
    textAlign: "center",
    fontSize: 18,
    color: colors.gunmetal,
  },
  iconView: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  iconTextView: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  dateText: {
    marginLeft: 10,
    color: colors.frenchGray,
    fontSize: 14,
    fontWeight: "bold",
    flex: 1,
  },
  signoutContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    marginBottom: 30,
    width: windowWidth * 1.2,
    marginRight: windowWidth * 0.41,
  },
  signouticon: {
    position: "absolute",
    top: 8,
    right: 8,
    fontSize: 20,
    paddingVertical: windowWidth * 0.02,
    paddingHorizontal: windowWidth * 0.02,
    color: colors.turquoise,
  },
});

export default AboutApplication;
