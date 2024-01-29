import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { commonStyles } from '../StyleHelper' 

const GameMessage = ({winGame,name,handelThankButton,number,randomNumber,attempts,handleDoneButton,guessAgainHandler}) => {

    if (winGame) {
      return (
        <View View style={styles.thankContainer}>
          <Text style={commonStyles.message}>Congrats {name}! You won!</Text>
          <View style={commonStyles.button}>
            <Button title="Thank you!" onPress={handelThankButton}/>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text style={commonStyles.message}>Hello {name}! </Text>
          <Text style={commonStyles.message}>You have chosen {number}</Text>
          <Text style={commonStyles.message}>That's not my number!</Text>
          <Text style={commonStyles.message}>Guess {number > randomNumber ? 'lower' : 'higher'}!</Text>
          <Text style={commonStyles.message}>You have {attempts+1} attempts left! </Text>
          <View style={commonStyles.button}>
            <Button title="Let me guess again" onPress={guessAgainHandler} disabled={attempts<0}/>
          </View>
          <View style={styles.button}>
            <Button title="I am Done" color="red" onPress={handleDoneButton}/>
          </View>
        </View>
      );
    }
  };

export default GameMessage

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: 'center',
        marginTop:20
      },
      thankContainer:{
        justifyContent: "flex-start",
        alignItems: 'center',
        marginTop:120
      },
})