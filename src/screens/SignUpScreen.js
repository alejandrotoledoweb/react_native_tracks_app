import { Button, Input, Text } from "@rneui/base";
import React, { useContext, useEffect } from "react";
import Spacer from "../components/Spacer";
import { StyleSheet, View } from "react-native";

const SignUpScreen = ({ route, navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Spacer>
          <Text h4>SignUp Screen</Text>
        </Spacer>
        <Spacer>
          <Input label="Email" />
        </Spacer>
        <Spacer>
          <Input label="Password" />
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
