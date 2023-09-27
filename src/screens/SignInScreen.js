import React, { useContext, useEffect } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";
import { useFocusEffect } from "@react-navigation/native";

const SignInScreen = ({ navigation }) => {
  const { state, signIn, cleanError } = useContext(AuthContext);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      cleanError();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <View style={styles.container}>
        <AuthForm
          headerText="Sign In for Tracker"
          errorMessage={state.errorMessage}
          submitButtonText="Sign In"
          onSubmit={signIn}
        />
        <NavLink routeName="SignUp" text="Not having an account? Sing up!" />
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

export default SignInScreen;
