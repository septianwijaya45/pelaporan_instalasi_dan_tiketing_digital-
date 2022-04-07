import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {plusIcon} from '../../../asset';

const Add = ({...rest}) => {
  return (
    <TouchableOpacity {...rest}>
      <Image source={plusIcon} style={styles.arrow} width={30} height={30} />
    </TouchableOpacity>
  );
};

export default Add;

const styles = StyleSheet.create({});
