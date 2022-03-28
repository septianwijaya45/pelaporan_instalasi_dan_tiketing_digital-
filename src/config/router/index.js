import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../containers/pages/LoginScreen';
import MenuScreen from '../../containers/pages/MenuScreen';
import TugasInstalasi from '../../containers/pages/TugasInstalasiScreen';
import DetailTugas from '../../containers/pages/TugasInstalasiScreen/detail';
import FormLaporanInstalasi from '../../containers/pages/TugasInstalasiScreen/insert';
import LaporanInstalasi from '../../containers/pages/LaporanInstalasiScreen';
import DetailLaporans from '../../containers/pages/LaporanInstalasiScreen/detail';
import uploadImage from '../../containers/pages/TugasInstalasiScreen/uploadImage';
import UploadImage from '../../containers/pages/TugasInstalasiScreen/uploadImage';
import UploadImageBast from '../../containers/pages/TugasInstalasiScreen/uploadImageBast';
import UploadVideo from '../../containers/pages/TugasInstalasiScreen/uploadVideo';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}></Stack.Screen>
      <Stack.Screen
        name="Menu"
        component={MenuScreen}
        options={{
          headerShown: false,
        }}></Stack.Screen>
      <Stack.Screen
        name="Tugas"
        component={TugasInstalasi}
        options={{
          headerShown: false,
        }}></Stack.Screen>
      <Stack.Screen
        name="TugasDetail"
        component={DetailTugas}
        options={{
          headerShown: false,
        }}></Stack.Screen>
      <Stack.Screen
        name="FormLaporanInstalasi"
        component={FormLaporanInstalasi}
        options={{
          headerShown: false,
        }}></Stack.Screen>
      <Stack.Screen
        name="LaporanInstalasi"
        component={LaporanInstalasi}
        options={{
          headerShown: false,
        }}></Stack.Screen>
      <Stack.Screen
        name="DetailLaporanInstalasi"
        component={DetailLaporans}
        options={{
          headerShown: false,
        }}></Stack.Screen>
      <Stack.Screen
        name="UploadImage"
        component={UploadImage}
        options={{
          headerShown: false,
        }}></Stack.Screen>
      <Stack.Screen
        name="UploadImageBast"
        component={UploadImageBast}
        options={{
          headerShown: false,
        }}></Stack.Screen>
      <Stack.Screen
        name="UploadVideo"
        component={UploadVideo}
        options={{
          headerShown: false,
        }}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
