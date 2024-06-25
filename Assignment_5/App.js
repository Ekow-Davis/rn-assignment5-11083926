import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

{/*
import LogInPage from './Pages/LogInPage';
import Homepage from './Pages/Homepage'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()

const App = () => {

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>        
        <Stack.Screen name="LogInPage" component={LogInPage} />
        <Stack.Screen name="Homepage" component={Homepage} />
      </Stack.Navigator>
    </NavigationContainer>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafd',
  },

  pressed: {
    opacity: 0.5,
  },

});


export default App
*/}