import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View>
            <Text style={styles.propsStyle}>{props.name}</Text>
            <Text style={styles.propsStyle}>{props.main}</Text>
            <Text style={styles.propsStyle}>{props.description}</Text>
            <Text style={styles.propsStyle}>{props.temp} °C</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    propsStyle: {
        textAlign: 'center'
    }
})