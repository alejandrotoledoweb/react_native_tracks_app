import React, { useContext, useEffect, useState } from "react";
import { StyleSheet } from "react-native";

import Spacer from "./Spacer";
import { Text, Button, Input } from "@rneui/base";
import { Context as AuthContext } from "../context/AuthContext";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  // const { cleanError } = useContext(AuthContext);
  // useEffect(() => {
  //   cleanError();
  // }, [formData]);
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
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        label="Email"
        value={formData.email}
        onChangeText={(value) => setData("email", value)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={formData.password}
        onChangeText={(value) => setData("password", value)}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit(formData.email, formData.password)}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
});

export default AuthForm;
