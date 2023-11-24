import { StyleSheet } from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppRoutes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#912149',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center', // Center the header title
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Müşteri Ol' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;

const styles = StyleSheet.create({});
