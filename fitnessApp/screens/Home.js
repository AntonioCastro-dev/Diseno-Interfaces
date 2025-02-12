import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import * as Font from 'expo-font';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export function PantallaHome() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const navigation = useNavigation();

    const [selectedCategory, setSelectedCategory] = useState('Popular');
    const categories = ['Popular', 'Moderate', 'Intensive'];

    useEffect(() => {
        async function loadFonts() {
            await Font.loadAsync({
                'Poppins-Regular': Poppins_400Regular,
                'Poppins-SemiBold': Poppins_600SemiBold,
            });
            setFontsLoaded(true);
        }
        loadFonts();
    }, []);

    if (!fontsLoaded) return null; // Evita renderizar hasta que las fuentes estén cargadas

    return (
        <View style={styles.container1}>
            <View style={styles.container2}>
                <Feather name="chevron-left" size={40} onPress={() => navigation.navigate('PantallaInicio')}/>
                <TouchableOpacity><Feather name="menu" size={40} /></TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textLight}>Find your</Text>
                <Text style={styles.textBold}>activity</Text>
            </View>
            <View style={styles.categoryContainer}>
        {categories.map((category) => (
            <TouchableOpacity key={category} onPress={() => setSelectedCategory(category)} style={styles.categoryButton}>
                <Text style={[ styles.categoryText, selectedCategory === category && styles.selectedCategoryText]}>
                {category}
                </Text>
                {selectedCategory === category && (
                <View style={styles.underline} />
                )}
            </TouchableOpacity>
            ))}
        </View>
            <View style={styles.container3}>
                <TouchableOpacity onPress={() => Linking.openURL('https://es.wikipedia.org/wiki/Natación')}>
                    <ImageBackground source={require('../assets/swimming.png')} style={styles.sportsContainer} imageStyle={styles.imageStyle}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%',marginTop: 145}}>
                            <Text style={{fontSize: 16, fontFamily: 'Poppins-SemiBold', marginLeft: 10}}>Swimming</Text>
                            <Text style={{fontSize: 12, fontFamily: 'Poppins-Regular', color: 'gray', marginRight: 10}}>🔥 430Kcal/hr</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('https://es.wikipedia.org/wiki/Tenis')}>
                    <ImageBackground source={require('../assets/tennis.png')} style={styles.sportsContainer} imageStyle={styles.imageStyle}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%',marginTop: 145}}>
                            <Text style={{fontSize: 16, fontFamily: 'Poppins-SemiBold', marginLeft: 10}}>Playing Tenis</Text>
                            <Text style={{fontSize: 12, fontFamily: 'Poppins-Regular', color: 'gray', marginRight: 10}}>🔥 430Kcal/hr</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 20,
    },
    textContainer: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: 40,
    },
    container3: {
        flex: 4,
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
    },
    sportsContainer: {
        backgroundColor: '#fff',
        height: 180,
        width: '90%',
        borderRadius: 20,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    sportsContainerInfo: {
        backgroundColor: '#fff',
        height: 10,
        width: '101%',
        padding: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
    },
    imageStyle: {
        width: '100%',
        height: '80%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        resizeMode: 'cover',
    },
    textLight: {
        fontSize: 45,
        fontFamily: 'Poppins-Regular',
    },
    textBold: {
        fontSize: 45,
        fontFamily: 'Poppins-SemiBold',
    },
    categoryContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 60,
      marginBottom: 30,
      marginLeft: 35,
      marginRight: 75,
    },
    categoryButton: {
      alignItems: 'center',
    },
    categoryText: {
      fontSize: 20,
      color: 'gray',
    },
    selectedCategoryText: {
      color: 'black',
    },
    underline: {
      marginTop: 4,
      height: 2,
      width: '80%',
      backgroundColor: 'black',
    },
});