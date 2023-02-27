import React from "react";
import { useState } from "react";
import { Alert, View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 24,
        marginBottom: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 6,
        padding: 10,
        marginBottom: 10,
        width: wp('80%'),
    },
    button: {
        backgroundColor: '#ccc',
        padding: 8,
        borderRadius: 6,
        width: wp('80%')
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center'
    }
})


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleEmail = (text) => {
        setEmail(text);
    }
    const handlePassword = (text) => {
        setPassword(text);
    }

    const handleLogin = () => {
        console.log(email, password);
        if (email === "sergio" && password === "1234") {
            navigation.navigate('Camera'); //vamos a pantalla Camera
        } else {
            Alert.alert("Credenciales inválidas")
            setEmail('');
            setPassword('');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla de acceso</Text>
            <TextInput
                placeholder="Introduce tu email"
                keyboardType="email-address" // teclado adaptado a la entrada de correo electrónico
                onChangeText={handleEmail}
                value={email}
                style={styles.input}
            />

            <TextInput
                placeholder="Introduce tu password"
                secureTextEntry={true}
                onChangeText={handlePassword}
                value={password}
                style={styles.input}
            />

            <TouchableOpacity
                onPress={() => handleLogin()}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Login;