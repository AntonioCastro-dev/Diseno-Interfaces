import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import axios from "axios";

export default function App() {
  const [clima, setClima] = useState('');
  const [provincia, setProvincia] = useState('');

  const apiURL = "https://www.el-tiempo.net/api/json/v2/provincias/";
  const provAnd = {
    "almeria": "04",
    "cadiz": "11",
    "cordoba": "14",
    "granada": "18",
    "huelva": "21",
    "jaen": "23",
    "malaga": "29",
    "sevilla": "41",
  };

  const quitarTildes = (text) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const obtenerClima = async () => {
    const codigoProv = provAnd[quitarTildes(provincia.trim().toLowerCase())];
      if(!codigoProv) {
        Alert.alert('Introduce nombre de una provincia de Andalucía.');
        return;
      }
      try{
   	    const response = await axios.get(`${apiURL}${codigoProv}`);
   	    setClima(response.data);
      }catch (error) {
   	    console.error('Error:', error);
      }
  };


  return (
    <View style={styles.container}>
      <View style={{flex:1, marginTop: 20}}>
      <Text style={styles.titulo}>Aplicación Clima</Text>
      </View>
      <View style={styles.busqueda}>
        <TextInput
            style={styles.input}
            placeholder="Provincia"
            value={provincia}
            onChangeText={setProvincia}
          />
        <TouchableOpacity style={styles.boton} onPress={obtenerClima} >
          <Feather name="search" size={18} color={'white'}/>
        </TouchableOpacity>
      </View>
      {clima && (
        <View style={{flex:5}}>
          <View style={styles.textoClima}>
            <Text style={styles.text}>Clima hoy:</Text>
            <Text style={{fontSize: 17}}>{clima.today.p}</Text>
          </View>
          <View style={styles.textoClima}>
            <Text style={styles.text}>
              Temperatura máxima: {clima.ciudades[0].temperatures.max}°C
            </Text>
          </View>
          <View style={styles.textoClima}>
            <Text style={styles.text}>
            Temperatura mínima: {clima.ciudades[0].temperatures.min}°C
            </Text>
          </View>
        </View>
      )}
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#2c2755',
    alignItems: 'center',
    justifyContent: 'center',
  },
  busqueda: {
    flex: 1,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boton: {
    backgroundColor: '#2b8d7d',
    padding: 10,
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  titulo: {
    fontSize: 38,
    marginTop: 40,
    marginBottom: 20,
    fontWeight: '700',
    color: 'white',
  },
  text: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
  },
  input: {
    height: 40,
    width: 200,
    backgroundColor: '#fff',
    fontSize: 16,
    shadowColor: '#000',
    elevation: 4,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    borderRadius: 15,
  },
  textoClima: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    elevation: 4,
  }
});