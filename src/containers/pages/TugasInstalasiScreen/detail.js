import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Back from '../../../components/atoms/Back';
import Home from '../../../components/atoms/Home';
import {windowHeight, windowWidth} from '../../../utils/constans';

const DetailTugas = ({navigation, route}) => {
  const {title} = route.params;
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.rowHeader}>
          <View>
            <Back
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
          <View style={styles.rowText}>
            <Text style={{color: '#000000', fontSize: 15}}>{title}</Text>
          </View>
          <View style={styles.rowHome}>
            <Home
              onPress={() => {
                navigation.navigate('Menu');
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.body}></View>
    </View>
  );
};

export default DetailTugas;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DBDADA',
    flex: 1,
  },
  rowHeader: {
    flexDirection: 'row',
    marginHorizontal: 25,
    marginVertical: 15,
  },
  rowText: {
    marginLeft: 20,
    width: windowWidth * 0.6,
    alignItems: 'center',
  },
  rowHome: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: '#ffffff',
    width: windowWidth,
    height: windowHeight * 0.8,
    marginTop: 20,
    borderRadius: 40,
  },
});
