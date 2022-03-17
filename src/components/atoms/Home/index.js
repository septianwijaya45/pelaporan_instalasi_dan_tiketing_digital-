import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {homeIcon} from '../../../asset';

const Home = ({...rest}) => {
  return (
    <TouchableOpacity {...rest}>
      <Image source={homeIcon} style={styles.arrow} />
    </TouchableOpacity>
  );
};

export default Home;

const styles = StyleSheet.create({
  arrow: {
    width: 30,
    height: 30,
  },
});
