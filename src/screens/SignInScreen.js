import React, { useContext, useEffect } from "react";
import { Button, Text, View } from "react-native";

const SignInScreen = ({ route, navigation }) => {
  return (
    <View>
      <Text>Sign In Screen</Text>

      <Button
        title="Go to Sign Up"
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
};

export default SignInScreen;
