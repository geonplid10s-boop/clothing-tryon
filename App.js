import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import PhotoScreen from './components/PhotoScreen';
import MeasurementsScreen from './components/MeasurementsScreen';
import WardrobeScreen from './components/WardrobeScreen';
import TryOnScreen from './components/TryOnScreen';
import OutfitScreen from './components/OutfitScreen';
import { ClothingProvider } from './store/ClothingContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ClothingProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Inicio" component={HomeScreen} />
          <Tab.Screen name="Foto" component={PhotoScreen} />
          <Tab.Screen name="Medidas" component={MeasurementsScreen} />
          <Tab.Screen name="Armario" component={WardrobeScreen} />
          <Tab.Screen name="Probar" component={TryOnScreen} />
          <Tab.Screen name="Outfit" component={OutfitScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ClothingProvider>
  );
}
