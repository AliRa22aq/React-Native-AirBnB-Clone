import React from 'react'
import { View, Text, FlatList } from 'react-native'

import feed from '../../../assets/data/feed';
import Post from '../../components/Post'

const SearchResultScreen = () => {
    return (
        <View>
            <FlatList 
                data= {feed}
                renderItem = {({item})=> <Post post={item}/>}
                keyExtractor={(item, index) => {
                    return  index.toString();
                   }}            />
        </View>
    )
}

export default SearchResultScreen
