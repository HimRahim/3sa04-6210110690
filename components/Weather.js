import { useNavigation } from '@react-navigation/native';
import React,{ useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    const APIKey = 'ea8a78efe25ee1ecb41aee4b7fec0e2c'
    const navigation = useNavigation()
    const [forecastInfo, setForecastInfo] = useState({
        name: '-',
        main: '-',
        description: '-',
        temp: 0
    })

    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=${APIKey}`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        name: json.name,
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                    })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])
       
    return (
        <ImageBackground source={require('../bg1.jpg')} style={styles.backdrop}>
            <Text style={styles.cityNameStyle}>{forecastInfo.name}</Text>
            <Text style={styles.zipCodeStyle}>{props.zipCode}</Text>
            <Forecast {...forecastInfo} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    cityNameStyle: {
        paddingTop: 10,
        fontSize: 30,
        color:'white'
    },
    zipCodeStyle: {
        color: 'white',
        paddingTop: 10,
        fontSize: 20
    }
})