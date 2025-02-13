import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export function Mapa({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={{fontWeight: '500', marginTop: 20, fontSize: 16, color: 'gray', marginHorizontal: 30}}>
                Mapa
        </Text>
        <MapView style={styles.map} initialRegion={{
          latitude: 37.3918209,
          longitude: -5.9883026,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
            <Marker coordinate={{
                latitude: 37.3918209,
                longitude: -5.9883026,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}/>
        </MapView>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 80,
        alignItems: 'center',
      },
      map: {
        width: '100%',
        height: '100%',
      },
});