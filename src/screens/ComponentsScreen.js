import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = 'Luciano';

  return (
    <View>
      <Text style={styles.heading}>Getting started with React Native</Text>
      <Text style={styles.body}>My name is {name}</Text>
    </View> 
  )
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 45
  },
  body: {
    fontSize: 20
  }
});

export default ComponentsScreen;
