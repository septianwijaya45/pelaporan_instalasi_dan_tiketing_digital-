import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {bgImage, passIcon, userIcon, logo1Icon} from '../../../asset';
import {warnaAbu, windowHeight, windowWidth} from '../../../utils/constans';
import CheckBox from '@react-native-community/checkbox';
import Button from '../../../components/atoms/Button';
import axios from 'axios';

const LoginScreen = ({navigation}) => {
  const [errorMessage, setError] = useState('');
  const [successMessage, setSuccess] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = () => {
    if (!username && !password) {
      Alert.alert('Gagal Login!', 'Username dan Password Harus Diisi!');
      setError('Username dan Password Harus Diisi!');
    } else if (!username) {
      Alert.alert('Gagal Login!', 'Username Harus Diisi!');
      setError('Username Harus Diisi!');
    } else if (!password) {
      Alert.alert('Gagal Login!', 'Password Harus Diisi!');
      setError('Password Harus Diisi!');
    } else {
      const data = {
        email: username,
        password: password,
      };
      axios
        .post(`http://localhost:8000/api/user/signin`, data)
        .then(response => {
          navigation.replace('Menu', {
            user: response.data.user.role,
            name: response.data.user.name,
            token: response.data.user.token,
          });
        })
        .catch(e => {
          Alert.alert('Gagal Login!', 'Password Salah!');
          setError('Password Salah!');
        });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.bg}>
          <View>
            <Image source={bgImage} style={styles.bgImg} />
          </View>
          <View style={styles.viewLogo}>
            <Image source={logo1Icon} style={styles.logoIcon} />
          </View>
          <Text style={styles.judulLogo}>
            Pelaporan instalasi & Ticketing Digital
          </Text>
        </View>
        <View style={styles.formInput}>
          <View style={styles.username}>
            <Image source={userIcon} style={styles.iconUser} />
            <TextInput
              style={styles.inputUsername}
              placeholder="Username"
              placeholderTextColor={warnaAbu}
              value={username}
              onChangeText={val => setUsername(val)}
            />
          </View>
          <View style={styles.username}>
            <Image source={passIcon} style={styles.iconUser} />
            <TextInput
              style={styles.inputUsername}
              placeholder="Password"
              placeholderTextColor={warnaAbu}
              value={password}
              onChangeText={val => setPassword(val)}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.checkboxView}>
            <CheckBox
              value={rememberMe}
              onValueChange={setRememberMe}
              style={styles.checkbox}
            />
            <Text style={styles.textRemember}>Remember Me</Text>
          </View>
          <View style={styles.btnLogin}>
            {!!errorMessage && (
              <Text
                style={{color: '#FF0000', marginTop: -20, marginBottom: 10}}>
                {errorMessage}
              </Text>
            )}
            {!!successMessage && (
              <Text style={{color: '#27ae60'}}>{successMessage}</Text>
            )}
            <Button name="Login" onPress={submitLogin} type="Login" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D6D6D6',
    flex: 1,
  },
  bg: {
    height: 400,
    width: windowWidth,
  },
  bgImg: {
    height: 300,
    width: 400,
  },
  viewLogo: {
    marginTop: -140,
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  logoIcon: {
    width: 100,
    height: 100,
  },
  judulLogo: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#000000',
    marginTop: 15,
  },
  iconUser: {
    padding: 10,
    margin: 5,
    marginLeft: 15,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  formInput: {
    marginTop: -80,
  },
  username: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#9A0B0A',
    borderRadius: 35,
    height: 40,
    width: windowWidth * 0.6,
    margin: 10,
  },
  checkboxView: {
    flexDirection: 'row',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textRemember: {
    color: '#000000',
    textAlignVertical: 'center',
  },
  inputUsername: {
    color: '#000000',
    height: 40,
    width: windowWidth * 0.4,
  },
  btnLogin: {
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 90,
  },
});
