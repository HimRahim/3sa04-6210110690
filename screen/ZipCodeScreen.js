import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, View, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]
   

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {navigation.navigate('Weather', {zipCode: code})
    }} underlayColor='white' activeOpacity={0.8}>
        <View style={styles.zipItem}>
            <Text style={styles.itemStyle}>{place}</Text>
            <Text style={styles.itemStyle}>{code}</Text>
        </View>
    </TouchableHighlight>
)

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../source/bg2.jpg')} style={styles.backdrop}>
            <View style={styles.container}>
                <FlatList
                    data = {availableZipItems}
                    keyExtractor= {item => item.code}
                    renderItem =  {({item}) => <ZipItem {...item} navigation={navigation}/>}
                />
                <Button title="Search" onPress={() => {navigation.navigate('Search')}}/>
            </View>
        </ImageBackground>
        )
}

const styles = StyleSheet.create({
    backdrop: {
        width: '100%',
        height: '100%'
        
    },
    container: {
        flex: 1,
        height: '100%'
    },
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    itemStyle: {
        color: '#665954'
    }
})