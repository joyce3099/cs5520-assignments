import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FinalContent = ({won,randomNumber}) =>{
    console.log(won)
    if (won) {
      const imageUrl = `https://picsum.photos/id/${randomNumber}/100/100`;
      return (
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
        )
      } else {
          const sadFace = require('../assets/Sad-Face.png'); 
          return (
            <View>
              <Image source={sadFace} style={styles.image} />
            </View>
          );
      }
    }

export default FinalContent

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        marginTop:20,
      },
})