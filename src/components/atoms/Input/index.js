import React from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {calendarIcon} from '../../../asset';
import {windowWidth} from '../../../utils/constans';

const Input = ({placeholder, type, onPress, ...rest}) => {
  if (type == 'Date') {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={'#000000'}
            {...rest}
          />
        </View>
        <TouchableOpacity onPress={onPress}>
          <Image source={calendarIcon} style={styles.img} />
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={'#000000'}
        {...rest}
      />
    );
  }
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 14,
    color: '#000000',
    width: windowWidth * 0.8,
    height: 45,
  },
  img: {
    width: 25,
    height: 25,
    marginLeft: -windowWidth * 0.18,
    alignSelf: 'center',
  },
});
