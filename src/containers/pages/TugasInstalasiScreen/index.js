import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Back from '../../../components/atoms/Back';
import {windowHeight, windowWidth} from '../../../utils/constans';
import Home from '../../../components/atoms/Home';

const TugasInstalasi = ({navigation}) => {
  return (
    <View>
      <View>
        <View style={styles.header}>
          <View style={styles.rowHeader}>
            <View>
              <Back
                onPress={() => {
                  navigation.goBack();
                }}
              />
            </View>
            <View style={styles.rowText}>
              <Text style={{color: '#000000', fontSize: 15}}>
                Tugas Instansi
              </Text>
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
      </View>
      <ScrollView style={styles.data}>
        <View style={styles.dataList}>
          <Text style={styles.title}>Instalasi BRI</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('TugasDetail', {
                title: 'Instalasi BRI',
              });
            }}>
            <Text style={styles.detail}>Klik Detail</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dataList}>
          <Text style={styles.title}>Instalasi BRI</Text>
          <TouchableOpacity>
            <Text style={styles.detail}>Klik Detail</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dataList}>
          <Text style={styles.title}>Instalasi PT</Text>
          <TouchableOpacity>
            <Text style={styles.detail}>Klik Detail</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dataList}>
          <Text style={styles.title}>Instalasi BRI</Text>
          <TouchableOpacity>
            <Text style={styles.detail}>Klik Detail</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dataList}>
          <Text style={styles.title}>Instalasi PT</Text>
          <TouchableOpacity>
            <Text style={styles.detail}>Klik Detail</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default TugasInstalasi;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#BCBCBC',
    height: windowHeight * 0.13,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  rowHeader: {
    flexDirection: 'row',
    marginHorizontal: 25,
    marginVertical: 15,
  },
  rowText: {
    marginLeft: 20,
  },
  rowHome: {
    position: 'absolute',
    right: 0,
  },
  data: {
    marginTop: windowHeight * 0.07,
    marginBottom: 100,
  },
  dataList: {
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    width: windowWidth,
    height: windowHeight * 0.2,
    shadowColor: '#000',
    marginBottom: 50,
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    marginHorizontal: 30,
    fontSize: 20,
  },
  detail: {
    color: '#000',
    marginHorizontal: 30,
    marginTop: 20,
    fontSize: 16,
  },
});