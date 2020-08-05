import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = ({onChangeText, value}) => (
  <TextInput
    style={Styles.input}
    placeholder={'adicione uma tarefa'}
    onChangeText={onChangeText}
    value={value}
  />
);

const Styles = StyleSheet.create({
  input: {
    marginRight: 5,
    marginBottom: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
});

export default Input;
