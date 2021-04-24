import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResultScreen from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';

import {useRoute} from '@react-navigation/native'

const Tab = createMaterialTopTabNavigator();


function SearchResultTabNavigator() {

    const route = useRoute();

    const {guests} = route.params

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
            indicatorStyle: {
                backgroundColor: '#f15454'
            }
        }}>
            <Tab.Screen name="list">
                {()=> <SearchResultScreen guests={guests}/> }
            </Tab.Screen>

            <Tab.Screen name="map">
                {()=> <SearchResultsMap guests={guests}/> }
            </Tab.Screen>

        </Tab.Navigator>
    )
}

export default SearchResultTabNavigator
