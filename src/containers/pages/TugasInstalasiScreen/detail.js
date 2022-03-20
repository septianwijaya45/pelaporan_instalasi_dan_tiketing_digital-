import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Back from '../../../components/atoms/Back';
import Home from '../../../components/atoms/Home';
import {windowHeight, windowWidth} from '../../../utils/constans';
import Button from '../../../components/atoms/Button';

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
      <View style={styles.body}>
        <View style={styles.title}>
          <Text style={styles.textTitle}>Detail Informasi</Text>
        </View>
        <View style={styles.description}>
          <ScrollView style={styles.subtitle}>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Kategori Instansi</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>Pemerintahan</Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Nama Instalasi</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>Bank BRI</Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Alamat</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>Jl. Sigura Sigura No. 89</Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>PIC (Penanggung Jawab)</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>Agus Susanto</Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>No. Telp PIC</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>081212121212</Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Jumlah Teknisi</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>2</Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Nama Teknisi</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>Teknisi 2, Teknisi 4</Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Leader Teknisi</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>Teknisi 4</Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Tanggal Instalasi</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>01-01-2022</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.button}>
        <Button
          name="Kerjakan"
          type="Submit"
          onPress={() => {
            navigation.navigate('FormLaporanInstalasi');
          }}
        />
      </View>
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
    height: windowHeight * 0.7,
  },
  rowSubtitle: {
    marginTop: windowWidth * 0.1,
    marginLeft: windowWidth * 0.1,
    width: windowWidth * 0.5,
    flexDirection: 'row',
  },
  textSubtitle: {
    color: '#C9C9C9',
  },
  rowValue: {
    marginLeft: windowWidth * 0.1,
    width: windowWidth * 0.35,
  },
  textValue: {
    color: '#000000',
  },
  button: {
    flexWrap: 'wrap-reverse',
    marginRight: 20,
    marginTop: 20,
  },
});
