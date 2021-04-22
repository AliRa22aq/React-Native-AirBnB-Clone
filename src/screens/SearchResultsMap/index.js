import React, { useState } from 'react'
import { View } from 'react-native';
import MapView from 'react-native-maps';

import places from '../../../assets/data/feed'
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem';

function SearchResultsMap() {

    const [selectedPlaceId, setSelectedPlaceId] = useState();

    return (
        <View>
            <MapView
                style={{ width: '100%', height: '100%' }}
                initialRegion={{
                    latitude: 53.2734,
                    longitude: -7.77832031,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >

                {
                    places.map(place => <CustomMarker
                        coordinate={place.coordinate}
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
                <PostCarouselItem post={places[0]} />
            </View>

        </View>
    )
}

export default SearchResultsMap
