//Ejercicio Navegacion Lista
//Antonio Castro Yebenes

import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const productos = [
  { 
    id: '1',
    name: 'Producto 1',
    precio: 11.99,
    image: require('./assets/garrafa-aceite.jpg')
  },
  { 
    id: '2',
    name: 'Producto 2',
    precio: 19.99,
    image: require('./assets/MENU-DURUM.jpg')
  },
  {
    id: '3',
    name: 'Producto 3',
    precio: 29.99,
    image: require('./assets/mono.png')
  },
  {
    id: '4',
    name: 'Producto 4',
    precio: 39.99,
    image: require('./assets/taza-i-love-murcia (1).jpg')
  },
  {
    id: '5',
    name: 'Producto 5',
    precio: 49.99,
    image: require('./assets/adodas.png')
  }
];

function ProductListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.elementosLista}
            onPress={() => navigation.navigate('ProductDetails', { product: item })}
          >
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.textoElemento}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function ProductDetailsScreen({ route }) {
  const { product } = route.params;
  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.productDetailImage} />
      <Text style={styles.textoElemento}>{product.name}</Text>
      <Text style={styles.precioElemento}>Precio: ${product.precio}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'Lista de Productos' }} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ title: 'Detalles del Producto' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#be7fb2',
    justifyContent: 'flex-start',
    padding: 20,
  },
  elementosLista: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textoElemento: {
    fontSize: 18,
  },
  productDetailImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  precioElemento: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});