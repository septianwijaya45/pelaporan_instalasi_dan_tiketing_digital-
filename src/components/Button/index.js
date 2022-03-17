import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({name}) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B42121',
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 20,
  },
  text: {
    fontSize: 23,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
