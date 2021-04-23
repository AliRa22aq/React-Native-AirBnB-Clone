import React from 'react'
import { View } from 'react-native'
import feed from '../../../assets/data/feed';
import DetailedPost from '../../components/DetailedPost'
import {useRoute} from '@react-navigation/native'

console.log("Hello" + feed)

const PostScreen = () => {
    
    const route = useRoute();
    // console.log(route.params)

    const post = feed.find(place => place.id === route.params.postId )

    return (
        <View>
            <DetailedPost post={post}/>
        </View>
    )
}

export default PostScreen;
