import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import { Login } from "./screens/Login";
import { MiPerfil } from "./screens/MiPerfil";
import { Registro1 } from "./screens/Registro1";
import { Registro2 } from "./screens/Registro2";
import { Mapa } from "./screens/Mapa";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Pantallas() {
  return (
    <Tab.Navigator
      initialRouteName="MiPerfil"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          if (route.name === 'MiPerfil') {
            return (
              <View style={focused ? styles.iconContainerFocused : styles.iconContainer}>
                <Feather name="home" size={size} color={focused ? 'white' : '#c53434'} />
              </View>
            );
          } else if (route.name === 'Mapa') {
            return (
              <View style={focused ? styles.iconContainerFocused : styles.iconContainer}>
                <Feather name="map" size={size} color={focused ? 'white' : '#c53434'} />
              </View>
            );
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          height: 80,
          elevation: 0,
          borderTopWidth: 0,
          paddingBottom: 10,
        },
      })}
    >
      <Tab.Screen name="MiPerfil" component={MiPerfil} />
      <Tab.Screen name="Mapa" component={Mapa} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login', headerShown: false }}
        />
        <Stack.Screen
          name="Pantallas"
          component={Pantallas}
          options={{ title: 'Pantallas', headerShown: false }}
        />
        <Stack.Screen
          name="Registro1"
          component={Registro1}
          options={{ title: 'Crear Cuenta' }}
        />
        <Stack.Screen
          name="Registro2"
          component={Registro2}
          options={{ title: 'Crear Cuenta' }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  iconContainerFocused: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c53434',
    width: 55,
    height: 55,
    borderRadius: 30,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
