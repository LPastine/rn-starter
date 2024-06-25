import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)

  const setColor = (color, change) => {
    // color === 'red', 'green', 'blue'
    // change === +15, -15

    switch (color) {
      case "red":
        (red + change <= 255 && red + change >= 0) && setRed(red + change);
        break;
      
      case "green":
        (green + change <= 255 && green + change >= 0) && setGreen(green + change);
        break;
      
      case "blue":
        (blue + change <= 255 && blue + change >= 0) && setBlue(blue + change);
        break;
    
      default:
        break;
    }
  };

  return (
    <View>
      <ColorCounter 
        color="Red"
        onIncrease={() => setColor("red", COLOR_INCREMENT)} 
        onDecrease={() => setColor("red", COLOR_INCREMENT * -1)} 
      />
      <ColorCounter 
        color="Green"
        onIncrease={() => setColor("green", COLOR_INCREMENT)} 
        onDecrease={() => setColor("green", COLOR_INCREMENT * -1)} 
      />
      <ColorCounter 
        color="Blue"
        onIncrease={() => setColor("blue", COLOR_INCREMENT)} 
        onDecrease={() => setColor("blue", COLOR_INCREMENT * -1)} 
      />
      <View 
        style={{ 
          height: 150, 
          width: 150, 
          backgroundColor: `rgb(${red},${green},${blue})` 
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen
