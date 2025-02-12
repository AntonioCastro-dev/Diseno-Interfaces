import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

export function PantallaStats() {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const navigation = useNavigation();

    const [selectedCategory, setSelectedCategory] = useState('April');
    const categories = ['April', 'May', 'June', 'July', 'August'];

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

    if (!fontsLoaded) return null;

    return (
        <View style={styles.container1}>
            <View style={styles.container2}>
                <Feather name="chevron-left" size={40} onPress={() => navigation.navigate('PantallaInicio')}/>
                <TouchableOpacity><Feather name="menu" size={40} /></TouchableOpacity>
            </View>

            <View style={{flex:1,flexDirection: 'row'}}>
                <Image style={{width: 60, height:60, borderRadius: 40, overflow: 'hidden', marginLeft: 36}} source={require('../assets/womanImage.png')}/>
                <View style={{flex: 1, flexDirection:'column', marginTop: 9, marginLeft: 14}}>
                    <Text style={{fontFamily: 'Poppins-SemiBold'}}>Adline Castelino</Text>
                    <Text style={{fontFamily: 'Poppins-Regular', color: 'gray'}}>United States</Text>
                </View>
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

            <View style={{flex:1, flexDirection: 'row',marginHorizontal: 36, marginTop: 15, justifyContent: 'space-between'}}>
                <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 18, marginTop: 15}}>Statistics</Text>
                <Image style={{resizeMode: 'contain', width: 100}} source={require('../assets/Week.png')} />
            </View>

            <View style={{flex: 1}}>
                <Image style={{resizeMode: 'contain', height:'160%', alignSelf: 'center', marginTop: -40}} source={require('../assets/stats.png')}/>
            </View>

            <View style={{flex: 2, marginTop:80, alignContent: 'center', marginLeft: 20}}>
                <View style={{flex: 1, flexDirection: 'column', marginBottom:  10}}>
                    <View style={{flex:1, flexDirection: 'row',marginHorizontal: 36}}>
                        <Image style={{width: 45, height:45, marginTop:4}} source={require('../assets/training.png')}/>
                        <View style={{flex: 1, flexDirection:'column', marginLeft: 24}}>
                            <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 18}}>Training</Text>
                            <Text style={{fontFamily: 'Poppins-Regular', color: 'gray'}}>4.5 hours</Text>
                        </View>
                    </View>
                </View>

                <View style={{flex: 1, flexDirection: 'column', marginBottom:  10}}>
                    <View style={{flex:1, flexDirection: 'row',marginHorizontal: 36}}>
                        <Image style={{width: 45, height:45, marginTop:4}} source={require('../assets/steps.png')}/>
                        <View style={{flex: 1, flexDirection:'column', marginLeft: 24}}>
                            <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 18}}>Steps</Text>
                            <Text style={{fontFamily: 'Poppins-Regular', color: 'gray'}}>24 km per week</Text>
                        </View>
                    </View>
                </View>

                <View style={{flex: 1, flexDirection: 'column', marginBottom:  10}}>
                    <View style={{flex:1, flexDirection: 'row',marginHorizontal: 36}}>
                        <Image style={{width: 45, height:45, marginTop:4}} source={require('../assets/calories.png')}/>
                        <View style={{flex: 1, flexDirection:'column',  marginLeft: 24}}>
                            <Text style={{fontFamily: 'Poppins-SemiBold', fontSize: 18}}>Calories</Text>
                            <Text style={{fontFamily: 'Poppins-Regular', color: 'gray'}}>6215 calories burned</Text>
                        </View>
                    </View>
                </View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container1: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
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
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 60,
      },
      categoryButton: {
        alignItems: 'center',
      },
      categoryText: {
        fontSize: 16,
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