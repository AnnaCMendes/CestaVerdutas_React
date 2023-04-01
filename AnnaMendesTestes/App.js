
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from 'react-native';
//import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_400Regular_Italic } from '@expo-google-fonts/montserrat';
//import AppLoading from 'expo-app-loading';
import Cesta from './src/screans/Cesta/Index';
import mock from './src/mocks/cesta';
import AppLoading from 'expo-app-loading';

  export default function App() {
    /*let [fonteCarregada] = useFonts({
      "MontserratRegular": Montserrat_400Regular,
      "MontserratBold" : Montserrat_700Bold,
    });
  
    if (!fonteCarregada) {
      return <AppLoading />;
    }*/

  return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar />
        <Cesta {...mock}/>
      </SafeAreaView>

  );
}
