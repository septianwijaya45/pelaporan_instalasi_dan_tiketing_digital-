import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../../../utils/constans';
import Back from '../../../components/atoms/Back';
import Home from '../../../components/atoms/Home';

const DetailLaporans = ({navigation, route}) => {
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
      <View style={styles.body}>
        <View style={styles.title}>
          <Text style={styles.textTitle}>Detail Informasi</Text>
        </View>
        <View style={styles.description}>
          <ScrollView style={styles.subtitle}>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Tanggal Mulai Instalasi</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>12-12-2021</Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>
                  Tanggal Selesai Instalasi
                </Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>13-12-2021</Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Tanggal Mulai Training</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>14-12-2021</Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>
                  Tanggal Selesai Training
                </Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>15-12-2021</Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Komponen Sistem</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>- Ticketing</Text>
                <Text style={styles.textValue}>- Caller</Text>
                <Text style={styles.textValue}>- Digital Singage</Text>
                <Text style={styles.textValue}>- Hardware</Text>
                <Text style={styles.textValue}>- Jaringan</Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Kondisi Sistem</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>- Ticketing</Text>
                <Text style={styles.textValue}>- Caller</Text>
                <Text style={styles.textValue}>- Digital Singage</Text>
                <Text style={styles.textValue}>- Hardware</Text>
                <Text style={styles.textValue}>- Jaringan</Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Kondisi Sistem</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>Sistem Sedang Berjalan</Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Problem Instalasi</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>
                  Sistem Tidak Dapat Berjalan
                </Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Status</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>Diproses</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default DetailLaporans;

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
    height: windowHeight * 0.85,
    marginTop: 20,
    borderRadius: 40,
  },
  title: {
    marginLeft: windowWidth * 0.1,
    marginTop: windowWidth * 0.05,
  },
  textTitle: {
    color: '#707070',
    fontSize: 20,
  },
  description: {
    flexDirection: 'row',
  },
  subtitle: {
    height: windowHeight * 0.75,
  },
  rowSubtitle: {
    marginTop: windowWidth * 0.1,
    marginLeft: windowWidth * 0.1,
    width: windowWidth * 0.5,
    height: 'auto',
    flexDirection: 'row',
  },
  textSubtitle: {
    color: '#C9C9C9',
  },
  rowValue: {
    marginLeft: windowWidth * 0.1,
    width: windowWidth * 0.6,
  },
  textValue: {
    color: '#000000',
  },
});
