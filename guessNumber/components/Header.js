import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({title}) => {
  return (
    <View style={styles.container} >
      <Text style={styles.header}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
  },
    header:{
        color:"purple",
        fontSize:25,
      }
})