import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useState } from 'react';
import Input from '../components/Input'
import Header from '../components/Header'
import Checkbox from 'expo-checkbox';
import Game from './Game';
import Card from '../components/Card';
import { commonStyles } from '../StyleHelper' 


const Start = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(false);
  const [number, setNumber] = useState('');
  const [numberError, setNumberError] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [confirmDisabled, setConfirmDisabled] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [winGame,setWinGame] = useState(false)
  const [attempts,setAttempts] = useState(2)

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 10) + 1020;
  };
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());


  const handleReset = () =>{
    setName("");
    setNumber("");
    setNameError(false);
    setNumberError(false);
    setChecked(false);
    setConfirmDisabled(true);
    console.log("Setting modalVisible to false");
    setModalVisible(false); 
    setWinGame(false);
    setAttempts(2)
    const newRandomNumber = generateRandomNumber(); 
    setRandomNumber(newRandomNumber);

}

const gamePlayer = (name, parsedNumber) =>{
  console.log(randomNumber);
  if (parsedNumber == randomNumber){
    setWinGame(true);
    console.log("win")
  } else {
    setWinGame(false);
    setAttempts(attempts-1)
    console.log("lose")
    console.log({attempts});
  }
  if (attempts < 0) {
    setWinGame(false);
  }
}

  // const handleConfirm = (name,number) =>{
  //   if (!isNaN(name) || name.length <= 1){
  //       setNameError(true);
  //   }

  //   const parsedNumber = parseInt(number,10);
  //   if (isNaN(parsedNumber) ||parsedNumber < 1020 || parsedNumber > 1029){
  //     setNumberError(true);
        
  //   }

  //   if (!nameError && !numberError){
  //     if (attempts < 0){
  //       setWinGame(false);
  //       setAttempts(0)
  //       // setModalVisible(true);
  //     } else{
  //       gamePlayer(name,parsedNumber);
  //       setModalVisible(true);
  //     }
  //   }
  // }

  const handleConfirm = (inputName, inputNumber) => {
    let isNameValid = isNaN(inputName) && inputName.length > 1;
    let isNumberValid = !isNaN(parseInt(inputNumber, 10)) && parseInt(inputNumber, 10) >= 1020 && parseInt(inputNumber, 10) <= 1029;
  
    setNameError(!isNameValid);
    setNumberError(!isNumberValid);
  
    if (isNameValid && isNumberValid ) {
      if (attempts <= 0){
        setWinGame(false);
        setAttempts(0)
      }
      gamePlayer(inputName, parseInt(inputNumber, 10));
      setModalVisible(true);
    } else {
      setModalVisible(false);
      setConfirmDisabled(true);
      setChecked(false);
    }
  };

  const handleCheckbox = (newState) =>{
    setChecked(newState);
    setConfirmDisabled(!newState);
  }

  const dismissModal = () =>{
    setModalVisible(false);
  }

  return (
    <View>
    <Header title="Guess My Number"/>
    <Card>
      <Input
        name={name}
        setName={setName}
        nameError={nameError}
        number={number}
        setNumber={setNumber}
        numberError={numberError}
      />
      <View style={styles.checkboxContainer}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={handleCheckbox}
        />
        <Text style={styles.checkboxText}>I am not a robot</Text>
      </View>
      <View style={styles.buttonsContainer}>
      <View style={commonStyles.button}>
        <Button title="Reset" onPress={handleReset} />
      </View>
      <View style={commonStyles.button}>
        <Button title="Confirm" onPress={() =>handleConfirm(name, number)} disabled={confirmDisabled}/>
         </View>
        </View>
      </Card>
      {
      !nameError && !numberError && modalVisible &&( 
        <Game 
        modalVisible={modalVisible} 
        dismissModal={dismissModal} 
        name={name}
        number={number}
        winGame={winGame}
        setWinGame={setWinGame}
        randomNumber={randomNumber}
        attempts={attempts}
        handleReset={handleReset}
        setChecked={setChecked}
        setConfirmDisabled={setConfirmDisabled}
        // setModalVisible={setModalVisible}
        />
      )}
      
    </View>
  )
} 
export default Start

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:"center",
    marginBottom: 16,
  },
  checkbox: {
    margin: 8,
  },
  checkboxText: {
    marginLeft: 8,
    color:"purple"
  },
  buttonsContainer: 
    { flexDirection: "row" },
  buttonView: {
    width: "40%",
    margin: 5,
  },
})