import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

const registroValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email inválido')
        .required('El email es obligatorio'),
});

export function Registro1({ navigation }) {
    const guardarEmail = async (email) => {
        try {
            await AsyncStorage.setItem('userEmail', email);
            console.log('Email guardado:', email);
        } catch (error) {
            console.error('Error al guardar el email:', error);
        }
    };

    return (
        <Formik
            initialValues={{ email: '' }}
            validationSchema={registroValidationSchema}
            onSubmit={(values) => {
                guardarEmail(values.email);
                navigation.navigate('Registro2');
            }}
        >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
                <View style={styles.container}>
                    <View style={styles.imagenContainer}>
                        <Image source={require('../assets/registro.png')} style={styles.imagen} />
                    </View>
                    <Text style={{ fontWeight: 'bold', marginTop: 20, fontSize: 20 }}>
                        ¡VAMOS A CONOCERNOS!
                    </Text>
                    <View>
                        <TextInput
                            placeholder={'¿Cuál es tu correo electrónico?'}
                            style={styles.textInput1}
                            onChangeText={handleChange('email')}
                            value={values.email}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        {touched.email && errors.email && (
                            <Text style={styles.errorText}>{errors.email}</Text>
                        )}
                    </View>
                    <View style={styles.botones}>
                        <Pressable style={styles.botonInicio} onPress={handleSubmit}>
                            <Text style={styles.botonText1}>SIGUIENTE</Text>
                        </Pressable>
                        <Text style={{ fontWeight: '500', marginTop: 20, fontSize: 16, color: 'gray', marginHorizontal: 30 }}>
                            Haz clic en el siguiente enlace para validar tu cuenta y acceder al resto del procedimiento.
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
        backgroundColor: "#fff",
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
        backgroundColor: "#c53434",
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '80%',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botonRegistro: {
        marginTop: 20,
        backgroundColor: "#fff",
        borderColor: "black",
        borderWidth: 2,
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
        borderWidth: 2,
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
        width: 300,
    },
    textInput2: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#c53434',
        borderWidth: 2,
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
