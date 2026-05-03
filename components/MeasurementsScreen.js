import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { ClothingContext } from '../store/ClothingContext';

const defaultMeasurements = {
  height: '',
  chest: '',
  waist: '',
  hips: '',
  inseam: '',
  shoulderWidth: ''
};

export default function MeasurementsScreen() {
  const { measurements, saveMeasurements } = useContext(ClothingContext);
  const [form, setForm] = useState(measurements || defaultMeasurements);

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSave = () => {
    saveMeasurements(form);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mis Medidas (cm)</Text>
      {Object.keys(defaultMeasurements).map((key) => (
        <View key={key} style={styles.inputGroup}>
          <Text style={styles.label}>{key.charAt(0).toUpperCase() + key.slice(1)}</Text>
          <TextInput
            style={styles.input}
            value={form[key]}
            onChangeText={(value) => handleChange(key, value)}
            keyboardType="numeric"
          />
        </View>
      ))}
      <Button title="Guardar" onPress={handleSave} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  inputGroup: { marginBottom: 15 },
  label: { marginBottom: 5, fontWeight: 'bold' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10 }
});
