import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export function PantallaInicio({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/paginaPrincipal.png')} style={styles.imagenPrincipal}/>
      <StatusBar style="auto" />
      <Text style={styles.titulo}>Track your Active Lifestyle</Text>
      <Text style={styles.subTitulo}>Find your way to the perfect body</Text>
      <Image source={require('../assets/slider.png')} style={{marginTop: 30, height: 10, width: 70, resizeMode: 'contain'}}/>
      <TouchableOpacity onPress={() => navigation.navigate('Pantallas')}>
        <Image source={require('../assets/btn_getStarted.png')} style={styles.botonImagen} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    marginTop: 40,
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
  },
  subTitulo: {
    marginTop: 10,
    fontSize: 14,
    color: 'black',
  },
  imagenPrincipal: {
    right: 50,
    width: 700,
    height: 550,
  },
  botonImagen: {
    marginTop:30,
    width: 250,
    height: 60,
    resizeMode: 'contain',
  },
});