import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ClothingContext } from '../store/ClothingContext';

export default function OutfitScreen() {
  const { selectedGarments, totalPrice } = useContext(ClothingContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumen del Outfit</Text>
      <FlatList
        data={Object.values(selectedGarments)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.bodyPart}>{item.bodyPart}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          </View>
        )}
      />
      <View style={styles.total}>
        <Text style={styles.totalText}>Total: ${totalPrice.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  item: { flexDirection: 'row', padding: 15, borderBottomWidth: 1, borderColor: '#eee', alignItems: 'center' },
  bodyPart: { width: 80, fontWeight: 'bold' },
  name: { flex: 1 },
  price: { color: '#007AFF' },
  total: { marginTop: 20, padding: 20, borderTopWidth: 2, borderColor: '#000' },
  totalText: { fontSize: 24, fontWeight: 'bold', textAlign: 'right' }
});
