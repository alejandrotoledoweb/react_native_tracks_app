import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import { StyleSheet } from "react-native";
import { Provider as AuthProvider, Context } from "./src/context/AuthContext";
import { navigationRef } from "./src/utils/navigationService";
import AccountScreen from "./src/screens/AccountScreen";

const Stack = createNativeStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator style={styles.bottomTab}>
      <BottomTab.Screen
        style={styles.item}
        name="TrackCreate"
        component={TrackCreateScreen}
      />
      <BottomTab.Screen name="TrackDetail" component={TrackDetailScreen} />
      <BottomTab.Screen name="Account" component={AccountScreen} />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthProvider>
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
            style={styles.bottomTab}
          />
        </Stack.Navigator>
      </AuthProvider>
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
    // paddingBottom: 20,
    // borderColor: "red",
    // borderWidth: 10,
    marginTop: 35,
    marginBottom: 15,
    justifyContent: "center",
  },
  item: {
    borderColor: "red",
    borderWidth: 10,
    fontSize: 20,
  },
});
