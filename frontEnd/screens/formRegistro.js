// RegistroFormulario.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet} from 'react-native';
import axios from 'axios';
import { DateTimePickerAndroid} from '@react-native-community/datetimepicker';

const RegistroFormulario = () => {
    const [dui, setDui] = useState('');
    const [primerNombre, setPrimerNombre] = useState('');
    const [primerApellido, setPrimerApellido] = useState('');
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');

    const handleRegistro = async () => {
        try {
            const response = await axios.post(
                "http://10.0.2.2:4000/usuario",
                {
                    dui:dui,
                    primernombre:primerNombre,
                    primerapellido:primerApellido,
                    usuario:usuario,
                    contrasena:contrasena,
                    fechanacimiento:fechaNacimiento,
                    jvpm:"",
                    rol:"Paciente"
                }
            );
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>DUI:</Text>
            <TextInput
                style={styles.input}
                value={dui}
                onChangeText={(text) => setDui(text)}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Primer Nombre:</Text>
            <TextInput
                style={styles.input}
                value={primerNombre}
                onChangeText={(text) => setPrimerNombre(text)}
            />

            <Text style={styles.label}>Primer Apellido:</Text>
            <TextInput
                style={styles.input}
                value={primerApellido}
                onChangeText={(text) => setPrimerApellido(text)}
            />

            <Text style={styles.label}>Correo:</Text>
            <TextInput
                style={styles.input}
                value={usuario}
                onChangeText={(text) => setUsuario(text)}
                keyboardType="email-address"
            />

            <Text style={styles.label}>Contraseña:</Text>
            <TextInput
                style={styles.input}
                value={contrasena}
                onChangeText={(text) => setContrasena(text)}
                secureTextEntry
            />

            <Text style={styles.label}>Fecha de Nacimiento:</Text>
            <TextInput style={styles.input} 
                value={fechaNacimiento}
                onChangeText={(text) => setFechaNacimiento(text)}
            />

            <Text style={styles.label}>Fecha seleccionada: {fechaNacimiento}</Text>

            <Button title="Completar Registro" onPress={handleRegistro} color="#3498db" style={styles.button} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 50, // Margen desde la parte superior
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20, // Mayor margen inferior para los input
        paddingHorizontal: 10,
    },
    label: {
        marginBottom: 5, // Margen inferior para las etiquetas
    },
    button: {
        marginTop: 20, // Mayor margen superior para el botón
    },
});

export default RegistroFormulario;
