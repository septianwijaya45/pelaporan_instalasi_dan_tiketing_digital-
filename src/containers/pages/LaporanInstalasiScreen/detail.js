import {StyleSheet, Text, View, ScrollView, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {windowHeight, windowWidth} from '../../../utils/constans';
import Back from '../../../components/atoms/Back';
import Home from '../../../components/atoms/Home';
import axios from 'axios';

const DetailLaporans = ({navigation, route}) => {
  const {id, title, token, user} = route.params;
  const [startIns, setStartIns] = useState();
  const [completeIns, setCompleteIns] = useState();
  const [startTra, setStartTra] = useState();
  const [completeTra, setCompleteTra] = useState();
  const [conditions, setConditions] = useState([]);
  const [components, setComponents] = useState([]);
  const [condition, setCondition] = useState();
  const [problem, setProblem] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios
      .get(`http://localhost:8000/api/report_instalasi/${id}`)
      .then(response => {
        if (!response.data[0]) {
          Alert.alert('Gagal!', 'Data Tidak Ditemukan!');
        } else {
          setStartIns(response.data.data[0].start_installation);
          setCompleteIns(response.data.data[0].complete_installation);
          setStartTra(response.data.data[0].start_training);
          setCompleteTra(response.data.data[0].complete_training);
          setCondition(response.data.data[0].condition);
          setComponents(response.data.data[0].components);
          setProblem(response.data.data[0].problem);
          setStatus(response.data.data[0].status);
        }
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
                navigation.navigate('Menu', {user: user});
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
                <Text style={styles.textValue}>
                  {startIns ? (
                    startIns
                  ) : (
                    <Text style={{color: '#d0312d'}}>Belum Terjadwal</Text>
                  )}
                </Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>
                  Tanggal Selesai Instalasi
                </Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>
                  {completeIns ? (
                    completeIns
                  ) : (
                    <Text style={{color: '#d0312d'}}>Belum Terjadwal</Text>
                  )}
                </Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Tanggal Mulai Training</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>
                  {startTra ? (
                    startTra
                  ) : (
                    <Text style={{color: '#d0312d'}}>Belum Terjadwal</Text>
                  )}
                </Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>
                  Tanggal Selesai Training
                </Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>
                  {completeTra ? (
                    completeTra
                  ) : (
                    <Text style={{color: '#d0312d'}}>Belum Terjadwal</Text>
                  )}
                </Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Komponen Sistem</Text>
              </View>
              <View style={styles.rowValue}>
                {components ? (
                  components > 1 ? (
                    components.map(row => {
                      <View>
                        <Text>- {row}</Text>;
                      </View>;
                    })
                  ) : (
                    <Text>- {components}</Text>
                  )
                ) : (
                  <View>
                    <Text style={{color: '#d0312d'}}>Tidak Ada Data</Text>
                  </View>
                )}
              </View>
            </View>
            {/* <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Kondisi Sistem</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>- {condition}</Text>
              </View>
            </View> */}
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Kondisi Sistem</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>
                  {condition ? (
                    condition
                  ) : (
                    <Text style={{color: '#d0312d'}}>Tidak Ada Data</Text>
                  )}
                </Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Problem Instalasi</Text>
              </View>
              <View style={styles.rowValue}>
                <Text style={styles.textValue}>
                  {problem ? (
                    problem
                  ) : (
                    <Text style={{color: '#3A5311'}}>Tidak Ada</Text>
                  )}
                </Text>
              </View>
            </View>
            <View style={styles.rowSubtitle}>
              <View style={{width: windowWidth * 0.4}}>
                <Text style={styles.textSubtitle}>Status</Text>
              </View>
              <View style={styles.rowValue}>
                {process == 1 ? (
                  <Text style={styles.textValue}>Diproses</Text>
                ) : (
                  <Text style={styles.textValue}>Selesai</Text>
                )}
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
