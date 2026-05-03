import React, { useContext } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ClothingContext } from '../store/ClothingContext';

export default function PhotoScreen() {
  const { userPhoto, savePhoto } = useContext(ClothingContext);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (!result.canceled) {
      savePhoto(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {userPhoto ? (
        <Image source={{ uri: userPhoto }} style={styles.photo} />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>No hay foto</Text>
        </View>
      )}
      <Button title="Seleccionar mi foto" onPress={pickImage} />
      <Text style={styles.text}>Selecciona una foto de cuerpo entero para personalizar tu modelo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  photo: { width: 300, height: 400, borderRadius: 12, marginBottom: 20 },
  placeholder: { width: 300, height: 400, backgroundColor: '#eee', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  placeholderText: { color: '#999' },
  text: { textAlign: 'center', color: '#666', marginTop: 20 }
});
