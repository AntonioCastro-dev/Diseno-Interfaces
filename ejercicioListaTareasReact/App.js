//Ejercicio Lista de Tareas
//Antonio Castro Yebenes

import React, { useState } from 'react';
import {View, Text, FlatList, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function App() {

  const [texto, setTexto] = useState('');   //texto de la nueva tarea
  const [lista, setLista] = useState([]);   //lista de tarea


  const agregaTarea = () => {
    if(texto!=""){
      setLista([{ id: Date.now().toString(), value: texto },...lista])
      setTexto('');
    }
  };

  const eliminarTarea = (id) => {
    setLista(lista.filter((item) => item.id !== id));
  };

  const marcarTarea = (id) => {
    setLista(
      lista.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <TextInput
          style={styles.entrada}
          placeholder="    Escribe una tarea"
          value={texto}
          onChangeText={setTexto}
        />
        <TouchableOpacity style={styles.boton} onPress={agregaTarea}>
          <Text style={{color: '#fff', fontWeight:'bold'}}>Agregar Tarea</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.elementosLista}>
            <TouchableOpacity onPress={() => marcarTarea(item.id)}>
              <Text style={[styles.checkbox]}>
                {item.completed ? '✅' : '⬛'}
              </Text>
            </TouchableOpacity>
            <Text style={[styles.textoElemento, item.completed && styles.tachado]}>
              {item.value}
            </Text>
            <TouchableOpacity onPress={() => eliminarTarea(item.id)}>
              <Text style={styles.papelera}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#be7fb2',
    justifyContent: 'flex-start',
    padding: 20,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 50,
  },
  entrada: {
    flex:1,
    borderRadius:25,
    //borderWidth: 1,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  boton: {
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: '#471f50',
    padding: 15,
  },
  elementosLista: {
    flex:1,
    flexDirection: 'row',
    backgroundColor:'#eed6e9', 
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10, 
    padding:10, 
    borderRadius:5,
    width: '100%',
  },
  checkbox: {
    color: 'grey',
    fontSize: 20,
    marginRight: 10,
  },
  textoElemento: {
    flex: 1,
    fontSize: 16,
  },
  tachado: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  papelera: {
    fontSize: 20,
    marginLeft: 10,
  },
});
