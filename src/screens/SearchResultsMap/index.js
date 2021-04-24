import React, { useState, useEffect, useRef } from 'react'
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'

import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';

import { listPosts } from '../../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'

function SearchResultsMap(props) {

    const guests = props.guests;


    const [selectedPlaceId, setSelectedPlaceId] = useState();

    const map = useRef();
    const flatListRef = useRef();
    const viewConfig = useRef({ itemVisiblePercentThreshold: 70 })
    const onViewChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            const selectedPlace = viewableItems[0].item
            setSelectedPlaceId(selectedPlace.id)
        }
    }
    )

    const width = useWindowDimensions().width;

    const [posts, setPosts] = useState([])

    useEffect(() => {

        const fetchPosts = async () => {

            try {
                const postResult = await API.graphql(
                    graphqlOperation(listPosts, {
                        filter: {
                            maxGuests: {
                                ge: guests
                            }
                        }
                    }))
                // console.log(postResult.data.listPosts.items)
                setPosts(postResult.data.listPosts.items)

            } catch (e) {
                console.log(e)
            }
        }
        fetchPosts()
    }, [])


    useEffect(() => {

        if (!flatListRef || !selectedPlaceId) {
            return;
        }

        const index = posts.findIndex(place => place.id === selectedPlaceId)
        flatListRef.current.scrollToIndex({ index })

        const selectedPlace = posts[index];
        const region = {
            latitude: selectedPlace.latitude,
            longitude: selectedPlace.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
        }
        map.current.animateToRegion(region)



    }, [selectedPlaceId])

    return (
        <View>
            <MapView
                style={{ width: '100%', height: '100%' }}
                ref={map}
                initialRegion={{
                    latitude: 28.4815637,
                    longitude: -16.2291304,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >

                {
                    posts.map(place => <CustomMarker
                        coordinate={{ latitude: place.latitude, longitude: place.longitude }}
                        price={place.newPrice}
                        isSelected={place.id === selectedPlaceId}
                        onPress={() => { setSelectedPlaceId(place.id) }}
                    />
                    )}

            </MapView>

            <View style={{
                position: 'absolute',
                bottom: 40
            }}>

                <FlatList
                    ref={flatListRef}
                    horizontal
                    snapToInterval={width - 60}
                    snapToAlignment="center"
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    data={posts}
                    renderItem={({ item }) => <PostCarouselItem post={item} />}
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChanged.current}
                />

            </View>

        </View>
    )
}

export default SearchResultsMap
