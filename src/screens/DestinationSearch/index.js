import React, { useState } from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'
import styles from './styles';
import SearchResults from '../../../assets/data/search'
import Entypo from 'react-native-vector-icons/Entypo'



const DestinationSearchScreen = () => {


    const [inputText, setInputText] = useState("")


    return (
        <View style={styles.container}>
           
            {/* Input components */}
            <TextInput  
                style={styles.textInput}
                placeholder="Where are you going?"
                value={inputText}
                onChangeText={setInputText}
                />

            {/* List of destination */}
            <FlatList 
                data={SearchResults}
                renderItem= {({item})=>
                { 
                return (
                    <View style={styles.row}>
                    <View style={styles.iconContainer}>
                        <Entypo name='location-pin' size={30} color="black" /> 
                    </View>
                        <Text style={styles.locationText}> {item.description} </Text>
                    </View> )}}
             />
                
        </View>
    )
}

export default DestinationSearchScreen
