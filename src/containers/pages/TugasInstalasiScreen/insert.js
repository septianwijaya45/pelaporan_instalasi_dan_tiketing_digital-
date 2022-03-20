import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
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

const FormLaporanInstalasi = ({navigation, props}) => {
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

  const [isDatePickerVisible1, setDatePickerVisibility1] = useState(false);
  const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
  const [isDatePickerVisible3, setDatePickerVisibility3] = useState(false);
  const [isDatePickerVisible4, setDatePickerVisibility4] = useState(false);

  // View Input
  const [jadwal, setJadwal] = useState(true);
  const [informasi, setInformasi] = useState(false);
  const [bukti, setBukti] = useState(false);

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
    const month = date.getMonth();
    const day = date.getDate();
    setTglMulaiInstalasi(`${day}-${month}-${year}`);
    hideDatePicker();
  };
  const handleConfirm2 = date => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    setTglSelesaiInstalasi(`${day}-${month}-${year}`);
    hideDatePicker();
  };
  const handleConfirm3 = date => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    setTglMulaiTraining(`${day}-${month}-${year}`);
    hideDatePicker();
  };
  const handleConfirm4 = date => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    setTglSelesaiTraining(`${day}-${month}-${year}`);
    hideDatePicker();
  };

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
                  <DateTimePickerModal
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
                      setTglSelesaiInstalasi(value);
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
                  <TextInput style={styles.textInput2} />
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
                    <TouchableOpacity style={styles.btnPlus}>
                      <Image source={plusIcon} style={styles.img} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.imgPreview,
                        {marginHorizontal: 5, marginTop: 5},
                      ]}>
                      <Image source={picture} style={styles.img} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.imgPreview,
                        {marginHorizontal: 5, marginTop: 5},
                      ]}>
                      <Image source={picture} style={styles.img} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.imgPreview,
                        {marginHorizontal: 5, marginTop: 5},
                      ]}>
                      <Image source={picture} style={styles.img} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[
                        styles.imgPreview,
                        {marginHorizontal: 5, marginTop: 5},
                      ]}>
                      <Image source={picture} style={styles.img} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{marginTop: 10}}>
                  <Text style={{color: '#000000'}}>
                    Upload Video (Max 50 mb)
                  </Text>
                  <TouchableOpacity style={styles.btnPlusVideo}>
                    <Image source={plusIcon} style={styles.img} />
                  </TouchableOpacity>
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
                      <TouchableOpacity style={styles.btnPlus}>
                        <Image source={plusIcon} style={styles.img} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          styles.imgPreview,
                          {marginHorizontal: 5, marginTop: 5},
                        ]}>
                        <Image source={picture} style={styles.img} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          styles.imgPreview,
                          {marginHorizontal: 5, marginTop: 5},
                        ]}>
                        <Image source={picture} style={styles.img} />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={[
                          styles.imgPreview,
                          {marginHorizontal: 5, marginTop: 5},
                        ]}>
                        <Image source={picture} style={styles.img} />
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
              <Button name="Draft" type="Draft" />
            </View>
            <View style={{width: windowWidth * 0.2, marginHorizontal: 10}}>
              <Button name="Save" type="Save" />
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
});
