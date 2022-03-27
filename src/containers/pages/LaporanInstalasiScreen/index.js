import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {windowHeight, windowWidth} from '../../../utils/constans';
import Back from '../../../components/atoms/Back';
import Home from '../../../components/atoms/Home';
import axios from 'axios';

const LaporanInstalasi = ({navigation, route}) => {
  const {token} = route.params;
  const [data, setData] = useState([]);

  const getData = () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios
      .get(`http://localhost:8000/api/report_instalasi`)
      .then(response => {
        setData(response.data.data);
      })
      .catch(e => {
        Alert.alert('Gagal!', 'Error: ' + e);
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);
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
                Laporan Instansi
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
        {data.map(row => (
          <View style={styles.dataList} key={row.id}>
            <Text style={styles.title}>{row.category_instansi}</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DetailLaporanInstalasi', {
                  id: row.id,
                  title: row.category_instansi,
                  token: token,
                });
              }}>
              <Text style={styles.detail}>Klik Detail</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default LaporanInstalasi;

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
