import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Background from "../Background";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../Constants";
import Icon, { Icons } from "../bottomtab/Icon";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const AgricultureAndBio = (props) => {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const [selectedEventIndex, setSelectedEventIndex] = useState(-1);
  const navigation = useNavigation();

  const handlePreviousDay = () => {
    setCurrentDayIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
    setSelectedEventIndex(-1);
  };

  const handleNextDay = () => {
    setCurrentDayIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    setSelectedEventIndex(-1);
  };

  const handleEventClick = (eventIndex) => {
    setSelectedEventIndex(eventIndex);
  };

  const eventTimelines = [
    [
      {
        time: "10:45 - 12:30",
        eventName:
          "Digitizing Agriculture and Rural Development in Bosnia and Herzegovina: Leveraging the Power of Science (HALL BASEL)",
        details:
          "Keynote addressing:\n• Prof. dr. Vladimir Crnojević, Biosens Institute, Republic of Serbia\n• Prof. dr. Aleksandra Nikolić, University of Sarajevo, Bosnia and Herzegovina\n\nPANEL Discussion on Science, Agriculture, and Rural Development in Bosnia and Herzegovina\n• Mr. Oskar Marko, Biosens Institute Republic of Serbia\n• Ms. Elma Imamović, Verlab Institute, Bosnia and Herzegovina\n• Mr. Kenan Kanlić, Mlin Ustikolina (Eu4Agri Success Story)\n• Prof. dr. Aleksandra Martinović, Director of FoodHub, Faculty of Food Technology, Food Safety and Ecology at University of Donja Gorica",
      },
      { time: "", eventName: "Lunch" },
      {
        time: "13:30 - 14:30",
        eventName:
          "Bio-Innovations in the Food System - towards next generation of multidisciplinary initiatives",
        details:
          "• Prof. dr. Aleksandra Martinović, Director of FoodHub, Faculty of Food Technology, Food Safety and Ecology at University of Donja Gorica\n• Prof. dr. Milica Vukotić, Faculty for culture and tourism at University of Donja Gorica\n\nAleksandra Martinovic, Andrea Milacic, Nadja Raicevic, Amil Orahovac, Beatriz Daza, Marija Vugdelic, Adriana Cabal, Werner Ruppitsch, Antimicrobial resistance in the food chain - are we at the point where there is no time to wait?\n\nIvana Vojinovic, Understanding main drivers of global decarbonization",
      },
      {
        time: "14:30 - 15:30",
        eventName:
          "IFMBE SPECIAL SESSION WiMBE Coffee Breaks - Empowering Women in Biomedical Engineering Entrepreneurship",
        details:
          "• Prof. dr. Virginia Ballarin, AC Member IFMBE\n• Prof. dr. Lenka Lhotska\n• Prof. dr. Eleni Kalkoudi, President Elect, European Alliance for Medical and Biological Engineering and Science - EAMBES\n• Prof. dr. Fabiola Martinez, IFMBE Clinical Engineering Division Chair\n• Mrs. Manuela Apendido, WEWoman Engineers Italy",
      },
      {
        time: "",
        eventName: "Coffee Break",
      },
      {
        time: "15:45 - 17:00",
        eventName:
          " Advancements in Sports Medicine for Elite Athletes: Engineering and Innovation Perspectives",
        details:
          "• Prof. dr. Leandro Pecchia, University Campus Bio-Medico Roma\n• Azra Ademović, Researcher, Verlab Institute: Application of Artificial Intelligence in sports performance prediction",
      },
      {
        time: "",
        eventName: "Break",
      },
      {
        time: "17:15 - 19:00",
        eventName: "Industry Panel - IFMBE & BHFF",
      },
    ],
  ];

  const currentEventTimeline = eventTimelines[currentDayIndex];

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.heading}>
          TRACK: Agriculture & Bio - Innovations in the Food System
        </Text>
        <View style={styles.timelineContainer}>
          <ScrollView style={{ flex: 1 }}>
            {currentEventTimeline.map((event, index) => (
              <TouchableOpacity
                key={index}
                style={styles.eventItem}
                onPress={() => {
                  handleEventClick(index);
                }}
              >
                <View style={styles.timelineConnector} />

                <View style={styles.eventContent}>
                  <Text style={styles.eventTime}>{event.time}</Text>
                  <Text
                    style={[
                      styles.eventName,
                      selectedEventIndex === index && styles.selectedEvent,
                    ]}
                  >
                    {event.eventName}
                  </Text>
                  {selectedEventIndex === index && (
                    <Text style={styles.eventDetails}>{event.details}</Text>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.signoutContainer}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ConferenceProgram")}
          >
            <Icon
              style={styles.signouticon}
              type={Icons.FontAwesome}
              name="sign-out"
            />
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
  },
  heading: {
    color: colors.frenchGray,
    fontSize: 42,
    textAlign: "center",
    marginTop: windowWidth * 0.5,
    marginLeft: windowWidth * 0.22,
    marginRight: windowWidth * 0.22,
    marginBottom: windowWidth * 0.05,
  },
  dayText: {
    fontSize: 20,
    marginHorizontal: 10,
    color: colors.pineGreen,
  },
  timelineContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.cadetGray,
    borderRadius: 20,
    textAlign: "center",
    marginRight: windowWidth * 0.05,
    marginLeft: windowWidth * 0.05,
    flex: 1,
    height: windowHeight * 0.2,
  },
  eventItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: windowHeight * 0.01,
    marginTop: windowHeight * 0.01,
    position: "relative",
  },
  timelineConnector: {
    width: 2,
    backgroundColor: colors.gunmetal,
    alignSelf: "stretch",
  },
  eventContent: {
    marginLeft: 10,
  },
  eventTime: {
    marginRight: 10,
    fontSize: 16,
    color: colors.gunmetal,
  },
  eventName: {
    fontSize: 16,
    color: colors.gunmetal,
  },
  selectedEvent: {
    fontWeight: "bold",
  },
  eventDetails: {
    fontSize: 14,
    color: colors.gunmetal,
    marginTop: 5,
  },
  signoutContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    marginRight: windowWidth * 0.1,
  },
  signouticon: {
    position: "absolute",
    top: 8,
    right: 8,
    fontSize: 20,
    paddingVertical: windowWidth * 0.02,
    paddingHorizontal: windowWidth * 0.02,
    color: colors.pineGreen,
  },
});

export default AgricultureAndBio;
