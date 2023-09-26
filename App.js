import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import { StyleSheet, View } from "react-native";

const Stack = createNativeStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator style={styles.bottomTab}>
      <BottomTab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <BottomTab.Screen name="TrackDetail" component={TrackDetailScreen} />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={SignUpScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignIn"
          component={SignInScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomTab: {
    backgroundColor: "grey",
    marginTop: 60,
  },
});
