import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ClothingContext = createContext();

const GARMENTS_KEY = 'garments';
const MEASUREMENTS_KEY = 'measurements';
const PHOTO_KEY = 'user_photo';

export const ClothingProvider = ({ children }) => {
  const [selectedGarments, setSelectedGarments] = useState({});
  const [measurements, setMeasurements] = useState({});
  const [userPhoto, setUserPhoto] = useState(null);

  // Cargar datos guardados
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const garments = await AsyncStorage.getItem(GARMENTS_KEY);
    const meas = await AsyncStorage.getItem(MEASUREMENTS_KEY);
    const photo = await AsyncStorage.getItem(PHOTO_KEY);
    
    if (garments) setSelectedGarments(JSON.parse(garments));
    if (meas) setMeasurements(JSON.parse(meas));
    if (photo) setUserPhoto(photo);
  };

  const selectGarment = async (garment) => {
    const newGarments = { ...selectedGarments, [garment.bodyPart]: garment };
    setSelectedGarments(newGarments);
    await AsyncStorage.setItem(GARMENTS_KEY, JSON.stringify(newGarments));
  };

  const removeGarment = async (bodyPart) => {
    const newGarments = { ...selectedGarments };
    delete newGarments[bodyPart];
    setSelectedGarments(newGarments);
    await AsyncStorage.setItem(GARMENTS_KEY, JSON.stringify(newGarments));
  };

  const saveMeasurements = async (meas) => {
    setMeasurements(meas);
    await AsyncStorage.setItem(MEASUREMENTS_KEY, JSON.stringify(meas));
  };

  const savePhoto = async (photoUri) => {
    setUserPhoto(photoUri);
    await AsyncStorage.setItem(PHOTO_KEY, photoUri);
  };

  const totalPrice = Object.values(selectedGarments).reduce((sum, g) => sum + g.price, 0);

  return (
    <ClothingContext.Provider value={{
      selectedGarments,
      measurements,
      userPhoto,
      selectGarment,
      removeGarment,
      saveMeasurements,
      savePhoto,
      totalPrice
    }}>
      {children}
    </ClothingContext.Provider>
  );
};
