import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Start from "./screens/Start"; // Make sure the path is correct
import Splash from "./screens/0Splash";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import TermsConditions from "./screens/Terms&Conditions";
import ADashScreen from "./screens/ADashScreen";
import AUData from "./screens/accessuserdata";
import HomeScreen from "./screens/HomeScreen";
import FarmingGuide from "./screens/GuideDetails";
import UCDetails from "./screens/UpdateContactDetails";
import UCBuyers from "./screens/UCBuyers";
import UCSellers from "./screens/UCSellers";
import UFSupport from "./screens/UFSupport";
import SFGuide from "./screens/sfguide";
import Self from "./screens/SelfFarming";
import Suggestion from "./screens/SuggestionCropping";
import SCSelection from "./screens/scselection";
import CropBuyers from "./screens/CropBuyers";
import CropSellers from "./screens/CropSellers"; 
import SCGuide from "./screens/scguide";
import Support from "./screens/Support";

const Stack = createNativeStackNavigator();

export default function App() {
  // 🌐 GLOBAL LANGUAGE STATE
  const [lang, setLang] = useState("en");

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Start"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Start">
          {(props) => <Start {...props} lang={lang} />}
        </Stack.Screen>

        <Stack.Screen name="Splash">
          {(props) => <Splash {...props} lang={lang} />}
        </Stack.Screen>

        <Stack.Screen name="Login">
          {(props) => (
            <LoginScreen {...props} lang={lang} setLang={setLang} />
          )}
        </Stack.Screen>

        <Stack.Screen name="Register">
          {(props) => (
            <RegisterScreen {...props} lang={lang} setLang={setLang} />
          )}
        </Stack.Screen>

        <Stack.Screen name="TermsConditions">
          {(props) => <TermsConditions {...props} lang={lang} />}
        </Stack.Screen>

        <Stack.Screen name="ADash">
          {(props) => <ADashScreen {...props} lang={lang} />}
        </Stack.Screen>

        <Stack.Screen name="AUData">
          {(props) => <AUData {...props} lang={lang} />}
        </Stack.Screen>

        <Stack.Screen name="UCDetails">
          {(props) => <UCDetails {...props} lang={lang} />}
        </Stack.Screen>

        <Stack.Screen name="UCBuyers">
          {(props) => <UCBuyers {...props} lang={lang} />}
        </Stack.Screen>

        <Stack.Screen name="UCSellers">
          {(props) => <UCSellers {...props} lang={lang} />}
        </Stack.Screen>

        <Stack.Screen name="UFSupport">
          {(props) => <UFSupport {...props} lang={lang} />}
        </Stack.Screen>

        <Stack.Screen name="FarmingGuide">
          {(props) => <FarmingGuide {...props} lang={lang} />}
        </Stack.Screen>

        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} lang={lang} />}
        </Stack.Screen>

        <Stack.Screen name="Self">
          {(props) => <Self {...props} lang={lang} />}
        </Stack.Screen>

        <Stack.Screen name="SFGuide">
          {(props) => <SFGuide {...props} lang={lang} />}
        </Stack.Screen>

        <Stack.Screen name="Suggestion">
          {(props) => <Suggestion {...props} lang={lang} />}
        </Stack.Screen>

        <Stack.Screen name="SCSelection">
          {(props) => <SCSelection {...props} lang={lang} />}
        </Stack.Screen>

        <Stack.Screen name="SCGuide">
          {(props) => <SCGuide {...props} lang={lang} />}
        </Stack.Screen>

        <Stack.Screen name="CropBuyers">
          {(props) => <CropBuyers {...props} lang={lang} />}
        </Stack.Screen>

        <Stack.Screen name="CropSellers">
          {(props) => <CropSellers {...props} lang={lang} />}
        </Stack.Screen>

        <Stack.Screen name="Support">
          {(props) => <Support {...props} lang={lang} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
