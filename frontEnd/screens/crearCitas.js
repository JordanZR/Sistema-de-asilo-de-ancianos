import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';

export default function CrearCitas() {
  const [duiPaciente, setDuiPaciente] = useState('');
  const [fechaCita, setFechaCita] = useState('');
  const [horaCita, setHoraCita] = useState('');
  const [detallesCita, setDetallesCita] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear cita</Text>
      <TextInput
        style={styles.input}
        placeholder="DUI del paciente"
        value={duiPaciente}
        onChangeText={(text) => setDuiPaciente(text)}
      />
      <Text style={styles.label}>Fecha de cita</Text>
      <DatePicker
        style={styles.datePicker}
        date={fechaCita}
        mode="date"
        placeholder="Selecciona fecha"
        format="YYYY-MM-DD"
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        onDateChange={(date) => setFechaCita(date)}
      />
      <Text style={styles.label}>Hora de la cita</Text>
      <TextInput
        style={styles.input}
        placeholder="Hora de la cita"
        value={horaCita}
        onChangeText={(text) => setHoraCita(text)}
      />
      <Text style={styles.label}>Detalles de la cita</Text>
      <TextInput
        style={styles.textArea}
        placeholder="Detalles de la cita"
        value={detallesCita}
        onChangeText={(text) => setDetallesCita(text)}
        multiline
        numberOfLines={4}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 15
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  datePicker: {
    width: '100%',
    marginBottom: 10,
  },
  textArea: {
    width: '100%',
    height: 120,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    textAlignVertical: 'top',
  },
});
