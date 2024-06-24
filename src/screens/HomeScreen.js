import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation: { navigate }}) => {
  return (
    <View>
      <Text style={styles.text}>Hi There!</Text>
      <Button 
        onPress={() => navigate('Components')}
        title="Go to Componens Demo" 
      />
      <Button 
        onPress={() => navigate('List')}
        title="Go to List Demo" 
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
