import React, { useContext, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const TrackCreateScreen = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Track Create Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
  },
});

export default TrackCreateScreen;
