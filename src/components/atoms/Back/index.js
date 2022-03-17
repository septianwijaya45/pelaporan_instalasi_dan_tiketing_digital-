import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {arrowLeft} from '../../../asset';

const Back = ({...rest}) => {
  return (
    <TouchableOpacity {...rest}>
      <Image source={arrowLeft} style={styles.arrow} />
    </TouchableOpacity>
  );
};

export default Back;

const styles = StyleSheet.create({
  arrow: {
    width: 20,
    height: 20,
  },
});
