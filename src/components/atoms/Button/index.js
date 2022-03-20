import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {windowWidth} from '../../../utils/constans';

const Button = ({name, type, ...rest}) => {
  return (
    <TouchableOpacity style={styles.button(type)} {...rest}>
      <Text style={styles.text(type)}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: type => ({
    backgroundColor:
      type == 'Login' ? '#B42121' : type == 'Draft' ? '#FAC800' : '#289E53',
    paddingHorizontal: type == 'Login' ? 60 : 10,
    paddingVertical: type == 'Login' ? 15 : 10,
    borderRadius: 20,
    width: type == 'Submit' ? windowWidth * 0.2 : 'auto',
  }),
  text: type => ({
    fontSize: type == 'Login' ? 23 : 10,
    textTransform: type == 'Login' ? 'uppercase' : 'none',
    fontWeight: type == 'Login' ? 'bold' : '500',
    color: '#FFFFFF',
    alignSelf: 'center',
  }),
});
