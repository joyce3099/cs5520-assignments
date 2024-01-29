import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextInputComponent = ({ label, value, onChangeText, error }) => {
  return (
    <View >
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18, 
    marginBottom: 8, 
    color:"purple",
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: 'purple',
    width: '100%',
    fontSize: 20,
    marginBottom: 20, 
  },
  errorText: {
    color: 'black',
    // marginTop: 2,
  },
});

export default TextInputComponent;