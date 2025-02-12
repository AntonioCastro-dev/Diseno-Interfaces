import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import { PantallaInicio } from './screens/Inicio';
import { PantallaHome } from './screens/Home';
import { PantallaStats } from './screens/Stats';
import { PantallaCalendar } from './screens/Calendar';
import { StyleSheet, View } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Pantallas() {
  return (
    <View style={styles.container}>
      <Tab.Navigator initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            if (route.name === 'Home') {
              return (
                <View style={focused ? styles.iconContainerFocused : styles.iconContainer}>
                  <Feather name="home" size={size} color={focused ? 'white' : 'black'} />
                </View>
              );
            } else if (route.name === 'Stats') {
              return (
                <View style={focused ? styles.iconContainerFocused : styles.iconContainer}>
                  <Feather name="activity" size={size} color={focused ? 'white' : 'black'} />
                </View>
              );
            } else if (route.name === 'Calendar') {
              return (
                <View style={focused ? styles.iconContainerFocused : styles.iconContainer}>
                  <Feather name="calendar" size={size} color={focused ? 'white' : 'black'} />
                </View>
              );
            }
          },
          tabBarShowLabel: false,
          tabBarStyle: { 
            backgroundColor: 'white', 
            height: 80,
            elevation: 0, // Eliminar la sombra en Android
            borderTopWidth: 0, // Elimina borde superior
            paddingBottom: 10, // Añadir espacio para el padding inferior del tab bar
          },
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={PantallaHome} 
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Stats" 
          component={PantallaStats} 
          options={{ headerShown: false }}
        />
        <Tab.Screen 
          name="Calendar" 
          component={PantallaCalendar} 
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer style={{backgroundColor: 'white'}}>
      <Stack.Navigator initialRouteName="PantallaInicio">
        <Stack.Screen 
          name="PantallaInicio"
          component={PantallaInicio}
          options={{title: 'Pantalla Inicio', headerShown: false }}
        />
        <Stack.Screen
          name="Pantallas"
          component={Pantallas}
          options={{title: 'Pantallas', headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Asegura que el tab bar se mantenga en la parte inferior
  },
  iconContainerFocused: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: 55,
    height: 55,
    borderRadius: 30,
  },
});