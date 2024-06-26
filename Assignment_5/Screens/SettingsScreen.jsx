import React from 'react'
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';



const SettingsScreen = ({navigation}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <>
    <SafeAreaView style={{flex: 1,}}>
    <View style={styles.container}>
    <StatusBar style="auto"/>
    <ScrollView>
    {/*Code body*/}

    <View style={{marginBottom: 15, marginTop: 30,}}>
        <Text
        onPress={() => { navigation.navigate('HomeScreen')}}
        style={{fontSize: 20, fontWeight: 'bold', marginBottom: 30, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}
        >Settings</Text>

        <View style={{margin: 10, flexDirection: 'column',}}>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, alignItems: 'center',}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', margin: 15, }}>
              Language
            </Text>
            <Ionicons name="chevron-forward" size={24} color="#000" />
          </View>        
          <View style={{flex: 1, width: 340, top: -8, marginLeft:10, height: 1, backgroundColor: '#ccc', opacity: 0.4,}}/>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, alignItems: 'center',}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', margin: 15, }}>
            My Profile
          </Text>
          <Ionicons name="chevron-forward" size={24} color="#000" />          
          </View>
          <View style={{flex: 1, width: 340, top: -8, marginLeft:10, height: 1, backgroundColor: '#ccc', opacity: 0.4,}}/>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, alignItems: 'center',}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', margin: 15, }}>
            Contact Us
          </Text>
          <Ionicons name="chevron-forward" size={24} color="#000" />      
        </View>
        <View style={{flex: 1, width: 340, top: -8, marginLeft:10, height: 1, backgroundColor: '#ccc', opacity: 0.4,}}/>
          
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, alignItems: 'center',}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', margin: 15, }}>
            Change Password
          </Text>
          <Ionicons name="chevron-forward" size={24} color="#000" />
        </View>
        <View style={{flex: 1, width: 340, top: -8, marginLeft:10, height: 1, backgroundColor: '#ccc', opacity: 0.4,}}/>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, alignItems: 'center',}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', margin: 15, }}>
                Privacy Policy
            </Text>
            <Ionicons name="chevron-forward" size={24} color="#000" />
        </View>
        <View style={{flex: 1, width: 340, top: -8, marginLeft:10, height: 1, backgroundColor: '#ccc', opacity: 0.4,}}/>
        
        </View>

        <View>
          <Text style={{fontSize: 24, fontWeight: 'bold', margin: 15, }}> Theme </Text>
          <Switch style={{position: 'absolute', right: 70, top: 15, width: 10,}}/>
        </View>
    </View>

    {/*Code body position: 'absolute',*/}
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
    },
  });

export default SettingsScreen