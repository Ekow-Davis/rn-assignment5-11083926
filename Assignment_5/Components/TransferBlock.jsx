
import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native';

const TransferBlock = ({ imageUrl, label, pay, miniLabel, location}) => {
  return (
    <>
    <View style={styles.container}>
        
        <Text style={{position: 'absolute', left: 70, top: 15, fontWeight: 'bold',}}>Label</Text>
        <Text style={{position: 'absolute', left: 70, top: 40, opacity: 0.6,}}>miniLabel</Text>
        
        <Text style={{position: 'absolute', top:40, right: 10, }}>location</Text>
    </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: '#ffffff',
    margin: 12,
    width: 327,
    height: 74,
    padding: 8,
    marginRight: 17,
  }
  });

export default TransferBlock

