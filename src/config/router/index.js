import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../containers/pages/LoginScreen';
import MenuScreen from '../../containers/pages/MenuScreen';
import TugasInstalasi from '../../containers/pages/TugasInstalasiScreen';
import DetailTugas from '../../containers/pages/TugasInstalasiScreen/detail';

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
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
