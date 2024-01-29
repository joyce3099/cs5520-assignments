import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Final from './Final'
import { commonStyles } from '../StyleHelper'

const Game = ({modalVisible,dismissModal,name,number,winGame,setWinGame,randomNumber,attempts,handleReset,setChecked,setConfirmDisabled}) => {

    const [finalVisible,setFinalVisible] = useState(false)

    function guessAgainHandler(){
      dismissModal();
      setChecked(false);
      setConfirmDisabled(true)
    }

    function handelThankButton(){
      setFinalVisible(true)
    }

    function handleDoneButton(){
      setWinGame(false); 
      setFinalVisible(true)
      // dismissModal();
    }

    const closeFinal = () => {
      setFinalVisible(false);
      // setModalVisible(false);  
    }

    const gameMessage = () => {
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
  
    return (
      <View >
        <Modal visible={modalVisible} >
        <View style={styles.modalCenteredView}>
          <Card >
            {gameMessage()}
            <Final visible={finalVisible}
              won={winGame}
              randomNumber={randomNumber}
              finalVisible={finalVisible}
              closeFinal={closeFinal}
              handleReset={handleReset}
            />
          </Card>
          </View>
        </Modal>
      </View>
      
    );
  }

export default Game

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
  modalCenteredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#EDE6F7",
  },
  

});
