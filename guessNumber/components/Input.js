import { StyleSheet, View} from 'react-native'
import React from 'react'
import TextInputComponent from './TextInputComponent';

const Input = ({
  name,
  setName,
  nameError,
  number,
  setNumber,
  numberError,
}) => {

  return (
    <View style={styles.container}>
      <TextInputComponent
        label="Name"
        value={name}
        onChangeText={setName}
        error={nameError && 'Please enter a valid name'}
      />
      <TextInputComponent
        label="Enter a Number"
        value={number}
        onChangeText={setNumber}
        error={numberError && 'Please enter a valid number'}
      /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    width:200,
  }
})

export default Input