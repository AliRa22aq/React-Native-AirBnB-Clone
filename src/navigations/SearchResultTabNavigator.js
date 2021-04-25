import React, { useEffect, useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResultScreen from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';
import { listPosts } from '../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'
import { Text } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay';



import { useRoute } from '@react-navigation/native'
import NoData from '../screens/NoData';

const Tab = createMaterialTopTabNavigator();


function SearchResultTabNavigator() {

    const route = useRoute();
    const { guests, viewport } = route.params
    // console.log(guests, viewport)

    const [posts, setPosts] = useState([])
    const [isDataThere, setIsDataThere] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    console.log(isDataThere)

    useEffect(() => {

        const fetchPosts = async () => {
            setIsLoading(true)

            try {
                const postResult = await API.graphql(
                    graphqlOperation(listPosts, {
                        filter: {
                            and: {
                                maxGuests: {
                                    ge: guests
                                },
                                latitude: {
                                    between: [
                                        viewport.southwest.lat,
                                        viewport.northeast.lat,
                                    ]
                                },
                                longitude: {
                                    between: [
                                        viewport.southwest.lng,
                                        viewport.northeast.lng,
                                    ]
                                }
                            }
                        }
                    })
                )
                console.log("hhsdhfsdlkjfhlaskdjfasd")
                console.log(postResult)
                setIsLoading(false)
                setPosts(postResult.data.listPosts.items)
                setIsDataThere(postResult.data.listPosts.items.length ? true: false)


            } catch (e) {
                console.log(e)
            }
        }
        fetchPosts()
    }, [])

    if(isLoading) return <Spinner color="#f56c6c" visible={true} size="large" overlayColor="white"/> 

    if(!isDataThere) return <NoData />


    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
            indicatorStyle: {
                backgroundColor: '#f15454'
            }
        }}>
            <Tab.Screen name="list">
                {() => <SearchResultScreen posts={posts} />}
            </Tab.Screen>

            <Tab.Screen name="map">
                {() => <SearchResultsMap posts={posts} />}
            </Tab.Screen>

        </Tab.Navigator>
    )
}

export default SearchResultTabNavigator
