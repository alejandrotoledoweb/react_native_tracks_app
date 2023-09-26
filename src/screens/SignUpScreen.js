import { Button, Input, Text } from "@rneui/base";
import React, { useContext, useEffect, useState } from "react";
import Spacer from "../components/Spacer";
import { StyleSheet, View } from "react-native";

const SignUpScreen = ({ route, navigation }) => {
  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const setData = (key, value) => {
    setFormData((current) => ({
      ...current,
      [key]: value,
    }));
  };
  return (
    <>
      <View style={styles.container}>
        <Spacer>
          <Text h4>SignUp Screen</Text>
        </Spacer>
        <Spacer>
          <Input
            label="Email"
            onChangeText={(value) => setData("email", value)}
            autoCapitalize="none"
            autoComplete="off"
          />
        </Spacer>
        <Spacer>
          <Input
            secureTextEntry
            label="Password"
            onChangeText={(value) => setData("password", value)}
            autoCapitalize="none"
            autoComplete="off"
          />
        </Spacer>
        <Spacer>
          <Button title="Sign Up" />
        </Spacer>

        <Spacer>
          <Button
            title="Go to Sign In"
            onPress={() => navigation.navigate("SignIn")}
          />
        </Spacer>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
});

export default SignUpScreen;
