import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const validationSchema = Yup.object().shape({
    pin: Yup.string()
        .length(6, 'El PIN debe tener 6 dígitos')
        .required('El PIN es obligatorio')
});

export function Registro2({ navigation }) {
    const guardarPinEnStorage = async (pin) => {
        try {
            await AsyncStorage.setItem('userPin', pin);
            console.log('PIN guardado:', pin);
        } catch (error) {
            console.error('Error al guardar el PIN:', error);
        }
    };

    return (
        <Formik
            initialValues={{ pin: '' }}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
                await guardarPinEnStorage(values.pin);
                navigation.navigate('Login');
            }}
        >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
                <View style={styles.container}>
                    <View style={styles.imagenContainer}>
                        <Image source={require('../assets/registro.png')} style={styles.imagen} />
                    </View>
                    <Text style={{ fontWeight: 'bold', marginTop: 20, fontSize: 20 }}>
                        ELIGE TU PIN
                    </Text>
                    <View>
                        <TextInput
                            placeholder={'Elige tu pin (6 dígitos)'}
                            style={styles.textInput1}
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
                            <Text style={styles.botonText1}>CONFIRMAR</Text>
                        </Pressable>
                        <Text
                            style={{
                                fontWeight: '500',
                                marginTop: 20,
                                fontSize: 16,
                                color: 'gray',
                                marginHorizontal: 30,
                            }}
                        >
                            Tu PIN debe tener 6 dígitos. No uses tu fecha de nacimiento.
                        </Text>
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
    imagenContainer: {
        width: '100%',
        marginTop: 0,
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
    imagen: {
        marginTop: 0,
        width: '100%',
        height: 200,
    },
    botonText1: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
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
    errorText: {
        color: 'red',
        fontSize: 14,
        marginTop: 5,
        alignSelf: 'flex-start',
        marginLeft: 40,
    },
});
