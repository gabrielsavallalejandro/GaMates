import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//Import Components
import Header from './src/components/Header';
import Home from './src/screens/Home';
//Import Constants
import {colors} from "./src/constants/colors"


// Lo que se muestra en la pantalla
export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Home/>

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    backgroundColor: colors.lightGrey,
    justifyContent:'flex-start'
  },
});
