import { Button, Text } from "@rneui/base";
import React, { useContext, useEffect } from "react";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = ({ route, navigation }) => {
  const { signOut } = useContext(AuthContext);
  return (
    <>
      <Text>Account Screenn</Text>
      <Button title="Sign out" onPress={signOut} />
    </>
  );
};

export default AccountScreen;
