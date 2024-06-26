import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';

const appleImage = require('../assets/apple.png')

const SectionBlock = ({ imageUrl, amountColour, label, miniLabel, pay }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageUrl} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.miniLabel}>{miniLabel}</Text>
      </View>
      <Text style={[styles.pay, {color: amountColour},]}>{pay}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#ffffff',
    margin: 12,
    width: 327,
    height: 74,
    padding: 8,
    marginRight: 17,
    justifyContent: 'space-between'
  },
  imageContainer: {
    backgroundColor: '#D1D1D1',
    borderRadius: 30, 
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: 20,
    width: 20,
    borderRadius: 15, 
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  label: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 9,
  },
  miniLabel: {
    fontSize: 13,
    opacity: 0.6,
    marginTop: 4,
    marginLeft: 9,
  },
  amount: {
    fontWeight: 'bold',
    fontSize: 17,
  }
});

export default SectionBlock;
