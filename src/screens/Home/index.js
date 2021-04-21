import React from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native'
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native'


const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <View>
            < ImageBackground 
                source= {require('../../../assets/images/wallpaper.jpg')} 
                style={styles.image} >
            <Pressable
                style={styles.searchButton}
                onPress = {()=> navigation.navigate("Destination Search")}
                >

                <Text style={styles.searchButtonText}> 
                <Fontisto name='search' size={15} color="#f15454" />
                {" "} Where are you going? 
                </Text>
            </Pressable>
            
            


            <Text style={styles.title}>Go Near</Text> 

            <Pressable
                style={styles.button}
                onPress = {()=> console.warn("Explore Btn Clicked")}
                >

                <Text style={styles.buttonText}> Explore nearby stays </Text>
            </Pressable>

            

        
        </ImageBackground>
        </View>
    )
}

export default HomeScreen
