import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu Probador Virtual</Text>
      <Image 
        source={{ uri: 'https://img.icons8.com/ios-filled/200/tshirt.png' }}
        style={styles.icon}
      />
      <Text style={styles.text}>Configura medidas, carga prendas y prueba tu outfit en 3D.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  icon: { width: 100, height: 100, marginBottom: 20 },
  text: { textAlign: 'center', color: '#666' }
});
