import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export function MiPerfil({ navigation }) {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/image.png')} style={styles.imagen}/>
        
        <Text style={styles.text}>
            Nombre de usuario
        </Text>

        <Image source={require('../assets/imagenPerfil.png')} style={styles.imagen2}/>
        
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 80,
        alignItems: "center",
    },
    botonText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: 'black',
    },
    imagenContainer: {
        width: '100%',
        alignContent: "center",
        backgroundColor: 'blue',
    },
    imagen: {
        width: 130,
        height: 130,
    },
    imagen2: {
        marginVertical: 20,
        width: 360,
        height: 280,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#c53434',
        marginTop: 10,
    },
});