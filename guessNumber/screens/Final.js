import React, { useEffect } from 'react'
import { Image, StyleSheet, Text, View ,Button, Modal} from 'react-native'
import Card from '../components/Card'
import Header from '../components/Header'
import { commonStyles } from '../StyleHelper' 

const Final = ({ won,finalVisible,closeFinal,randomNumber,handleReset} ) => {
  
  const handlePlayAgain = () =>{
    closeFinal(); 
  
    setTimeout(() => {
      handleReset(); 
    }, 0); 
  }

  console.log("from final",randomNumber)

  const finalContent = () =>{
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

    return (
      <View style={styles.outerContainer}>
      <Modal visible={finalVisible}>
      <View style={styles.modalCenteredView}>
      <Header title="Game is over"/>
      <Card>
      <Text style={commonStyles.message}>Here's your picture</Text>
        {finalContent()}
        <View style={commonStyles.button}>
          <Button title="Start Again" onPress={handlePlayAgain} />
        </View>
      </Card>
      </View>
      </Modal>
      </View>
      
    )
}

export default Final

const styles = StyleSheet.create({
    image: {
      width: 100,
      height: 100,
      marginTop:20,
    },
    outerContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalCenteredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:"#EDE6F7",
    },
    message:{
      fontSize: 18, 
      marginBottom:10,
      color:"purple", 
    }
  });