import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]
   

const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => {
        navigation.navigate('Weather', {zipCode: code})
    }} underlayColor='white' activeOpacity={0.8}>
        <View style={styles.zipItem}>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
)

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <FlatList 
                data = {availableZipItems}
                keyExtractor= {item => item.code}
                renderItem =  {({item}) => <ZipItem {...item} navigation={navigation}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        paddingVertical: 20
    },
    zipPlace: {
        flex: 1
    },
    zipCode: {
        flex: 1
    }
})