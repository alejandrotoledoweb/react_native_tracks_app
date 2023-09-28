import { Button, Input, Text } from "@rneui/base";
import React, { useContext, useEffect, useState } from "react";
import Spacer from "../components/Spacer";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUpScreen = ({ navigation }) => {
  const { state, signUp, cleanError, tryLocalisgnIn } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      cleanError();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    tryLocalisgnIn();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <AuthForm
          headerText="Sign Up for Tracker"
          errorMessage={state.errorMessage}
          submitButtonText="Sign Up"
          onSubmit={signUp}
        />
        <NavLink
          routeName="SignIn"
          text="Already have an account? Sign in instead!"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  errorMessage: {
    fontSize: 15,
    color: "red",
    marginLeft: 15,
    marginBottom: 15,
  },
});

export default SignUpScreen;
