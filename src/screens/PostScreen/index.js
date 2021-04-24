import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
// import feed from '../../../assets/data/feed';
import DetailedPost from '../../components/DetailedPost'
import { useRoute } from '@react-navigation/native'

const PostScreen = () => {

    const route = useRoute();
    console.log(route)
    const post = route.params.post;

    return (
        <View>
            <DetailedPost post={post} />
        </View>
    )
}

export default PostScreen;
