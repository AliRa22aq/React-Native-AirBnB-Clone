import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles';
import { useNavigation } from '@react-navigation/core'

const NoData = () => {
    const navigation = useNavigation();
const goToPogePage = () => {
    navigation.navigate('Destination Search')
}

    return (
        <View style={styles.container}>
            <Text style={styles.text}>No Accomodation found. Please search a differnt Area</Text>
            <Pressable 
                onPress={goToPogePage}
                style={styles.button}> 
                    <Text> Search Again </Text> 
             </Pressable>
        </View>
    )
}

export default NoData
