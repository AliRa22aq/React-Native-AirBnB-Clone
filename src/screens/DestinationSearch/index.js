import React, { useState } from 'react'
import { View } from 'react-native'
import styles from './styles';
import {useNavigation} from '@react-navigation/native'
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
                    console.log(data, details);
                    navigation.navigate("Guests")
                }}
                styles={{
                    textInput: styles.textInput
                }}
                query={{
                    key: process.env.SECRET_API_KEY,
                    language: 'en',
                    types: '(cities)'
                }}
                suppressDefaultStyles
                renderRow={(item)=> <SuggestionRow item={item}/> }
            />
            
            {/* Input components */}
            {/* <TextInput  
                style={[styles.textInput, {marginTop: 50}]}
                placeholder="Where are you going?"
                value={inputText}
                onChangeText={setInputText}
                /> */}

            {/* List of destination */}
            {/* <FlatList 
                data={SearchResults}
                renderItem= {({item})=>
                { 
                return (
                    <Pressable 
                    onPress={()=> navigation.navigate("Guests")} style={styles.row}>
                    <View style={styles.iconContainer}>
                        <Entypo name='location-pin' size={30} color="black" /> 
                    </View>
                        <Text style={styles.locationText}> {item.description} </Text>
                    </Pressable> )}}
             /> */}
                
        </View>
    )
}

export default DestinationSearchScreen
