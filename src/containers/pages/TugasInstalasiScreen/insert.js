import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {windowHeight, windowWidth} from '../../../utils/constans';
import Back from '../../../components/atoms/Back';
import Home from '../../../components/atoms/Home';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Input from '../../../components/atoms/Input';
import CheckBox from '@react-native-community/checkbox';
import {picture, plusIcon} from '../../../asset';
import Button from '../../../components/atoms/Button';
import axios from 'axios';
import {CheckNumber} from '../../../utils/changeNumber';
import DateTimePicker from 'react-native-modal-datetime-picker';
import DocumentPicker from 'react-native-document-picker';

const FormLaporanInstalasi = ({navigation, route}) => {
  const {id, token, user} = route.params;
  // Jadwal
  const [tglMulaiInstalasi, setTglMulaiInstalasi] = useState();
  const [tglSelesaiInstalasi, setTglSelesaiInstalasi] = useState();
  const [tglMulaiTraining, setTglMulaiTraining] = useState();
  const [tglSelesaiTraining, setTglSelesaiTraining] = useState();
  const [tiketing, setTiketing] = useState(false);
  const [caller, setCaller] = useState(false);
  const [digitalSignage, setDigitalSignage] = useState(false);
  const [hardware, setHardware] = useState(false);
  const [jaringan, setJaringan] = useState(false);
  // Informasi
  const [kondisi, setKondisi] = useState('');
  const [problem, setProblem] = useState('');
  const [idAnydesk, setidAnydesk] = useState('');
  // Foto
  const [foto1, setFoto1] = useState();
  const [foto2, setFoto2] = useState();
  const [foto3, setFoto3] = useState();
  const [foto4, setFoto4] = useState();
  const [foto5, setFoto5] = useState();
  const [Video, setVideo] = useState();
  const [fotoBast1, setFotoBast1] = useState();
  const [fotoBast2, setFotoBast2] = useState();
  const [fotoBast3, setFotoBast3] = useState();
  const [uploadBast, setuploadBast] = useState();

  const [isDatePickerVisible1, setDatePickerVisibility1] = useState(false);
  const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
  const [isDatePickerVisible3, setDatePickerVisibility3] = useState(false);
  const [isDatePickerVisible4, setDatePickerVisibility4] = useState(false);

  // View Input
  const [jadwal, setJadwal] = useState(true);
  const [informasi, setInformasi] = useState(false);
  const [bukti, setBukti] = useState(false);

  // ==================== DATETIME PICKER ==================== //

  const showDatePicker1 = () => {
    setDatePickerVisibility1(true);
  };

  const showDatePicker2 = () => {
    setDatePickerVisibility2(true);
  };

  const showDatePicker3 = () => {
    setDatePickerVisibility3(true);
  };

  const showDatePicker4 = () => {
    setDatePickerVisibility4(true);
  };

  const hideDatePicker1 = () => {
    setDatePickerVisibility1(false);
  };
  const hideDatePicker2 = () => {
    setDatePickerVisibility2(false);
  };
  const hideDatePicker3 = () => {
    setDatePickerVisibility3(false);
  };
  const hideDatePicker4 = () => {
    setDatePickerVisibility4(false);
  };

  const handleConfirm1 = date => {
    const year = date.getFullYear();
    const month = CheckNumber(date.getMonth());
    const day = CheckNumber(date.getDate());
    setTglMulaiInstalasi(`${year}-${month}-${day}`);
    hideDatePicker1();
  };
  const handleConfirm2 = date => {
    const year = date.getFullYear();
    const month = CheckNumber(date.getMonth());
    const day = CheckNumber(date.getDate());
    setTglSelesaiInstalasi(`${year}-${month}-${day}`);
    hideDatePicker2();
  };
  const handleConfirm3 = date => {
    const year = date.getFullYear();
    const month = CheckNumber(date.getMonth());
    const day = CheckNumber(date.getDate());
    setTglMulaiTraining(`${year}-${month}-${day}`);
    hideDatePicker3();
  };
  const handleConfirm4 = date => {
    const year = date.getFullYear();
    const month = CheckNumber(date.getMonth());
    const day = CheckNumber(date.getDate());
    setTglSelesaiTraining(`${year}-${month}-${day}`);
    hideDatePicker4();
  };

  // ==================== DATETIME PICKER ==================== //

  // ==================== GET DATA ==================== //
  const checkData = () => {
    axios
      .get(`http://localhost:8000/api/report_instalasi-check_data/${id}`)
      .then(response => {
        const data = response.data[0];
        if (response.data != '') {
          setTglMulaiInstalasi(data.startI_date);
          setTglSelesaiInstalasi(data.completeI_date);
          setTglMulaiTraining(data.startT_date);
          setTglSelesaiTraining(data.completeT_date);
          setTiketing(data.name == 'ticketing' ? true : false);
          setCaller(data.name == 'caller' ? true : false);
          setDigitalSignage(data.name == 'digital signame' ? true : false);
          setHardware(data.name == 'hardware' ? true : false);
          setJaringan(data.name == 'jaringan' ? true : false);
          setKondisi(data.condition);
          setProblem(data.problem);
        }
      });
  };

  useEffect(() => {
    checkData();
    cekFoto();
    cekFotoBast();
    cekVideo();
  }, []);
  // ==================== GET DATA ==================== //

  // ==================== CEK IMAGE DATA ==================== //

  const cekFoto = () => {
    axios
      .get(`http://localhost:8000/api/report_instalasi-foto/${id}`)
      .then(response => {
        const data = response.data;
        console.log(id);
        if (data == '') {
        } else {
          setFoto1(data[0].photos);
          setFoto2(data[1].photos);
          setFoto3(data[2].photos);
          setFoto4(data[3].photos);
          setFoto5(data[4].photos);
        }
      });
  };

  const cekFotoBast = () => {
    axios
      .get(`http://localhost:8000/api/report_instalasi-foto-bast/${id}`)
      .then(response => {
        const data = response.data;
        if (data == '') {
        } else {
          setFotoBast1(data[0].photos);
          setFotoBast2(data[1].photos);
          setFotoBast3(data[2].photos);
        }
      });
  };

  const cekVideo = () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios
      .get(`http://localhost:8000/api/report_instalasi-video/${id}`)
      .then(response => {
        const data = response.data;
        if (data == '') {
        } else {
          setVideo(data.video);
        }
      });
  };

  const draftData = () => {
    const data = {
      tglMulaiInstalasi,
      tglSelesaiInstalasi,
      tglMulaiTraining,
      tglSelesaiTraining,
      tiketing,
      caller,
      digitalSignage,
      hardware,
      jaringan,
      kondisi,
      problem,
      idAnydesk,
    };
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios
      .post(`http://localhost:8000/api/report_instalasi/${id}`, data)
      .then(res => {
        if (res.status == 200) {
          Alert.alert('Sukses!', 'Sukses Menambahkan Draft Data!');
          navigation.navigate('Tugas', {
            token: token,
          });
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  const saveData = () => {
    const data = {
      tglMulaiInstalasi,
      tglSelesaiInstalasi,
      tglMulaiTraining,
      tglSelesaiTraining,
      tiketing,
      caller,
      digitalSignage,
      hardware,
      jaringan,
      kondisi,
      problem,
      idAnydesk,
    };
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios
      .post(`http://localhost:8000/api/report_instalasi-save/${id}`, data)
      .then(res => {
        if (res.status == 200) {
          Alert.alert('Sukses!', 'Sukses Menambahkan Draft Data!');
          navigation.navigate('Tugas', {
            token: token,
          });
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
  // ==================== UPLOAD IMAGE DATA ==================== //

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
                  navigation.navigate('Menu', {user: user});
                }}
              />
            </View>
          </View>
        </View>
        <View style={styles.menu}>
          <View style={{flexDirection: 'row', marginHorizontal: 20}}>
            {jadwal ? (
              <TouchableOpacity
                style={[
                  styles.menu1,
                  {
                    elevation: 3,
                    zIndex: 3,
                  },
                ]}
                onPress={() => {
                  setJadwal(true);
                  setInformasi(false);
                  setBukti(false);
                }}>
                <Text
                  style={{
                    color: '#AF4444',
                    fontWeight: '600',
                  }}>
                  Jadwal
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.menu1]}
                onPress={() => {
                  setJadwal(true);
                  setInformasi(false);
                  setBukti(false);
                }}>
                <Text
                  style={{
                    color: '#A2A2A2',
                    fontWeight: '600',
                  }}>
                  Jadwal
                </Text>
              </TouchableOpacity>
            )}
            {informasi ? (
              <TouchableOpacity
                style={[
                  styles.menu2,
                  {
                    zIndex: 3,
                    elevation: 3,
                  },
                ]}
                onPress={() => {
                  setJadwal(false);
                  setInformasi(true);
                  setBukti(false);
                }}>
                <Text
                  style={{
                    color: '#AF4444',
                    fontWeight: '600',
                  }}>
                  Informasi
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.menu2}
                onPress={() => {
                  setJadwal(false);
                  setInformasi(true);
                  setBukti(false);
                }}>
                <Text
                  style={{
                    color: '#A2A2A2',
                    fontWeight: '600',
                  }}>
                  Informasi
                </Text>
              </TouchableOpacity>
            )}
            {bukti ? (
              <TouchableOpacity
                style={[
                  styles.menu3,
                  {
                    zIndex: 3,
                    elevation: 3,
                  },
                ]}
                onPress={() => {
                  setJadwal(false);
                  setInformasi(false);
                  setBukti(true);
                }}>
                <Text
                  style={{
                    color: '#AF4444',
                    fontWeight: '600',
                  }}>
                  Bukti
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.menu3}
                onPress={() => {
                  setJadwal(false);
                  setInformasi(false);
                  setBukti(true);
                }}>
                <Text
                  style={{
                    color: '#A2A2A2',
                    fontWeight: '600',
                  }}>
                  Bukti
                </Text>
              </TouchableOpacity>
            )}
          </View>
          {/* // hore */}
          {jadwal ? (
            <View style={styles.formMenu}>
              <ScrollView style={styles.formInput}>
                <View>
                  <Text style={{color: '#000000'}}>
                    Tanggal Mulai Instalasi
                  </Text>
                  <Input
                    placeholder="YYYY-MM-DD"
                    type="Date"
                    value={tglMulaiInstalasi}
                    onTextChange={value => {
                      setTglMulaiInstalasi(value);
                    }}
                    editable={false}
                    onPress={showDatePicker1}
                  />
                  <DateTimePicker
                    isVisible={isDatePickerVisible1}
                    mode="date"
                    onConfirm={handleConfirm1}
                    onCancel={hideDatePicker1}
                  />
                </View>
                <View style={{marginTop: 20}}>
                  <Text style={{color: '#000000'}}>
                    Tanggal Selesai Instalasi
                  </Text>
                  <Input
                    placeholder="YYYY-MM-DD"
                    type="Date"
                    value={tglSelesaiInstalasi}
                    onTextChange={value => {
                      setTglSelesaiInstalasi(value);
                    }}
                    editable={false}
                    onPress={showDatePicker2}
                  />
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible2}
                    mode="date"
                    onConfirm={handleConfirm2}
                    onCancel={hideDatePicker2}
                  />
                </View>
                <View style={{marginTop: 20}}>
                  <Text style={{color: '#000000'}}>Tanggal Mulai Training</Text>
                  <Input
                    placeholder="YYYY-MM-DD"
                    type="Date"
                    value={tglMulaiTraining}
                    onTextChange={value => {
                      setTglMulaiTraining(value);
                    }}
                    editable={false}
                    onPress={showDatePicker3}
                  />
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible3}
                    mode="date"
                    onConfirm={handleConfirm3}
                    onCancel={hideDatePicker3}
                  />
                </View>
                <View style={{marginTop: 20}}>
                  <Text style={{color: '#000000'}}>
                    Tanggal Selesai Training
                  </Text>
                  <Input
                    placeholder="YYYY-MM-DD"
                    type="Date"
                    value={tglSelesaiTraining}
                    onTextChange={value => {
                      setTglSelesaiTraining(value);
                    }}
                    ditable={false}
                    onPress={showDatePicker4}
                  />
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible4}
                    mode="date"
                    onConfirm={handleConfirm4}
                    onCancel={hideDatePicker4}
                  />
                </View>
                <View style={{marginTop: 20}}>
                  <Text style={{color: '#000000'}}>Komponen</Text>
                  <View style={{flexDirection: 'row'}}>
                    <View>
                      <View style={styles.checkboxView}>
                        <CheckBox
                          value={tiketing}
                          onValueChange={setTiketing}
                          tintColors={{false: 'black'}}
                        />
                        <Text style={{color: '#000000'}}>Ticketing</Text>
                      </View>
                      <View style={styles.checkboxView}>
                        <CheckBox
                          value={caller}
                          onValueChange={setCaller}
                          tintColors={{false: 'black'}}
                        />
                        <Text style={{color: '#000000'}}>Caller</Text>
                      </View>
                      <View style={styles.checkboxView}>
                        <CheckBox
                          value={digitalSignage}
                          onValueChange={setDigitalSignage}
                          tintColors={{false: 'black'}}
                        />
                        <Text style={{color: '#000000'}}>Digital Signage</Text>
                      </View>
                    </View>
                    <View>
                      <View style={styles.checkboxView}>
                        <CheckBox
                          value={hardware}
                          onValueChange={setHardware}
                          tintColors={{false: 'black'}}
                        />
                        <Text style={{color: '#000000'}}>Hardware</Text>
                      </View>
                      <View style={styles.checkboxView}>
                        <CheckBox
                          value={jaringan}
                          onValueChange={setJaringan}
                          tintColors={{false: 'black'}}
                        />
                        <Text style={{color: '#000000'}}>Jaringan</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
              <Text
                style={{color: '#FF5F5F', marginLeft: 25, marginBottom: 10}}>
                *Semua Item Harus Diisi
              </Text>
            </View>
          ) : null}
          {informasi ? (
            <View style={styles.formMenu}>
              <ScrollView style={styles.formInput}>
                <View>
                  <Text style={{color: '#000000'}}>Kondisi Sistem Antrian</Text>
                  <TextInput
                    style={styles.textInput}
                    ultiline
                    numberOfLines={4}
                    editable
                    multiline={true}
                    onChangeText={text => setKondisi(text)}
                    value={kondisi}
                  />
                </View>
                <View style={{marginTop: 10}}>
                  <Text style={{color: '#000000'}}>Problem Instalasi</Text>
                  <TextInput
                    style={styles.textInput}
                    ultiline
                    numberOfLines={4}
                    editable
                    multiline={true}
                    onChangeText={text => setProblem(text)}
                    value={problem}
                  />
                </View>
                <View style={{marginTop: 10}}>
                  <Text style={{color: '#000000'}}>ID ANYDESK</Text>
                  <TextInput
                    style={styles.textInput2}
                    value={idAnydesk}
                    onChangeText={text => setidAnydesk(text)}
                  />
                </View>
              </ScrollView>
              <Text
                style={{color: '#FF5F5F', marginLeft: 25, marginBottom: 10}}>
                *Semua Item Harus Diisi
              </Text>
            </View>
          ) : null}
          {bukti ? (
            <View style={styles.formMenuB}>
              <ScrollView style={styles.formInput}>
                <View>
                  <Text style={{color: '#000000'}}>
                    Upload Foto (Min 5 Item)
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      width: '100%',
                      height: windowHeight * 0.18,
                    }}>
                    <TouchableOpacity
                      style={styles.btnPlus}
                      onPress={() => {
                        navigation.navigate('UploadImage', {
                          id: id,
                          token: token,
                        });
                      }}>
                      <Image source={plusIcon} style={styles.img} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.imgPreview,
                        {marginHorizontal: 5, marginTop: 5},
                      ]}>
                      <Image
                        source={
                          foto1
                            ? {uri: `http://localhost:8000/uploads/${foto1}`}
                            : picture
                        }
                        style={styles.img}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.imgPreview,
                        {marginHorizontal: 5, marginTop: 5},
                      ]}>
                      <Image
                        source={
                          foto2
                            ? {uri: `http://localhost:8000/uploads/${foto2}`}
                            : picture
                        }
                        style={styles.img}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.imgPreview,
                        {marginHorizontal: 5, marginTop: 5},
                      ]}>
                      <Image
                        source={
                          foto3
                            ? {uri: `http://localhost:8000/uploads/${foto3}`}
                            : picture
                        }
                        style={styles.img}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.imgPreview,
                        {marginHorizontal: 5, marginTop: 5},
                      ]}>
                      <Image
                        source={
                          foto4
                            ? {uri: `http://localhost:8000/uploads/${foto4}`}
                            : picture
                        }
                        style={styles.img}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.imgPreview,
                        {marginHorizontal: 5, marginTop: 5},
                      ]}>
                      <Image
                        source={
                          foto5
                            ? {uri: `http://localhost:8000/uploads/${foto5}`}
                            : picture
                        }
                        style={styles.img}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{marginTop: 10}}>
                  <Text style={{color: '#000000'}}>
                    Upload Video (Max 50 mb)
                  </Text>
                  {Video ? (
                    <Text>http://localhost:8000/uploads/{Video}</Text>
                  ) : (
                    <TouchableOpacity
                      style={styles.btnPlusVideo}
                      onPress={() => {
                        navigation.navigate('UploadVideo', {
                          id: id,
                          token: token,
                        });
                      }}>
                      <Image source={plusIcon} style={styles.img} />
                    </TouchableOpacity>
                  )}
                </View>
                <View style={{marginTop: 10}}>
                  <Text style={{color: '#000000'}}>
                    Upload File BAST (jpg/jpeg/png)
                  </Text>
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        width: '100%',
                        height: windowHeight * 0.18,
                      }}>
                      <TouchableOpacity
                        style={styles.btnPlus}
                        onPress={() => {
                          navigation.navigate('UploadImageBast', {
                            id: id,
                            token: token,
                          });
                        }}>
                        <Image source={plusIcon} style={styles.img} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          styles.imgPreview,
                          {marginHorizontal: 5, marginTop: 5},
                        ]}>
                        <Image
                          source={
                            fotoBast1
                              ? {
                                  uri: `http://localhost:8000/uploads/${fotoBast1}`,
                                }
                              : picture
                          }
                          style={styles.img}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          styles.imgPreview,
                          {marginHorizontal: 5, marginTop: 5},
                        ]}>
                        <Image
                          source={
                            fotoBast1
                              ? {
                                  uri: `http://localhost:8000/uploads/${fotoBast1}`,
                                }
                              : picture
                          }
                          style={styles.img}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          styles.imgPreview,
                          {marginHorizontal: 5, marginTop: 5},
                        ]}>
                        <Image
                          source={
                            fotoBast1
                              ? {
                                  uri: `http://localhost:8000/uploads/${fotoBast1}`,
                                }
                              : picture
                          }
                          style={styles.img}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </ScrollView>
              <Text
                style={{color: '#FF5F5F', marginLeft: 25, marginBottom: 10}}>
                *Semua Item Harus Diisi
              </Text>
            </View>
          ) : null}
        </View>
        {bukti ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginHorizontal: 10,
              marginVertical: 20,
            }}>
            <View style={{width: windowWidth * 0.2, marginHorizontal: 10}}>
              <TouchableOpacity style={styles.draft} onPress={draftData}>
                <Text
                  style={{
                    color: '#000000',
                    alignSelf: 'center',
                  }}>
                  Draft
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{width: windowWidth * 0.2, marginHorizontal: 10}}>
              <TouchableOpacity style={styles.draft2} onPress={saveData}>
                <Text
                  style={{
                    color: '#000000',
                    alignSelf: 'center',
                  }}>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default FormLaporanInstalasi;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#BCBCBC',
    height: windowHeight * 0.2,
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
  menu: {
    marginTop: -windowHeight / 25,
  },
  menu1: {
    backgroundColor: '#ffffff',
    width: windowHeight / 7,
    height: windowHeight / 13,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowColor: '#000000',
  },
  menu2: {
    backgroundColor: '#ffffff',
    width: windowHeight / 7,
    height: windowHeight / 13,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowColor: '#000000',
  },
  menu3: {
    backgroundColor: '#ffffff',
    width: windowHeight / 7,
    height: windowHeight / 13,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowColor: '#000000',
  },
  formMenu: {
    width: windowWidth,
    height: windowHeight * 0.7,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    marginTop: -20,
  },
  formInput: {
    marginHorizontal: 30,
    marginTop: 30,
  },
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    fontSize: 14,
    color: '#000000',
    width: windowWidth * 0.8,
    height: 150,
  },
  textInput2: {
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
  formMenuB: {
    width: windowWidth,
    height: windowHeight * 0.6,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    marginTop: -20,
  },
  btnPlus: {
    borderWidth: 1,
    borderColor: '#A4A4A4',
    borderStyle: 'dotted',
    width: 60,
    height: 60,
    justifyContent: 'center',
    marginHorizontal: 5,
    marginTop: 5,
  },
  btnPlusVideo: {
    borderWidth: 1,
    borderColor: '#A4A4A4',
    borderStyle: 'dotted',
    width: windowWidth * 0.8,
    height: 60,
    justifyContent: 'center',
    marginHorizontal: 5,
    marginTop: 5,
  },
  img: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
    marginVertical: 10,
    alignSelf: 'center',
  },
  imgPreview: {
    borderWidth: 1,
    borderColor: '#A4A4A4',
    borderStyle: 'dotted',
    width: 60,
    height: 60,
    justifyContent: 'center',
  },
  draft: {
    backgroundColor: '#FAC800',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    width: windowWidth * 0.2,
  },
  draft2: {
    backgroundColor: '#289E53',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    width: windowWidth * 0.2,
  },
});
