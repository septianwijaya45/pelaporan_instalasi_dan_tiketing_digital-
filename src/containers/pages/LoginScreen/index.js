import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {bgImage, passIcon, userIcon, logo1Icon} from '../../../asset';
import {warnaAbu, windowHeight, windowWidth} from '../../../utils/constans';
import CheckBox from '@react-native-community/checkbox';
import Button from '../../../components/atoms/Button';

const LoginScreen = ({navigation}) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
            <Button
              name="Login"
              onPress={() => {
                navigation.navigate('Menu');
              }}
              type="Login"
            />
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
  btnLogin: {
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 90,
  },
});
