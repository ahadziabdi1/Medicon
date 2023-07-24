import React, { useEffect, useRef } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"; // Importing MaterialCommunityIcons
import FontAwesome from "react-native-fontawesome"; // Importing FontAwesome
import Constants from "../Constants";
import Initial from "../screens/Initial";
import Icon, { Icons } from "../bottomtab/Icon";
import Signup from "../Signup";
import Login from "../Login";
import * as Animatable from "react-native-animatable";

const TabArr = [
  {
    route: "Initial",
    label: "Initial",
    type: Icons.Ionicons,
    activeIcon: "grid",
    inActiveIcon: "grid-outline",
    component: Initial,
  },
  {
    route: "List",
    label: "List",
    type: MaterialCommunityIcons,
    activeIcon: "heart-plus",
    inActiveIcon: "heart-plus-outline",
    component: Signup,
  },
  {
    route: "Search",
    label: "Search",
    type: MaterialCommunityIcons,
    activeIcon: "timeline-plus",
    inActiveIcon: "timeline-plus-outline",
    component: Login,
  },
  /*{
    route: "Account",
    label: "Account",
    type: FontAwesome,
    activeIcon: "user-circle",
    inActiveIcon: "user-circle-o",
    component: Constants,
  }, */
];

const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({0: {scale: .5, rotate: '0deg'}, 1: {scale: 1.5, rotate: '360deg'}});
    } else {
      viewRef.current.animate({0: {scale: 1.5, rotate: '360deg'}, 1: {scale: 1, rotate: '0deg'}});
    }
  }, [focused])
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View style={styles.container} ref={viewRef} duration={2000}>
        <Icon
          type={item.type}
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? Constants.red : Constants.gunmetal}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

const NavigationTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          position: "absolute",
          bottom: 16,
          left: 16,
          right: 16,
          borderRadius: 10,
        },
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //paddingHorizontal: windowWidth * 0.05,
  },
});

export default NavigationTab;
