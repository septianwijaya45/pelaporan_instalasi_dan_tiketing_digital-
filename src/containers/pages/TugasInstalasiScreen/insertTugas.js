import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {windowHeight, windowWidth} from '../../../utils/constans';
import Back from '../../../components/atoms/Back';
import Home from '../../../components/atoms/Home';
import axios from 'axios';
import Input from '../../../components/atoms/Input';
import DateTimePicker from 'react-native-modal-datetime-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {CheckNumber} from '../../../utils/changeNumber';
import {Picker} from '@react-native-picker/picker';

const TambahInstalasi = ({navigation, route}) => {
  const {id, token, user} = route.params;
  const [technic, setTechnic] = useState([]);
  const [code, setCode] = useState();
  const [jumlahTechnician, setJumlahTechnician] = useState();
  const [technicians_id, setTechnicians_id] = useState();
  const [category_instansi, setCategory] = useState();
  const [date_instalation, setDate] = useState();
  const [picname, setPicname] = useState();
  const [picnumber, setPicnumber] = useState();
  const [alamat, setAlamat] = useState();
  const [isDatePickerVisible1, setDatePickerVisibility1] = useState(false);

  useEffect(() => {
    saveData();
    technician();
  }, []);

  const technician = () => {
    axios.get(`http://localhost:8000/api/technician`).then(response => {
      const data = response.data;
      if (data == '') {
      } else {
        setTechnic(data.data);
      }
    });
  };

  const saveData = () => {
    const data = {
      code: code,
      number_of_technicians: jumlahTechnician,
      category_instansi: category_instansi,
      technician_id: technicians_id,
      date_instalation: date_instalation,
      pic_name: picname,
      pic_number: picnumber,
      alamat: alamat,
    };

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios
      .post(`http://localhost:8000/api/instalasi`, data)
      .then(res => {
        if (res.status == 200) {
          Alert.alert('Sukses!', 'Sukses Menambahkan Data Tugas!');
          navigation.navigate('Tugas', {
            token: token,
          });
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  // ======= DatePicker ======= //
  const showDatePicker1 = () => {
    setDatePickerVisibility1(true);
  };

  const hideDatePicker1 = () => {
    setDatePickerVisibility1(false);
  };

  const handleConfirm1 = date => {
    const year = date.getFullYear();
    const month = CheckNumber(date.getMonth());
    const day = CheckNumber(date.getDate());
    setDate(`${year}-${month}-${day}`);
    hideDatePicker1();
  };
  // ======= DatePicker ======= //
  return (
    <ScrollView>
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
                Tambah Tugas Instansi
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
      </View>
      <View style={{marginHorizontal: 15}}>
        <View>
          <Text style={{color: '#000000'}}>Kode</Text>
          <TextInput
            style={styles.textInput}
            editable
            multiline={true}
            onChangeText={text => setCode(text)}
            value={code}
            placeholder="Ketik Kode"
            placeholderTextColor={'#808080'}
          />
        </View>
        <View>
          <Text style={{color: '#000000'}}>Jumlah Technician</Text>
          <TextInput
            style={styles.textInput}
            editable
            multiline={true}
            onChangeText={text => setJumlahTechnician(text)}
            value={jumlahTechnician}
            placeholder="Ketik Jumlah Technician"
            keyboardType="number-pad"
            placeholderTextColor={'#808080'}
          />
        </View>
        <View>
          <Text style={{color: '#000000'}}>Technician</Text>
          <Picker
            selectedValue={technicians_id}
            style={{
              width: (windowWidth * 91) / 100,
              backgroundColor: '#ffffff',
              marginRight: 10,
            }}
            onValueChange={(itemValue, itemIndex) =>
              setTechnicians_id(itemValue)
            }>
            {technic.map(data => {
              return (
                <Picker.Item
                  label={data.name}
                  value={data.id}
                  key={data.id}
                  style={{color: '#000'}}
                />
              );
            })}
          </Picker>
        </View>
        <View>
          <Text style={{color: '#000000'}}>Kategori</Text>
          <TextInput
            style={styles.textInput}
            editable
            multiline={true}
            onChangeText={text => setCategory(text)}
            value={category_instansi}
            placeholder="Ketik Kategori"
            placeholderTextColor={'#808080'}
          />
        </View>
        <View>
          <Text style={{color: '#000000'}}>Tanggal Instalasi</Text>
          <Input
            placeholder="YYYY-MM-DD"
            type="Date"
            value={date_instalation}
            onTextChange={value => {
              setDate(value);
            }}
            editable={false}
            onPress={showDatePicker1}
            style={{
              borderWidth: 1,
              borderColor: '#000000',
              borderRadius: 5,
              paddingVertical: 12,
              paddingHorizontal: 18,
              fontSize: 14,
              color: '#000000',
              width: windowWidth * 0.91,
              height: 45,
            }}
          />
          <DateTimePickerModal
            isVisible={isDatePickerVisible1}
            mode="date"
            onConfirm={handleConfirm1}
            onCancel={hideDatePicker1}
          />
        </View>
        <View>
          <Text style={{color: '#000000'}}>PIC Name</Text>
          <TextInput
            style={styles.textInput}
            editable
            multiline={true}
            onChangeText={text => setPicname(text)}
            value={picname}
            placeholder="Ketik Nama HP PIC"
            placeholderTextColor={'#808080'}
          />
        </View>
        <View>
          <Text style={{color: '#000000'}}>PIC Nomor HP</Text>
          <TextInput
            style={styles.textInput}
            editable
            multiline={true}
            onChangeText={text => setPicnumber(text)}
            value={picnumber}
            placeholder="Ketik Nomor HP PIC"
            placeholderTextColor={'#808080'}
            keyboardType="number-pad"
          />
        </View>
        <View>
          <Text style={{color: '#000000'}}>Alamat</Text>
          <TextInput
            style={styles.textInput}
            ultiline
            numberOfLines={4}
            editable
            multiline={true}
            onChangeText={text => setAlamat(text)}
            value={alamat}
          />
        </View>
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
    </ScrollView>
  );
};

export default TambahInstalasi;

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
  textInput: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    fontSize: 14,
    color: '#000000',
  },

  draft2: {
    backgroundColor: '#289E53',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    width: windowWidth * 0.93,
    marginTop: 20,
  },
});
