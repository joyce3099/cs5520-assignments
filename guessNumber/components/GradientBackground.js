import React from 'react';
import { View, Text } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'

const GradientBackground = ({ children, style }) => {
  return (
    <LinearGradient
      colors={['#EDE6F7','#957DAD', '#503274']}
      style={style}>
      {children}
    </LinearGradient>
  );
}

export default GradientBackground;
