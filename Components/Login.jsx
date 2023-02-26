import React from "react";
import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';


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

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = () => {
        console.log(email, password);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Pantalla de acceso</Text>
            <TextInput 
                placeholder="Introduce tu email"
                keyboardType="email-address" // teclado adaptado a la entrada de correo electrónico
                onChange={handleEmail}
                value={email}
                style={styles.input}
            />

            <TextInput 
                placeholder="Introduce tu password"
                secureTextEntry={true}
                onChange={handlePassword}
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