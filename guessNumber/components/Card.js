import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({children}) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  card:{
    borderRadius: 8,
    borderColor: '#ccc',
    margin: 50,
    width: 300, 
    height: 350, 
    backgroundColor: '#A9A9A9',
    alignItems: 'center',
    justifyContent: 'center',
  }
})