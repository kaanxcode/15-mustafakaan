import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppRoutes from './src/routes/AppRoutes';
import { SafeAreaView } from 'react-native-safe-area-context';
import TestScreen from './src/TestScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1,}}>
      <AppRoutes />
      <StatusBar style="auto" />
      {/* <TestScreen /> */}
    </SafeAreaView>
  );
}




