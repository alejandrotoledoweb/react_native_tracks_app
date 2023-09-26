import React, { useContext, useEffect } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const SignInScreen = ({ route, navigation }) => {
  return (
    <View>
      <Text>Sign In Screen</Text>

      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate("SignUp")}
      />
      <Button title="Go to Main" onPress={() => navigation.navigate("Main")} />
    </View>
  );
};

export default SignInScreen;
