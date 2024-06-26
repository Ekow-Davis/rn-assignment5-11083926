import React from 'react'
import TransferBlock from '../Components/TransferBlock';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const HomeScreen = ({navigation}) => {
  return (
    <>
    <SafeAreaView style={{flex: 1,}}>
    <View style={styles.container}>
    <StatusBar style="auto"/>
    <ScrollView>
    {/*Code body*/}

    <View style={{marginBottom: 15, marginTop: 30,}}>
        <Text
        onPress={() => { navigation.navigate('Settings')}}
        >Home Screen</Text>

    <TransferBlock />

    </View>

    {/*Code body*/}
    </ScrollView>
    </View>
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeScreen