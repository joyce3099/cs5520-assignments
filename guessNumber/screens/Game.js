import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Final from './Final'
import GameMessage from '../components/GameMessage'
import GradientBackground from '../components/GradientBackground'

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
  
    return (
      <View >
        <Modal visible={modalVisible} >
        <GradientBackground style={styles.modalCenteredView}>
          <Card >
          <GameMessage 
            winGame={winGame}
            name={name}
            handelThankButton={handelThankButton}
            number={number}
            randomNumber={randomNumber}
            attempts={attempts}
            handleDoneButton={handleDoneButton}
            guessAgainHandler={guessAgainHandler}
          />
            <Final visible={finalVisible}
              won={winGame}
              randomNumber={randomNumber}
              finalVisible={finalVisible}
              closeFinal={closeFinal}
              handleReset={handleReset}
            />
          </Card>
          </GradientBackground>
        </Modal>
      </View>
      
    );
  }

export default Game

const styles = StyleSheet.create({
  modalCenteredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:"#EDE6F7",
  },

});
