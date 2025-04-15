import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, useColorScheme, ScrollView, ImageBackground } from "react-native";
import { Provider } from "react-redux";
import Store from "./Store";
import HomeScreen from "./screens/HomeScreen";
import StackNavigator from "./StackNavigator";

export default function App() {
   const isDarkMode = useColorScheme() === 'dark'
  return (
    <Provider store={Store}>
      <ImageBackground 
        source={{ uri: 'https://cdn.prod.website-files.com/6694e750ddf5484a13b68bbc/6694e750ddf5484a13b68c12_start-journey-pattern-v2.svg' }}
        style={styles.container}
      >
        <StackNavigator/>
        <StatusBar style="auto"/>
      </ImageBackground>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 7,
  },
  whiteText: {
    color: '#ffffff'
  },
  darkText: {
    color: '#000000'
  }
});
