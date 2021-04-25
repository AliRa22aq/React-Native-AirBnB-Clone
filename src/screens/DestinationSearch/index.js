import React from 'react'
import { View } from 'react-native'
import styles from './styles';
import { useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow'

import {GOOGLE_MAPS_API_KEY} from "@env"


const DestinationSearchScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Where are you going?'
                fetchDetails
                onPress={(data, details = null) => {
                    console.log(data, details);
                    navigation.navigate("Guests", {viewport: details.geometry.viewport})
                }}
                styles={{
                    textInput: styles.textInput
                }}
                query={{
                    key: GOOGLE_MAPS_API_KEY,
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
