import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import Back from '../../../components/atoms/Back';
import Home from '../../../components/atoms/Home';
import {windowHeight, windowWidth} from '../../../utils/constans';
import Button from '../../../components/atoms/Button';
import axios from 'axios';

const DetailTugas = ({navigation, route}) => {
  const {id, title, token} = route.params;

  const [kategori, setKategori] = useState();
  const [instansi, setInstansi] = useState();
  const [alamat, setAlamat] = useState();
  const [pic, setPic] = useState();
  const [telepon, setTelepon] = useState();
  const [jumlahTeknisi, setJumlahTeknisi] = useState();
  const [namaTeknisi, setNamaTeknisi] = useState();
  const [leaderTeknisi, setLeaderTeknisi] = useState();
  const [tanggal, setTanggal] = useState();

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1000);
  }, []);

  const getData = () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios
      .get(`http://localhost:8000/api/instalasi/${id}`)
      .then(response => {
        setKategori(response.data[0].category_instansi);
        setInstansi(response.data[0].category_instansi);
        setAlamat(response.data[0].alamat);
        setPic(response.data[0].pic_name);
        setTelepon(response.data[0].pic_phone);
        setJumlahTeknisi(response.data[0].number_of_technicians);
        setNamaTeknisi(response.data[0].name);
        setLeaderTeknisi(response.data[0].name);
        setTanggal(response.data[0].date_instalation);
      })
      .catch(e => {
        Alert.alert('Gagal!', 'Error: Data Tidak Ditemukan! Status Code: ' + e);
        console.log(e);
      });
  };
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
                <Text style={styles.textValue}>
                  {kategori ? (
                    kategori
                  ) : (
                    <Text style={{color: '#d0312d'}}>Tidak Ada</Text>
                  )}
                </Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Nama Instalasi</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>
                  {instansi ? (
                    instansi
                  ) : (
                    <Text style={{color: '#d0312d'}}>Tidak Ada</Text>
                  )}
                </Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Alamat</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>
                  {alamat ? (
                    alamat
                  ) : (
                    <Text style={{color: '#d0312d'}}>Tidak Ada</Text>
                  )}
                </Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>PIC (Penanggung Jawab)</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>
                  {pic ? (
                    pic
                  ) : (
                    <Text style={{color: '#d0312d'}}>Tidak Ada</Text>
                  )}
                </Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>No. Telp PIC</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>
                  {telepon ? (
                    telepon
                  ) : (
                    <Text style={{color: '#d0312d'}}>Tidak Ada</Text>
                  )}
                </Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Jumlah Teknisi</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>
                  {jumlahTeknisi ? (
                    jumlahTeknisi
                  ) : (
                    <Text style={{color: '#d0312d'}}>Tidak Ada</Text>
                  )}
                </Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Nama Teknisi</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>
                  {namaTeknisi ? (
                    namaTeknisi
                  ) : (
                    <Text style={{color: '#d0312d'}}>Tidak Ada</Text>
                  )}
                </Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Leader Teknisi</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>
                  {leaderTeknisi ? (
                    leaderTeknisi
                  ) : (
                    <Text style={{color: '#d0312d'}}>Tidak Ada</Text>
                  )}
                </Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Tanggal Instalasi</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>
                  {tanggal ? (
                    tanggal
                  ) : (
                    <Text style={{color: '#d0312d'}}>Tidak Ada</Text>
                  )}
                </Text>
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
            navigation.navigate('FormLaporanInstalasi', {
              id: id,
              token: token,
            });
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
