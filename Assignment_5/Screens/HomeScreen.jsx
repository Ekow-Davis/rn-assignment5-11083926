import React from 'react'
import TransferBlock from '../Components/TransferBlock';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



  const verticalData = [
	{ key: '1', imageUrl: require("../assets/apple.png"), location: "Accra,Ghana", pay: "$99", label: "Apple Store", miniLabel: "Entertainment", amountColour: 'Blue', },
	{ key: '2', imageUrl: require("../assets/spotify.png"), location: "Accra,Ghana", pay: "$-6,99", label: "Spotify", miniLabel: "Music",  },
	{ key: '3', imageUrl: require("../assets/moneyTransfer.png"), location: "Accra,Ghana", pay: "$5,99", label: "Money Transfer", miniLabel: "Transaction", amountColour: 'Blue', },
	{ key: '4', imageUrl: require("../assets/grocery.png"),  location: "Accra,Ghana", pay: "$51,99", label: "Grocery", miniLabel: "Shopping", amountColour: 'Blue', },
	{ key: '5', imageUrl: require("../assets/apple.png"),  location: "Accra,Ghana", pay: "$-12,99", label: "Apple Store", miniLabel: "Entertainment",} ,
	{ key: '6', imageUrl: require("../assets/moneyTransfer.png"), location: "Accra,Ghana", pay: "$16,99", label: "Money Transfer", miniLabel: "Transaction", amountColour: 'Blue', },
	{ key: '7', imageUrl: require("../assets/spotify.png"),  location: "Accra,Ghana", pay: "$-5,99", label: "Spotify", miniLabel: "Music", },
	{ key: '8', imageUrl: require("../assets/grocery.png"), location: "Accra,Ghana", pay: "$23,99", label: "Grocery", miniLabel: "Shopping", amountColour: 'Blue', },
  ];

     

const HomeScreen = ({navigation}) => {
  return (
    <>
    <SafeAreaView style={{flex: 1,}}>
    <View style={styles.container}>
    <StatusBar style="auto"/>
    <ScrollView>
    {/*Code body*/}

    <View style={{marginBottom: 15, marginTop: 30,}}>
      <View style={{ alignItems: 'center', justifyContent: 'center', }}>
        <Text
        onPress={() => { navigation.navigate('Settings')}}
        >Home Screen</Text>
      </View>
        

    <View>
      <View style={{flexDirection: 'row', alignItems: 'center',}}>
        <Text style={{fontWeight: 'bold', fontSize: 25, marginRight: 90,}}> Transaction</Text>
        <Text style={{color: 'blue', fontWeight: 'bold', marginLeft: 80,}}> See all</Text>
      </View>
      <View>
        <TransferBlock 
        label='Apple Store'
        miniLabel='Entertainment'
        pay='- $5.99'
        />
        <FlatList          
        data={verticalData}
        renderItem={({ item }) => (
          <PopularJobCard
          location={item.location}
          amount={item.amount}
          imageUrl={item.imageUrl}
          label={item.label}
          miniLabel={item.miniLabel}
          />
        )}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{alignItems: 'center', paddingLeft: 20,}}
      />
      </View>
    </View>

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