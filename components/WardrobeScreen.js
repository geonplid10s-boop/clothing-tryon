import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ClothingContext } from '../store/ClothingContext';

const mockGarments = [
  { id: '1', name: 'Camiseta Básica', bodyPart: 'shirt', price: 19.99 },
  { id: '2', name: 'Jeans', bodyPart: 'pants', price: 49.99 },
  { id: '3', name: 'Sujetador', bodyPart: 'bra', price: 29.99 },
  { id: '4', name: 'Gorro', bodyPart: 'hat', price: 14.99 },
  { id: '5', name: 'Calcetines', bodyPart: 'socks', price: 9.99 },
  { id: '6', name: 'Zapatillas', bodyPart: 'shoes', price: 89.99 },
  { id: '7', name: 'Maquillaje', bodyPart: 'makeup', price: 34.99 }
];

export default function WardrobeScreen() {
  const { selectGarment } = useContext(ClothingContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Armario</Text>
      <FlatList
        data={mockGarments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.item}
            onPress={() => selectGarment(item)}
          >
            <Text style={styles.bodyPart}>{item.bodyPart}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  item: { flexDirection: 'row', padding: 15, borderBottomWidth: 1, borderColor: '#eee', alignItems: 'center' },
  bodyPart: { width: 80, fontWeight: 'bold' },
  name: { flex: 1 },
  price: { color: '#007AFF' }
});
