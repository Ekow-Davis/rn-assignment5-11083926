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
    <SafeAreaView style={[{flex: 1, backgroundColor: '#fff',}, isDarkTheme && styles.darkContainer]}>
    <View style={[styles.container, isDarkTheme && styles.darkContainer]}>
    <StatusBar style="auto"/>
    <ScrollView>
    {/*Code body*/}

    <View style={{marginBottom: 15, marginTop: 30,}}>
        <Text
        onPress={() => { navigation.navigate('HomeScreen')}}
        style={[{fontSize: 20, fontWeight: 'bold', marginBottom: 30, alignItems: 'center', justifyContent: 'center', textAlign: 'center' },isDarkTheme && styles.darkText ]}
        >Settings</Text>

        <View style={{margin: 10, flexDirection: 'column',}}>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, alignItems: 'center',}}>
            <Text style={[{fontSize: 18, fontWeight: 'bold', margin: 10, }, isDarkTheme && styles.darkText]}>
              Language
            </Text>
            <Ionicons name="chevron-forward" style={{marginRight: 10,}} size={24} color={isDarkTheme ? '#fff' : '#000'} />
          </View>        
          <View style={{flex: 1, width: 350, top: -8, marginLeft:10, height: 1, backgroundColor: '#ccc', opacity: 0.4,}}/>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, alignItems: 'center',}}>
          <Text style={[{fontSize: 18, fontWeight: 'bold', margin: 10, }, isDarkTheme && styles.darkText]}>
            My Profile
          </Text>
          <Ionicons name="chevron-forward" size={24} style={{marginRight: 10,}} color={isDarkTheme ? '#fff' : '#000'} />          
          </View>
          <View style={{flex: 1, width: 350, top: -8, marginLeft:10, height: 1, backgroundColor: '#ccc', opacity: 0.4,}}/>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, alignItems: 'center',}}>
          <Text style={[{fontSize: 18, fontWeight: 'bold', margin: 10, }, isDarkTheme && styles.darkText]}>
            Contact Us
          </Text>
          <Ionicons name="chevron-forward" size={24} style={{marginRight: 10,}} color={isDarkTheme ? '#fff' : '#000'} />      
        </View>
        <View style={{flex: 1, width: 350, top: -8, marginLeft:10, height: 1, backgroundColor: '#ccc', opacity: 0.4,}}/>
          
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, alignItems: 'center',}}>
          <Text style={[{fontSize: 18, fontWeight: 'bold', margin: 10, }, isDarkTheme && styles.darkText]}>
            Change Password
          </Text>
          <Ionicons name="chevron-forward" size={24} style={{marginRight: 10,}} color={isDarkTheme ? '#fff' : '#000'} />
        </View>
        <View style={{flex: 1, width: 350, top: -8, marginLeft:10, height: 1, backgroundColor: '#ccc', opacity: 0.4,}}/>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, alignItems: 'center',}}>
            <Text style={[{fontSize: 18, fontWeight: 'bold', margin: 10, }, isDarkTheme && styles.darkText]}>
                Privacy Policy
            </Text>
            <Ionicons name="chevron-forward" size={24} style={{marginRight: 10,}} color={isDarkTheme ? '#fff' : '#000'} />
        </View>
        <View style={{flex: 1, width: 350, top: -8, marginLeft:10, height: 1, backgroundColor: '#ccc', opacity: 0.4,}}/>
        
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={[{fontSize: 24, fontWeight: 'bold', margin: 10,}, isDarkTheme && styles.darkText]}> Theme </Text>
          <Switch 
          value={isDarkTheme}
          onPress={() => {console.log('pressed')}}
          onValueChange={() => setIsDarkTheme((previousState) => !previousState)}          
          style={{marginLeft: 220, }}
          />
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
    darkContainer: {
      backgroundColor: '#000',
    },
    darkText: {
      color: '#fff',
    },

  });

export default SettingsScreen