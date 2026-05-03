import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { ClothingContext } from '../store/ClothingContext';

const { width } = Dimensions.get('window');

export default function TryOnScreen() {
  const { selectedGarments, measurements, userPhoto } = useContext(ClothingContext);
  const garments = Object.values(selectedGarments);

  return (
    <View style={styles.container}>
      <View style={styles.previewContainer}>
        {userPhoto ? (
          <Image source={{ uri: userPhoto }} style={styles.userPhoto} resizeMode="contain" />
        ) : (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>👤</Text>
            <Text style={styles.placeholderSubtext}>No hay foto</Text>
          </View>
        )}
        
        {garments.map((garment) => (
          <View key={garment.id} style={[styles.garmentOverlay, getGarmentPosition(garment.bodyPart)]}>
            {garment.imageUri ? (
              <Image source={{ uri: garment.imageUri }} style={styles.garmentImage} resizeMode="contain" />
            ) : (
              <View style={styles.garmentPlaceholder}>
                <Text style={styles.garmentText}>{garment.name}</Text>
              </View>
            )}
          </View>
        ))}
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>Probador Virtual</Text>
        {Object.keys(measurements).length > 0 && (
          <Text style={styles.measurements}>
            Medidas: {measurements.height}cm, {measurements.weight}kg
          </Text>
        )}
        
        <Text style={styles.subtitle}>Prendas seleccionadas:</Text>
        <ScrollView horizontal style={styles.garmentList}>
          {garments.length > 0 ? (
            garments.map((g) => (
              <View key={g.id} style={styles.garmentTag}>
                <Text style={styles.garmentTagText}>{g.bodyPart}: {g.name}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.emptyText}>No hay prendas seleccionadas</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

function getGarmentPosition(bodyPart) {
  switch (bodyPart) {
    case 'torso': return { top: '30%' };
    case 'piernas': return { top: '50%' };
    case 'pies': return { top: '75%' };
    default: return { top: '30%' };
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  previewContainer: { 
    flex: 1, 
    margin: 10, 
    backgroundColor: '#fff', 
    borderRadius: 10, 
    overflow: 'hidden',
    position: 'relative'
  },
  userPhoto: { width: '100%', height: '100%' },
  placeholder: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  placeholderText: { fontSize: 80 },
  placeholderSubtext: { color: '#999', marginTop: 10 },
  garmentOverlay: { 
    position: 'absolute', 
    left: '10%', 
    right: '10%',
    height: '30%'
  },
  garmentImage: { width: '100%', height: '100%', opacity: 0.8 },
  garmentPlaceholder: { 
    backgroundColor: 'rgba(0,122,255,0.3)', 
    padding: 10, 
    borderRadius: 8,
    alignItems: 'center'
  },
  garmentText: { color: '#007AFF', fontWeight: 'bold' },
  infoContainer: { 
    padding: 15, 
    backgroundColor: '#fff', 
    borderTopWidth: 1, 
    borderColor: '#e0e0e0' 
  },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  measurements: { color: '#666', marginBottom: 15 },
  subtitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  garmentList: { flexDirection: 'row' },
  garmentTag: { 
    backgroundColor: '#007AFF', 
    paddingHorizontal: 12, 
    paddingVertical: 6, 
    borderRadius: 15, 
    marginRight: 8 
  },
  garmentTagText: { color: '#fff', fontSize: 12 },
  emptyText: { color: '#999', fontStyle: 'italic' }
});
