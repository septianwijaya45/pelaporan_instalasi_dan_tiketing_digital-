import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {windowHeight, windowWidth} from '../../../utils/constans';
import {defaultIcon, laporanIcon, logoutIcon, tugasIcon} from '../../../asset';
import axios from 'axios';

const MenuScreen = ({navigation, route}) => {
  const {user, name, token} = route.params;
  const [idUser, setIdUser] = useState('');
  const [totalData, setTotalData] = useState('');

  const countDataReport = () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios
      .get(`http://localhost:8000/api/total-instalasi`)
      .then(response => {
        setTotalData(response.data);
      })
      .catch(e => {
        Alert.alert('Gagal!', 'Error: ' + e);
        console.log(e);
      });
  };

  const getIdUser = () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios
      .get(`http://localhost:8000/api/user/${name}`)
      .then(response => {
        setIdUser(response.data.id);
      })
      .catch(e => {
        Alert.alert('Gagal!', 'Error: ' + e);
        console.log(e);
      });
  };

  const logout = () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios
      .post(`http://localhost:8000/api/user/logout`)
      .then(response => {
        navigation.replace('LoginScreen');
      })
      .catch(e => {
        Alert.alert('Gagal!', 'Error: ' + e);
        console.log(e);
      });
  };

  useEffect(() => {
    getIdUser();
    countDataReport();
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.image}>
            <Image source={defaultIcon} style={styles.imgProfile} />
          </View>
          <View style={styles.textImage}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.text1}>Hi {user} !</Text>
              <Text>ID : {idUser}</Text>
            </View>
          </View>
        </View>
        <View style={styles.menu}>
          <View style={styles.menu1}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Tugas', {
                  token: token,
                });
              }}>
              <Image source={tugasIcon} style={styles.iconTugas} />
            </TouchableOpacity>
            {totalData ? (
              <View style={styles.infoTugas}>
                <Text style={styles.infoTugasText}>{totalData}</Text>
              </View>
            ) : null}
          </View>
          <Text style={styles.text2}>Tugas Instalasi</Text>
          <View style={styles.menu2}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LaporanInstalasi', {token: token});
              }}>
              <View style={styles.menu21}>
                <Image source={laporanIcon} style={styles.iconTugas} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <View style={styles.menu22}>
                <Image source={logoutIcon} style={styles.iconTugas} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{width: windowWidth * 0.5}}>
              <Text style={{color: '#000000', alignSelf: 'center', width: 60}}>
                Laporan Instalasi
              </Text>
            </View>
            <TouchableOpacity
              style={{width: windowWidth * 0.5}}
              onPress={logout}>
              <Text style={{color: '#000000', alignSelf: 'center', width: 60}}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D6D6D6',
    flexDirection: 'column',
  },
  header: {
    height: windowHeight * 0.3,
    backgroundColor: '#A13933',
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    marginHorizontal: windowWidth * 0.12,
    marginVertical: (windowHeight * 0.3) / 5,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 50,
  },
  imgProfile: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  textImage: {
    width: 250,
    height: 100,
    marginLeft: -20,
    marginVertical: (windowHeight * 0.16) / 5,
    justifyContent: 'center',
  },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text2: {
    color: '#000000',
    textAlign: 'center',
  },
  menu: {
    height: windowHeight * 0.8,
    marginTop: windowHeight * -0.1,
    backgroundColor: '#ffffff',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  menu1: {
    backgroundColor: '#E3E3E3',
    width: 150,
    height: 150,
    marginTop: 65,
    alignSelf: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconTugas: {
    width: 102,
    height: 110,
  },
  infoTugas: {
    backgroundColor: '#FE0000',
    width: 30,
    height: 30,
    borderRadius: 50,
    position: 'absolute',
    right: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoTugasText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menu2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu21: {
    backgroundColor: '#E3E3E3',
    width: 150,
    height: 150,
    marginTop: 65,
    marginRight: 20,
    alignSelf: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu22: {
    backgroundColor: '#E3E3E3',
    width: 150,
    height: 150,
    marginTop: 65,
    alignSelf: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
