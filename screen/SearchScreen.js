import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SearchScreen() {
    const [zipCode, setzipCode] = useState('')
    const navigation = useNavigation();
    console.log(zipCode);
    return (
        <SafeAreaView>
            <TextInput 
                style={styles.input} 
                onChangeText={ (text) => setzipCode(text)}
                keyboardType='number-pad'
                placeholder='Zip Code'
                onSubmitEditing={() => {
                    if (zipCode.length != 5) {
                        alert("Invalid Zip Code")
                    }
                    else {
                        navigation.navigate("Weather", {zipCode: zipCode})
                    }
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
  });