import React from 'react'
import { View, FlatList } from 'react-native'

// import feed from '../../../assets/data/feed';
import Post from '../../components/Post'


const SearchResultScreen = (props) => {

    const {posts} = props;

    // console.log(props)

    return (
        <View>
            <FlatList
                data={posts}
                renderItem={({ item }) => <Post post={item} />}
                keyExtractor={(index) => {
                    return index.toString();
                }} />
        </View>
    )
}

export default SearchResultScreen
