import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/Home";
import Signup from "./src/Signup";
import Login from "./src/Login";
import Initial from "./src/screens/Initial";
import ForgetPassword from "./src/screens/ForgetPassword";
import NavigationTab from "./src/bottomtab/NavigationTab";
import Add from "./src/screens/Add";
import Account from "./src/screens/Account";
import ConferenceProgram from "./src/screens/ConferenceProgram";
import Verification from "./src/screens/Verification";
import NewPassword from "./src/screens/NewPassword";
import Calendar from "./src/screens/Calendar";
import HealthcareTechnologyAndInnovation from "./src/screens/HealthcareTechnologyAndInnovation";
import AgricultureAndBio from "./src/screens/AgricultureAndBio";
import S1 from "./src/screens/S1";
import S2 from "./src/screens/S2";
import S3 from "./src/screens/S3";
import S4 from "./src/screens/S4";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Initial" component={Initial} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="NavigationTab" component={NavigationTab} />
        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="ConferenceProgram" component={ConferenceProgram} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen
          name="HealthcareTechnologyAndInnovation"
          component={HealthcareTechnologyAndInnovation}
        />
        <Stack.Screen name="AgricultureAndBio" component={AgricultureAndBio} />
        <Stack.Screen name="S1" component={S1} />
        <Stack.Screen name="S2" component={S2} />
        <Stack.Screen name="S3" component={S3} />
        <Stack.Screen name="S4" component={S4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
