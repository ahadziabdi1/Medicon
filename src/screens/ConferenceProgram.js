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

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const daysOfWeek = ["Wednesday", "Thursday", "Friday", "Saturday"];

const ConferenceProgram = () => {
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
        time: "19:00 - 23:00",
        eventName: "Welcome Cocktail (only with invitations)",
      },
    ],
    [
      {
        time: "08:00 - 09:00",
        eventName: "Welcome and Networking: Guest Arrival (CONGRESS CENTER)",
        details:
          "Registration of participants will be available at the conference info desk located at the entrance of the Congress Center.\nOpportunity to meet exhibitors and explore new digitalization services in Bosnia and Herzegovina - Business Networking / Photo Opportunity",
      },
      {
        time: "09:00 - 10:30",
        eventName:
          "Digital Horizons for Health and Environment: Embracing Innovation (CONFERENCE HALL)",
        details:
          "Welcome Address TBD\nKeynote addressing by prof. dr. Velimir Srića, Faculty of Economy, University of Zagreb: Harmony-based Leadership and Digital Transformation",
      },
      { time: "", eventName: "Coffee Break" },
      {
        time: "10:00 - 10:30",
        eventName: "Press conference (LOCATION - TBD)",
        details:
          "Key announcements, updates, and important information will be shared with journalists and members of the press. This press conference offers an opportunity for media representatives to engage with speakers, ask questions, and gain insights into the latest developments. Representatives of media are required to register for the conference via medicon2023@gmail.com!",
      },

      { time: "", eventName: "TRACK: Healthcare Technology and Innovation" },
      {
        time: "",
        eventName: "TRACK: Agriculture & Bio - Innovations in the Food System",
      },
      {
        time: "19:00 - 00:00",
        eventName:
          "Digital future of SMEs in Bosnia and Herzegovina: Connection, Transformation and Innovation",
        details:
          "This event brings together officials and representatives from the government sector in Bosnia and Herzegovina, business representatives interested in digitalization, as well as representatives from the scientific research sector in Bosnia and Herzegovina. The aim of this event is to enable participants to establish valuable business contacts, exchange ideas and experiences, and develop collaborations in the field of digitalization. With an informal setting and an appropriate program, participants will have the opportunity to meet key players in the field of digitalization, present their ideas, projects, or products, and expand their network of business contacts. Additionally, through short presentations and discussions, insights into the latest trends and best practices in digital transformation will be provided.\n\nThe event is organized with the support of project Innovation and Digitalisation in SMEs in BiH, Commissioned by the German Federal Ministry for Economic Cooperation and Development, co-funded by the EU, and part of the EU4DigitalSME Initiative of the European Union.",
      },
      { time: "", eventName: "Closed event. Only with invitations." },
    ],
    [
      {
        time: "09:00 - 10:30",
        eventName: "S1. BIOMEDICAL SIGNAL PROCESSING (Hall 1)",
      },
      {
        time: "09:00 - 10:30",
        eventName: "S2. MEDICAL PHYSICS, BIOMEDICAL IMAGING AND RADIATION PROTECTION (Hall 2)",
      },
      {
        time: "09:00 - 10:30",
        eventName: "S3. PHARMACEUTICAL ENGINEERING (Hall 3)",
      },
      {
        time: "09:00 - 10:30",
        eventName: "S4. ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING IN HEALTHCARE (Hall 4)",
      },
      {
        time: "", eventName: "Coffee Break"
      },
      {
        time: "10:45 - 12:30",
        eventName: "S5. BIOMEDICAL SIGNAL PROCESSING (Hall 1)",
      },
    ],
    [
      // ... events for Thursday
    ],
  ];

  const currentEventTimeline = eventTimelines[currentDayIndex];

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.heading}>Conference program</Text>
        <View style={styles.containerDay}>
          <TouchableOpacity
            style={styles.arrowButton}
            onPress={handlePreviousDay}
          >
            <Text style={styles.arrowText}>{"<"}</Text>
          </TouchableOpacity>
          <Text style={styles.dayText}>{daysOfWeek[currentDayIndex]}</Text>
          <TouchableOpacity style={styles.arrowButton} onPress={handleNextDay}>
            <Text style={styles.arrowText}>{">"}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.timelineContainer}>
          <ScrollView style={{ flex: 1 }}>
            {currentEventTimeline.map((event, index) => (
              <TouchableOpacity
                key={index}
                style={styles.eventItem}
                onPress={() => {
                  handleEventClick(index);
                  if (
                    event.eventName ===
                    "TRACK: Healthcare Technology and Innovation"
                  ) {
                    navigation.navigate("HealthcareTechnologyAndInnovation");
                  }
                  if (
                    event.eventName ===
                    "TRACK: Agriculture & Bio - Innovations in the Food System"
                  ) {
                    navigation.navigate("AgricultureAndBio");
                  }
                  if (
                    event.eventName === "S1. BIOMEDICAL SIGNAL PROCESSING (Hall 1)"
                  ) {
                    navigation.navigate("S1");
                  }
                  if (
                    event.eventName === "S2. MEDICAL PHYSICS, BIOMEDICAL IMAGING AND RADIATION PROTECTION (Hall 2)"
                  ) {
                    navigation.navigate("S2");
                  }
                  if (
                    event.eventName === "S3. PHARMACEUTICAL ENGINEERING (Hall 3)"
                  ) {
                    navigation.navigate("S3");
                  }
                  if (
                    event.eventName === "S4. ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING IN HEALTHCARE (Hall 4)"
                  ) {
                    navigation.navigate("S4");
                  }
                  if (
                    event.eventName === "S5. BIOMEDICAL SIGNAL PROCESSING (Hall 1)"
                  ) {
                    navigation.navigate("S5");
                  }
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
  containerDay: {
    flexDirection: "row",
    backgroundColor: colors.gunmetal,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 10,
    paddingVertical: windowHeight * 0.01,
    marginBottom: 10,
  },
  arrowButton: {
    paddingHorizontal: 10,
  },
  arrowText: {
    fontSize: 24,
    color: colors.pineGreen,
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
    height: windowHeight * 0.1,
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
});

export default ConferenceProgram;
