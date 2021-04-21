import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/Home'
import SearchResultScreen from '../screens/SearchResults';
import GuestScreen from '../screens/Guests';



const Stack = createStackNavigator();


function ExploreMavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='Welcome'
                component= {HomeScreen}
                options= {{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name={'SearchResults'}
                component= {SearchResultScreen}
                options= {{
                    title: 'Search your destination',
                }}
            />

        </Stack.Navigator>
    )
}

export default ExploreMavigator
