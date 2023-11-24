import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import AppRoutes from './src/routes/AppRoutes';
import { SafeAreaView } from 'react-native-safe-area-context';
import TestScreen from './src/TestScreen';
import store from './src/service/store';
import { Provider } from 'react-redux';



export default function App() {
  return (
    <Provider store={store}>

    <SafeAreaView style={{ flex: 1,}}>
      
      <AppRoutes />
      <StatusBar style="auto" />
      {/* <TestScreen /> */}
      
    </SafeAreaView>
    </Provider>
  );
}




