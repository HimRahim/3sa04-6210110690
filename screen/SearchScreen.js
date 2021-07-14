import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { allZipCode } from '../components/ZipCodeList'

export default function SearchScreen() {
    const zipCodeArray =[]
    for (const iterator of allZipCode) {
        zipCodeArray.push(iterator.ZIPCODE)
    }
    const [zipCode, setzipCode] = useState('')
    const navigation = useNavigation();
    const goToWeather = () => {
        if (zipCode.length == 0){
            alert("Zip code is empty\nPlease type zip code")
        }
        else if (zipCode.length != 5) {
            alert("Invalid Zip Code\nPlease type valid zip code")
        }
        else {
            
            if (zipCodeArray.includes(zipCode)) {
                 navigation.navigate("Weather", {zipCode: zipCode})
            }
            else {
                alert("Zip code does not exist")
            }
            
        }
    }
    return (
        <SafeAreaView>
            <Text style={styles.labelText}>Type Thailand zip code</Text>
            <TextInput 
                style={styles.input} 
                onChangeText={ (text) => setzipCode(text)}
                keyboardType='number-pad'
                placeholder='Zip Code'
                onSubmitEditing={goToWeather}
            />
            <View style={styles.container}>
                <Button title="search" onPress={goToWeather}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
    labelText: {
        fontSize: 30,
        textAlign: 'center'
    },
    container: {
        marginHorizontal: '25%',
        width: '50%'
    }
  });