import { StyleSheet, Text, View, Image, Pressable, TextInput, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email inválido')
        .required('El email es obligatorio'),
    pin: Yup.string()
        .length(6, 'El PIN debe tener 6 dígitos')
        .required('El PIN es obligatorio'),
});

export function Login({ navigation }) {
    const handleLogin = async (values) => {
        try {
            const storedEmail = await AsyncStorage.getItem('userEmail');
            const storedPin = await AsyncStorage.getItem('userPin');

            if (values.email === storedEmail && values.pin === storedPin) {
                navigation.replace('Pantallas');
            } else {
                Alert.alert('Error', 'Correo o PIN incorrectos');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            Alert.alert('Error', 'No se pudo validar el inicio de sesión');
        }
    };

    return (
        <Formik
            initialValues={{ email: '', pin: '' }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
        >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
                <View style={styles.container}>
                    <Image source={require('../assets/logoSevici.png')} style={styles.imagen} />
                    <View>
                        <TextInput
                            placeholder={'Correo electrónico'}
                            style={styles.textInput1}
                            onChangeText={handleChange('email')}
                            value={values.email}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        {touched.email && errors.email && (
                            <Text style={styles.errorText}>{errors.email}</Text>
                        )}

                        <TextInput
                            placeholder={'Código PIN (6 dígitos)'}
                            style={styles.textInput2}
                            onChangeText={handleChange('pin')}
                            value={values.pin}
                            keyboardType="numeric"
                            secureTextEntry
                        />
                        {touched.pin && errors.pin && (
                            <Text style={styles.errorText}>{errors.pin}</Text>
                        )}
                    </View>
                    <View style={styles.botones}>
                        <Pressable style={styles.botonInicio} onPress={handleSubmit}>
                            <Text style={styles.botonText1}>INICIAR SESIÓN</Text>
                        </Pressable>
                        <Pressable
                            style={styles.botonRegistro}
                            onPress={() => navigation.navigate('Registro1')}
                        >
                            <Text style={styles.botonText2}>CREAR MI CUENTA</Text>
                        </Pressable>
                    </View>
                </View>
            )}
        </Formik>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 80,
        alignItems: 'center',
    },
    botones: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        width: '100%',
    },
    botonInicio: {
        marginTop: 20,
        backgroundColor: '#c53434',
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '80%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botonRegistro: {
        marginTop: 20,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 2,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '80%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagen: {
        width: 230,
        height: 160,
    },
    botonText1: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        marginHorizontal: 20,
    },
    botonText2: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginHorizontal: 20,
    },
    textInput1: {
        marginTop: 40,
        borderWidth: 1,
        borderColor: '#c53434',
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
        width: 300,
    },
    textInput2: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#c53434',
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
        width: 300,
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        marginTop: 5,
        alignSelf: 'flex-start',
        marginLeft: 40,
    },
});
