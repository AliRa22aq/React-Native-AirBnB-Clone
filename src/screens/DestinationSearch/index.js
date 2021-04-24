import React, { useState } from 'react'
import { View } from 'react-native'
import styles from './styles';
import { useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow'

const DestinationSearchScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Where are you going?'
                fetchDetails
                onPress={(data, details = null) => {
                    // console.log(data, details);
                    navigation.navigate("Guests")
                }}
                styles={{
                    textInput: styles.textInput
                }}
                query={{
                    key: 'AIzaSyDXICfH2JVKph-3cf1yOPxM7F3vqfMAVPU',
                    language: 'en',
                    types: '(cities)'
                }}
                suppressDefaultStyles
                renderRow={(item) => <SuggestionRow item={item} />}
            />

        </View>
    )
}

export default DestinationSearchScreen
