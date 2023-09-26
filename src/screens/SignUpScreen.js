import React, { useContext, useEffect } from "react";
import { Button, Text, View } from "react-native";

const SignUpScreen = ({ route, navigation }) => {
  return (
    <View>
      <Text>SignUp Screen</Text>

      <Button
        title="Go to Sign In"
        onPress={() => navigation.navigate("SignIn")}
      />
    </View>
  );
};

export default SignUpScreen;
